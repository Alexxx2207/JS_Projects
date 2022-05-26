function solve(heroesInfoArray) {
    let heroes = [];
    
    heroesInfoArray.forEach(heroInfo => {
        let [name, level, items] = heroInfo.split(' / ');
        
        level = Number(level);
        items = items ? items.split(', ') :  [];
        
        let hero = {
            name,
            level,
            items
        };

        heroes.push(hero);
    });

    return JSON.stringify(heroes);
}
