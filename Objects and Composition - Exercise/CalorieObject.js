function solve(food) {
    let object = {};
    
    for (let index = 0; index < food.length; index+=2) {
        object[food[index]] = Number(food[index+1]);        
    }
    console.log(object);
}

