const game = require("./game")
const server = require("./static")
const PairsMap = require('./PairsMap')
var io = require('socket.io')(server)
var crypto = require("crypto");

var GameResult = require("./game/GameLogic")

//initial logs
io.on("connection", game.createPlayer)


//main
io.on('connection', (socket) => {


    //creating the room for two players
    socket.on("addMeInPair", (data) => {

        //cheking is anyone waiting for 
        if (io.sockets.adapter.sids[data.opponenturl] == undefined) {
            //no such connected id
            socket.emit("incorrectId", { content: "There are no player with such ID" });
        } else {
            //This person is already playing
            if (Object.keys((io.sockets.connected[data.opponenturl]).rooms).length == 2) {
                socket.emit("incorrectId", { content: "This person is already playing" });
            } else {
                // join both players in a room
                var roomId = crypto.randomBytes(20).toString('hex');
                socket.join(roomId, () => {
                    io.sockets.connected[data.opponenturl].join(roomId, () => {
                        let rooms = Object.keys(socket.rooms);
                        socket.roomID = roomId
                        io.sockets.connected[data.opponenturl].roomID = roomId
                        io.sockets.connected[data.opponenturl].join(roomId)
                            //change both screens to game mode
                        io.in(roomId).emit("gameStart", { start: "true" })

                    })
                })
            }
        }
    });

    //send message to other player in room
    socket.on("newMessageFromClient", (data) => {
        let rooms = Object.keys(socket.rooms);
        socket.to(rooms[1]).emit("newMessageToClient", { content: data.content });

    });

    socket.on("ChoosenCard", (data) => {
        //take room
        //find other socket id in this room
        //chek for this ws iD in PairsMap
        let roomsid = Object.keys(socket.rooms);
        console.log("rooms", roomsid);
        let otherRoomId = "";
        console.log("adapter", io.nsps["/"].adapter.rooms[roomsid[1]])
        let roomName = io.nsps["/"].adapter.rooms[roomsid[1]].sockets
        for (prop in roomName) {
            if (prop !== socket.id) {
                otherRoomId = prop;
                break;
            }
        }
        //get value of opponents card
        var otherPlayerCard = PairsMap.game.getValue(otherRoomId)

        socket.to(roomsid[1]).emit("opponentChooseTheCard");

        if (otherPlayerCard == undefined) {
            //if the choice was made only by one, then we add to it the status "waiting"
            PairsMap.game.addAWaitPerson(socket.id, data.CardID)

        } else {
            //send the results of game
            PairsMap.game.delPerson(otherRoomId)
            var resOfGame = GameResult.playRound(data.CardID, otherPlayerCard)
            if (resOfGame == 0) {
                io.in(roomsid[1]).emit("gameEnd", { status: "In Russia, we call it a draw. ", yoursCadr: data.CardID, opponentsCard: otherPlayerCard });
            } else {
                if (resOfGame == 1) {
                    socket.to(roomsid[1]).emit("gameEnd", { status: "Oops its looks like you lose. ", yoursCadr: otherPlayerCard, opponentsCard: data.CardID });
                    socket.emit("gameEnd", { status: "Looks like you won this one. ", yoursCadr: data.CardID, opponentsCard: otherPlayerCard });
                } else {
                    socket.to(roomsid[1]).emit("gameEnd", { status: "Looks like you won this one. ", yoursCadr: otherPlayerCard, opponentsCard: data.CardID });
                    socket.emit("gameEnd", { status: "Oops its looks like you lose. ", yoursCadr: data.CardID, opponentsCard: otherPlayerCard });
                }
            }
        }
    });



    socket.emit("seting", { seturl: "opUrl" });

    //clean results and start new game
    socket.on("RepeatGame", (data) => {
        let roomsid = Object.keys(socket.rooms);
        console.log("rooms", roomsid);
        socket.emit("opponentChooseTheCard");
    });

    //if one of the players disc -> gameover
    socket.on("disconnect", (data) => {
        let roomsid = Object.keys(socket.rooms);
        io.in(socket.roomID).emit("yorOppenentLeavesTheGame");
    });
})




server.listen(9999, () => {
    console.log("listening on http://localhost:9999")

})