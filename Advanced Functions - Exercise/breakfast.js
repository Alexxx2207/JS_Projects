function solution() {
    let recipes = [
        {
            name: 'apple',
            carbohydrate: 1,
            flavour: 2
        },
        {
            name: 'lemonade',
            carbohydrate: 10,
            flavour: 20
        },
        {
            name: 'burger',
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        {
            name: 'eggs',
            protein: 5,
            fat: 1,
            flavour: 1
        },
        {
            name: 'turkey',
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    ];

    let storage = {
        carbohydrate: 0,
        protein: 0,
        fat: 0,
        flavour: 0
    }

    return function (input) {
        let tokens = input.split(' ');

        if (tokens[0] == 'restock') {
            storage[tokens[1]] += Number(tokens[2]);
            return 'Success';
        } else if (tokens[0] == 'prepare') {
            let quantity = Number(tokens[2]);

            let recipe = recipes.find(r => r.name == tokens[1]);

            for (const element of Object.keys(recipe)) {

                if (element !== 'name' && recipe[element] * quantity > storage[element]) {
                    return `Error: not enough ${element} in stock`;
                }
            }
            Object.keys(recipe).forEach(element => {
                storage[element] -= quantity * recipe[element];
            });
            return 'Success';
        } else if (tokens[0] == 'report') {
            return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
        }
    }
}