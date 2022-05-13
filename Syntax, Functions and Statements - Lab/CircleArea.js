
function calculateArea(radius) {
    if(typeof radius == typeof 2){
        
        console.log((Math.PI * radius ** 2).toFixed(2));

    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    }
}