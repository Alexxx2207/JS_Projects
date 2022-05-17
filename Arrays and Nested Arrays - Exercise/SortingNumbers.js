function sortingNumbers(arr) {

    for (let index = 0; index < arr.length; index++) {

        for (let checkMinMaxIndex = index+1; checkMinMaxIndex < arr.length; checkMinMaxIndex++) {
            
            if(index % 2 == 1 && arr[index] < arr[checkMinMaxIndex]) {

                arr[index] = arr[index] + arr[checkMinMaxIndex];
                arr[checkMinMaxIndex] = arr[index] - arr[checkMinMaxIndex];
                arr[index] = arr[index] - arr[checkMinMaxIndex];    

            } else if(index % 2 == 0 && arr[index] > arr[checkMinMaxIndex]) {

                arr[index] = arr[index] + arr[checkMinMaxIndex];
                arr[checkMinMaxIndex] = arr[index] - arr[checkMinMaxIndex];
                arr[index] = arr[index] - arr[checkMinMaxIndex];
            }
        }
    }

    return arr;
}