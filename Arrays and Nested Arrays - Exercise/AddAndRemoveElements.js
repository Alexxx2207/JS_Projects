function addRemove(commands) {
    let arr = [];

    for (let index = 1; index <= commands.length; index++) {
        if(commands[index-1].toLowerCase() == 'add') {
            arr.push(index);
        } else if(arr.length !== 0 && commands[index-1].toLowerCase() == 'remove') {
            arr.pop();
        }
    }

    if(arr.length === 0) {
        console.log("Empty");
    } else {
        arr.forEach((el) => console.log(el));
    }
}