function factory(functions, orders) {
    let objects = [];

    orders.forEach(order => {
        let tempObject = order.template;

        order.parts.forEach(funcName => {
            tempObject[funcName] = functions[funcName];
        });

        objects.push(tempObject);
    });
    
    return objects;
}

