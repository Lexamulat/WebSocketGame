class PairsMap {
    constructor() {
        this.pairsList = new Map([
            ["ClientId", "NumOfCard"]
        ]);
    }
    show() {
        console.log(this.pairsList)
    }
    getValue(key) {
        return (this.pairsList.get(key))
    }
    addAWaitPerson(key, value) {
        this.pairsList.set(key, value)
    }
    delPerson(key) {
        this.pairsList.delete(key)
    }

}

var tempforRooms = new PairsMap();
var tempforRepeatGame = new PairsMap();
var complexObj = {
    "game": tempforRooms,
    "list": tempforRepeatGame
}

module.exports = complexObj