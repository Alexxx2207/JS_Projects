function juice(arr) {
    let stock = new Map();

    let bottles = new Map();

    arr.forEach(element => {
        let tokens = element.split(' => ');

        if(!stock.has(tokens[0])) {
            stock.set(tokens[0], Number(tokens[1]));
        } else {
            let newQuantity = stock.get(tokens[0]) + Number(tokens[1]);
            stock.set(tokens[0], newQuantity);
        }

        if(stock.get(tokens[0]) >= 1000) {
            if(!bottles.has(tokens[0])) {
                bottles.set(tokens[0], Math.floor(stock.get(tokens[0]) / 1000));
            } else {
                let newBottles = bottles.get(tokens[0]) + Math.floor(stock.get(tokens[0]) / 1000);
                bottles.set(tokens[0], newBottles)
            }

            let reaminingJuice = stock.get(tokens[0]) % 1000;
            stock.set(tokens[0], reaminingJuice);
        }
    });

    for (const [name, quantity] of bottles.entries()) {
        console.log(`${name} => ${quantity}`);
    }
}

juice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

)