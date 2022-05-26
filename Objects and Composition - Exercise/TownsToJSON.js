function solve(table) {
    let towns = [];

    let columns = table[0].split('|').filter(element => element).map(element => element.trim());

    for (let index = 1; index < table.length; index++) {
        let dataRow = table[index].split('|').filter(element => element).map(element => element.trim());
        
        dataRow[1] = Math.round(Number(dataRow[1]) * 100) / 100;
        dataRow[2] = Math.round(Number(dataRow[2]) * 100) / 100;

        let town = {};
        for (let index = 0; index < dataRow.length; index++) {
            town[columns[index]] = dataRow[index];
        }

        towns.push(town);
    }

    return JSON.stringify(towns);
}
