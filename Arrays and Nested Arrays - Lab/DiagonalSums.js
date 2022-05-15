function diagonalSums(matrix) {
    
    let main = 0;
    let secondary = 0;


    for (let row = 0; row < matrix.length; row++) {
        main += matrix[row][row];
        secondary += matrix[matrix.length - 1 - row][row];
    }

    console.log(main + ' ' + secondary);
}