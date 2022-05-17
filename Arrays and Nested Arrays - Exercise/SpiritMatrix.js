function spiralMatrix(width, height) {
    let matrix = [];
    for (let row = 0; row < width; row++) {
        matrix[row] = [];
        matrix[row].length = height;
    }

    let counter = 1;
    let radius = (width / 2).toFixed();


    for (let level = 0; level < radius; level++) {
        for (let col = level; col < matrix.length-level; col++, counter++) {
            matrix[level][col] = counter;
        }

        for (let row = level+1; row < matrix.length-level; row++, counter++) {
            matrix[row][matrix.length-level-1] = counter;
        }
       
        for (let col = matrix.length-level-2; col >= level; col--, counter++) {
            matrix[matrix.length-level-1][col] = counter;
        }

        for (let row = matrix.length-level-2; row > level; row--, counter++) {
            matrix[row][level] = counter;
        }
    }

    matrix.forEach((arr) => console.log(arr.join(' ')));
}