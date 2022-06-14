function engineeringCompany(arr) {
    let records = new Map();

    arr.forEach(element => {
        let tokens = element.split(' | ');

        if(!records.has(tokens[0])) {
            records.set(tokens[0], new Map());

            records.get(tokens[0]).set(tokens[1], Number(tokens[2]));
        } else {
            if(!records.get(tokens[0]).has(tokens[1])) {
                records.get(tokens[0]).set(tokens[1], Number(tokens[2]));
            } else {
                let newAmount = records.get(tokens[0]).get(tokens[1]) + Number(tokens[2]);
                records.get(tokens[0]).set(tokens[1], newAmount);
            }
        }
    });

    for (const [brand, modelsQuantities] of records.entries()) {
        let models = [];
        for (const [model, quantity] of modelsQuantities.entries()) {
            models.push(`###${model} -> ${quantity}`);
        }

        console.log(`${brand}\n` + models.join('\n'));
    }
}

engineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);