function equalizeArray(arr) {
    let records = {};

    arr.forEach(element => {
        if(Object.keys(records).includes(element.toString())) {
            records[element]++;
        } else {
            records[element] = 1;
        }
    });

    let max = Number.MIN_SAFE_INTEGER;
    let maxQuantity = 0;
    
    for (const key in records) {
        if(records[key] > maxQuantity) {
            max = key;
            maxQuantity = records[key];
        }            
    }

    let count = 0;
    for (const element of arr) {
        if(element != max) {
            count++;
        }
    }
    return count;
}
