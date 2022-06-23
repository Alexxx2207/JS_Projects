class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if(this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(p => p.plantName == plantName)
        if(!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if(plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`)
        }

        if(quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }

        plant.ripe = true;
        plant.quantity += quantity;

        if(quantity == 1) {
            return `${plant.quantity} ${plant.plantName} has successfully ripened.`
        }

        return `${plant.quantity} ${plant.plantName}s have successfully ripened.`
    }

    harvestPlant(plantName) {
        let plant = this.plants.find(p => p.plantName == plantName);

        if(!plant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if(!plant.ripe) {
            throw new Error(`The ${plant.plantName} cannot be harvested before it is ripe.`);
        }

        for (let index = 0; index < this.plants.length; index++) {
            if(this.plants[index].plantName == plant.plantName) {
                this.plants.splice(index, 1);
            }
        }

        let {quantity} = plant;

        this.storage.push({
            plantName,
            quantity
        });

        this.spaceAvailable += plant.spaceRequired;

        return `The ${plant.plantName} has been successfully harvested.`
    }

    generateReport() {
        let result = [];

        result.push(`The garden has ${ this.spaceAvailable } free space left.`);

        this.plants.sort((p1, p2) => { 
            return p1.plantName.localeCompare(p2.plantName)
        });

        let plantedPlantsStrings = this.plants.map(p => `${p.plantName}`);
        result.push(`Plants in the garden: ${plantedPlantsStrings.join(', ')}`);

        if(this.storage.length <= 0) 
        {
            result.push(`Plants in storage: The storage is empty.`);
        } else {
            let storageStrings = this.storage.map(p => `${p.plantName} (${p.quantity})`);
            result.push(`Plants in storage: ${storageStrings.join(', ')}`);
        }

        return result.join('\n');
    }
}
