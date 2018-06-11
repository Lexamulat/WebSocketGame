module.exports = {

    createPlayer(socket) {
        console.log(`Connected #${socket.id}`)

        socket.on('reconnect', (msg) => {
            console.log(`Reconnected #${socket.id}; ${msg}`)
        })

        socket.on('disconnect', (msg) => {
            console.log(`Disconnected #${socket.id}; ${msg}`)
        })
    }
}