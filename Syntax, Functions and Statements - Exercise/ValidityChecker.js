function validityChecker(x1,y1,x2,y2) {
    var valid1 = Number.isInteger(Math.sqrt((x1-0)**2 + (y1 - 0) ** 2));
    var valid2 = Number.isInteger(Math.sqrt((x2-0)**2 + (y2 - 0) ** 2));
    var valid3 = Number.isInteger(Math.sqrt((x2-x1)**2 + (y2 - y1) ** 2));

    if(valid1){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if(valid2){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if(valid3){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
