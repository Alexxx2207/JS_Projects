function orbit(arr) {
    let board = [];

    for (let row = 0; row < arr[1]; row++) {
        board[row] = [];
        board[row].length = arr[0];
    }

    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            board[row][col] = Math.max(Math.abs(row - arr[2]), Math.abs(col - arr[3])) + 1;
        }   
    }
    
    board[arr[2]][arr[3]] = 1;

    board.forEach((arr) => {
        console.log(arr.join(' '));
    });
}