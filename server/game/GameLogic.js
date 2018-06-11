    //             rock    scissors   paper,       lizard   spock
    // rock          0         1         -1        1          -1
    // scissors     -1         0          1        1          -1    
    // paper         1         1          0       -1           1
    // lizard       -1        -1          1        0           1 
    // spock         1         1         -1       -1           0 


    class GameLogic {
        constructor() {
            this.matrix = [
                [0, 1, -1, 1, -1],
                [-1, 0, 1, 1, -1],
                [1, -1, 0, -1, 1],
                [-1, -1, 1, 0, 1],
                [1, 1, -1, -1, 0]
            ]
        }
        playRound(first, second) {
            return this.matrix[first][second]
        }

    }

    var GameResult = new GameLogic();

    module.exports = GameResult