function solve(townsInput) {
    let lowestRecords = {};

    let towns = [];

    townsInput.forEach(townInput => {
        let [townName, productName, productPrice] = townInput.split(' | ');
        productPrice = Number(productPrice)

        let newTown = {
            townName,
            productName,
            productPrice
        };

        towns.push(newTown);
    });

    towns.forEach(town => {
        if (!Object.keys(lowestRecords).includes(town.productName)) {
            lowestRecords[town.productName] = town;

        } else if (lowestRecords[town.productName].productPrice > town.productPrice) {
            lowestRecords[town.productName] = town;
        }
    });

    for (const key in lowestRecords) {
        console.log(`${key} -> ${lowestRecords[key].productPrice} (${lowestRecords[key].townName})`);
    }
}
