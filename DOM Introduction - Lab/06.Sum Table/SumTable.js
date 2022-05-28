function sumTable() {
    let costs = Array.from(document.querySelectorAll("table tr td:nth-of-type(2)"));

    let sum = 0;
    
    costs.forEach(cost => {
        sum += Number(cost.textContent);
    });
    
    let sumElement = document.getElementById("sum");
    sumElement.textContent = sum;
}