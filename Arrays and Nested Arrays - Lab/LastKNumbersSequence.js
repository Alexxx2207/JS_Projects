function lastkNumbersSequence(n, k) {
    let arr = [1];  

    for (let index = 1; index < n; index++) {
        let arrToSum = arr.slice(k - 2 * k);
        let sum = arrToSum.reduce((acc, num) => { return acc + num; }, 0);     
        arr[index] = sum
    }

    return arr;
}