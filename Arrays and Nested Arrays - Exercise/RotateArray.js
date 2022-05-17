function rotateArray(arr, rotation) {
    let result = [];

    for (let index = 0; index < arr.length; index++) {
        result[(index+rotation) % arr.length] = arr[index];
    }

    console.log(result.join(" "));
}
