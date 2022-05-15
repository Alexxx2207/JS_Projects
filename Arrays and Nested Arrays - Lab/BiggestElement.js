function biggestElement(matrix) {
    let max = Number.NEGATIVE_INFINITY;

    matrix.forEach((arr) => {
        let temporarymax = Math.max(...arr);
        
        if(temporarymax >= max)
            max = temporarymax;
    });

    return max;
}