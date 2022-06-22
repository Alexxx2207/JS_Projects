class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if(value < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = value;
    }

    shopping(product) {
        if(this.budget < product[1]) {
            throw new Error("Not enough money to buy this product");
        }

        this.products.push(product[0]);
        this.budget -= product[1];

        return `You have successfully bought ${product[0]}!`;
    }

    recipes(recipe) {
        for (const element of recipe.productsList) {
            if(!this.products.includes(element)) {
                throw new Error("We do not have this product");
            }
        };

        this.dishes.push({
            recipeName: recipe.recipeName,
            productsList : recipe.productsList
        });

        return `${recipe.recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        let dishToAdd = this.dishes.find(d => d.recipeName == dish);
        if(!dishToAdd) {
            throw new Error("We do not have this dish");
        }
        
        if(Object.keys(this.guests).some(guestName => guestName == name)) {
            throw new Error("This guest has already been invited");
        }

        this.guests[name] = dishToAdd.recipeName;

        return `You have successfully invited ${name}!`;

    }

    showAttendance() {
        let result = [];

        Object.keys(this.guests).forEach(guestName => {
            let dish = this.dishes.find(d => d.recipeName == this.guests[guestName]);

            result.push(`${guestName} will eat ${dish.recipeName}, which consists of ${dish.productsList.join(', ')}`);
        });

        return result.join('\n');
    }
    
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
