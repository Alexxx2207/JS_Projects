function exctractIncreasingSubsequence(arr) {
    let max = Number.NEGATIVE_INFINITY;
    let result = [];

   for (let index = 0; index < arr.length; index++) {
        if(arr[index] >= max) {
            max = arr[index];
            result.push(max);
        }
    }
    return result;
}