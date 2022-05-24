function solve(inputArr) {
    let towns = {};

    inputArr.forEach(x => {
        let info = x.split(' <-> ');

        if(Object.keys(towns).includes(info[0])) {
            towns[info[0]] += Number(info[1])
        }
        else {
            towns[info[0]] = Number(info[1]);
        }
    });

    Object.entries(towns).forEach(town => console.log(`${town[0]} : ${town[1]}`));
}