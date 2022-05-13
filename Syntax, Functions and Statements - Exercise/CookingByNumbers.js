
function cookingByNumbers(number, operation1, operation2, operation3, operation4, operation5) {

    let operations = [operation1, operation2, operation3, operation4, operation5];
    for (let index = 0; index < operations.length; index++) {
        
        switch (operations[index]) {
            case 'chop':
                number /= 2;
                break;
        
            case 'dice':
                number = Math.sqrt(number);
                break;
        
            case 'spice':
                number++;
                break;
        
            case 'bake':
                number *= 3;
                break;
        
            case 'fillet':
                number *= 0.8;
                break;
        }
        console.log(number);
    }
}
