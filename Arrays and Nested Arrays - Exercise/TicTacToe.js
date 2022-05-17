function ticTacToe(actions) {
    let board = [];
    let turn = 0;

    for (let index = 0; index < 3; index++) {
        board[index] = [];
        board[index].length = 3;
        board[index].fill(false, 0, 3);        
    }

    for (let index = 0; index < actions.length; index++, turn++) {
        let coords = actions[index].split(' ').map(Number);
        if(board[coords[0]][coords[1]] === false)
        {
            if(turn % 2 === 0) {
                board[coords[0]][coords[1]] = 'X';
            } else {
                board[coords[0]][coords[1]] = 'O';
            }
        } else {
            turn--;
            console.log("This place is already taken. Please choose another!");
        }
        if(checkWin(board)) {
            if(turn % 2 === 0) {
                console.log("Player X wins!");
            } else {
                console.log("Player O wins!");
            }
            printArr(board);

            break;
        }
        let freeSpace = false;

        for (let row = 0; row < board.length; row++) {
            if (board[row].includes(false)) {
                freeSpace = true;
            }
        }

        if(!freeSpace) {
            console.log("The game ended! Nobody wins :(");
            printArr(board);
            break;
        }
    }

    function checkWin(array) {
        for (let row = 0; row < 3; row++) {
            if(array[row][0] === array[row][1] && array[row][1] === array[row][2] && array[row][0] !== false) {
                return true;
            }            
        }
        for (let col = 0; col < 3; col++) {
            if(array[0][col] === array[1][col] && array[0][col] === array[2][col] && array[0][col] !== false) {
                return true;
            }  
        }
        if(array[0][0] === array[1][1] && array[0][0] === array[2][2] && array[0][0] !== false) {
            return true;
        } 
        if(array[0][2] === array[1][1] && array[0][2] === array[2][0] && array[0][2] !== false) {
            return true;
        } 

        return false;
    }

    function printArr(array) {
        for (let index = 0; index < 3; index++) {
            console.log(array[index].join("\t"));            
        }
    }
}

