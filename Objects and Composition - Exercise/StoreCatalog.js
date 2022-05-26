function solve(productsInput) {
    let products = [];

    let dictionaryOfProducts = {

    };

    productsInput.forEach(product => {
        let [productName, productPrice] = product.split(' : ');
        
        productPrice = Number(productPrice);

        products.push({
            productName,
            productPrice
        });
    });

    products.sort((a, b) => a.productName > b.productName ? 1 : -1);

    products.forEach(product => {
        if(!Object.keys(dictionaryOfProducts).includes(product.productName[0]))
            dictionaryOfProducts[product.productName[0]] = [];
        
        dictionaryOfProducts[product.productName[0]].push(product);
    });

    for (const key in dictionaryOfProducts) {
        console.log(key);
        dictionaryOfProducts[key].forEach(product => {
            console.log(` ${product.productName}: ${product.productPrice}`);

        });
    }
}
