function sum(arr, startIndex, endIndex) {
    if(!Array.isArray(arr)) {
        return NaN;
    }
    
    arr = arr.map(item => Number(item));
    
    startIndex = Math.max(startIndex, 0);
    endIndex = Math.min(endIndex, arr.length-1);

    return arr.slice(startIndex, endIndex+1).reduce((acc, current) => {
        return acc + current;
    }, 0);
}