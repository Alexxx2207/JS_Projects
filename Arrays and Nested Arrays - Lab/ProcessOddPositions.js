function processOddPositions(arr) {
    let result = [];

    for (let index = 1; index < arr.length; index+=2) {
        result.push(arr[index]);
    }
    
    console.log(
        result
        .map(el => el * 2)
        .reverse()
        .join(' ')
    );
}

