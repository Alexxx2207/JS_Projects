function aggregate(arr) {

    let result = 0;
    for (let index = 0; index < arr.length; index++) {
        result += arr[index];
    }
    console.log(result);

    result = 0;

    for (let index = 0; index < arr.length; index++) {
        result += 1/arr[index];
    }
    console.log(result);

    result = ''

    for (let index = 0; index < arr.length; index++) {
        result += arr[index];
    }

    console.log(result);
}
