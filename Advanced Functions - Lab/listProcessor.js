function result(commands = []) {
    let text = [];

    function a(input = commands) {
        input.forEach(item => {
            let inputInfo = item.split(" ");

            if(inputInfo[0] == 'add') {
                text.push(inputInfo[1]);
            } else if(inputInfo[0] == 'remove') {
                text = text.filter(textItem => textItem !== inputInfo[1]);
            } else if(inputInfo[0] == 'print') {
                console.log(text.join(","));
            }
        });
    }
    a();
}