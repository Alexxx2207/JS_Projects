function checkForMagic(matrix) {
    let isMagic = true;

    let initialSum = matrix[0].reduce((acc, currentValue) => {
        return acc + currentValue;
    }, 0)

    for (let index = 1; index < matrix.length; index++) {
        let colSum = matrix[index].reduce((acc, currentValue) => {
            return acc + currentValue
        }, 0);

        if(colSum !== initialSum) {
            isMagic = false;
            break;
        }        
    }
    
    if(isMagic) {
        for (let col = 0; col < matrix.length; col++) {
            let colSum = 0;
            for (let row = 0; row < matrix.length; row++) {
                colSum += matrix[row][col];
            }     
            
            if(colSum !== initialSum) {
                isMagic = false;
                break;
            }
        }
    }

    return isMagic;
}
