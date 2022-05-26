function solve() {

    let object = {
        mage(name) {
            let mage = {
                name,
                health: 100,
                mana: 100,
                cast(ability) {
                    this.mana--;
                    console.log(`${this.name} cast ${ability}`);
                }
            };

            return mage;
        },
        fighter(name) {
            let fighter = {
                name,
                health: 100,
                stamina: 100,
                fight() {
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                }
            };

            return fighter;
        }
    };

    return object;
}