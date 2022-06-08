function outer(initialNumber) {
    let number = initialNumber;

    return function(newNumber) {
        number = initialNumber;
        return number += newNumber;
    }
}

let add5 = outer(5);
console.log(add5(2));
console.log(add5(3));
