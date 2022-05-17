function diagonalAttack(arr) {
    let board = [];

    for (let row = 0; row < arr.length; row++) {
        board[row] = arr[row].split(' ').map(Number);        
    }
    
    let mainDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let row = 0; row < board.length; row++) {
        mainDiagonalSum += board[row][row];
    }

    for (let row = 0, col = board.length-1; row < board.length && col >= 0; row++, col--) {
        secondDiagonalSum += board[row][col];  
    }

    if(mainDiagonalSum === secondDiagonalSum) {
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board.length; col++) {
                if(row !== col && row + col !== board.length - 1) {
                    board[row][col] = mainDiagonalSum;
                }
            }            
        }
    }

    board.forEach((arr) => console.log(arr.join(' ')));
}
