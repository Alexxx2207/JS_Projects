function solve(commands) {
    let cars = [];
    let inheritance = {};

    function a(input = commands) {
        input.forEach(command => {
            let tokens = command.split(" ");

            if (tokens[2] == 'inherit') {
                let newCar = {
                    name: tokens[1]
                };
                let existingCar = cars.find(car => car.name == tokens[3]);
                inheritance[newCar.name] = existingCar.name;

                cars.push(newCar);
            } else  if (tokens[0] == 'create') {
                cars.push({
                    name: tokens[1]
                });
            } else if (tokens[0] == 'set') {
                let carToManipulate = cars.find(car => car.name == tokens[1]);

                carToManipulate[tokens[2]] = tokens[3];
            } else if (tokens[0] == 'print') {

                Object.keys(inheritance).forEach(inheritableCarName => {

                    let inheritableCar = cars.find(car => car.name == inheritableCarName);
                    let inheritedCar = cars.find(car => car.name == inheritance[inheritableCarName]);
                    Object.keys(inheritedCar).forEach(key => {
                        if(key !== 'name') {
                            inheritableCar[key] = inheritedCar[key];
                        }
                    })
                });

                let carToPrint = cars.find(car => car.name == tokens[1]);

                let infoToPrint = [];

                Object.keys(carToPrint)
                .map(key => {
                    if (key !== 'name')
                    infoToPrint.push(`${key}:${carToPrint[key]}`);
                });
                console.log(infoToPrint.join(","));
            }
        });
    }
    a();
}