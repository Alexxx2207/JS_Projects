function NegativePositiveNumbers(arr) {
    let result = [];

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] < 0)
            result.unshift(arr[index]);
        else
            result.push(arr[index]);
    }

    result.forEach(el => console.log(el));
}
