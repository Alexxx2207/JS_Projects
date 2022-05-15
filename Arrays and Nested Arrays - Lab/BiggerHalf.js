function biggerHalf(arr) {
    return arr.sort((a, b) => a - b).slice(Math.floor(arr.length/2));
}
