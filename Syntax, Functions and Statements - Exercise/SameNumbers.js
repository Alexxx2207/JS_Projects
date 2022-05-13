function solve(num) {
    let numStr = num.toString();
    let sum = 0;
    let valid = true;
    let digit = numStr[0];

    for (let index = 0; index < numStr.length; index++) {
        sum += Number(numStr[index]);

        if(digit != numStr[index])
        {
            valid = false;
        }
    }

    console.log(valid);
    console.log(sum);
}

