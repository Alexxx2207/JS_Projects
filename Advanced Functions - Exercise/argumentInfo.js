function solve() {
    let argumentsRecord = {};

    Array.from(arguments).forEach(argument => {
        if(typeof argument in argumentsRecord)
            argumentsRecord[typeof argument]++;
        else
            argumentsRecord[typeof argument] = 1;
        console.log(`${typeof argument}: ${argument}`);
    });

    let sortable = [];
    for (var pair in argumentsRecord) {
        sortable.push([pair, argumentsRecord[pair]]);
    }

    sortable.sort((arg1, arg2) => {
        return arg2[1] - arg1[1];
    });

    sortable.forEach(pair => {
        console.log(`${pair[0]} = ${pair[1]}`);
    });
}
