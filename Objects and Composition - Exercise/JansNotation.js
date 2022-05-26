function solve(inputArr) {
    let numbers = [];
    let invalid = false;
    for (let index = 0; index < inputArr.length; index++) {
        const element = inputArr[index];

        if (typeof element == 'string') {
            if (numbers.length < 2) {
                console.log('Error: not enough operands!');
                invalid = true;
                break;
            }
            else {
                let result = 0;
                let number2 = numbers.pop();
                let number1 = numbers.pop();

                if (element == '+') {
                    result = number1 + number2;
                } else if (element == '-') {
                    result = number1 - number2;
                } else if (element == '*') {
                    result = number1 * number2;
                } else if (element == '/') {
                    result = number1 / number2;
                }

                numbers.push(result);
            }
        } else if (typeof element == 'number') {
            numbers.push(element);
        }
    }

    if (!invalid) {
        if (numbers.length == 1) {
            console.log(numbers[0]);
        } else if (numbers.length > 1) {
            console.log('Error: too many operands!');
        } else if (numbers.length < 1) {
            console.log('Error: not enough operands!');
        }
    }
}