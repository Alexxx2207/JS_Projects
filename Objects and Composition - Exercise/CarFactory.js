function solve(carRequirements) {
    let car = {
        model: carRequirements.model,
    };

    if(carRequirements.power % 2 == 0) {
        carRequirements.power = Math.floor(carRequirements.power - 1);
    }
    
    if(carRequirements.wheelsize % 2 == 0) {
        carRequirements.wheelsize = Math.floor(carRequirements.wheelsize - 1);
    }

    if(carRequirements.power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800,
        };
    } else if(carRequirements.power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400,
        };
    } else if(carRequirements.power >= 120) {
        car.engine = {
            power: 200,
            volume: 3500,
        };
    }

    if(carRequirements.carriage == 'hatchback') {
        car.carriage = {
            type: carRequirements.carriage,
            color: carRequirements.color
        };
    } else if(carRequirements.carriage == 'coupe') {
        car.carriage = {
            type: carRequirements.carriage,
            color: carRequirements.color
        };
    }

    car.wheels = [];
    car.wheels.length = 4;
    car.wheels.fill(carRequirements.wheelsize,0, 4);

    console.log(car);
    return car;
}
