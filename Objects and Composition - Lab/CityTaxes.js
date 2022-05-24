function solve(name, population, treasury, taxRate = 10) {
    let city = {
        name, 
        population,
        treasury,
        taxRate,
        collectTaxes() {
            this.treasury += Math.floor(this.population * taxRate);
        },
        applyGrowth: function(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * percentage / 100);
        },
    };

    return city;
}


