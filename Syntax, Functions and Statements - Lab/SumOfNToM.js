
function NtoMSum(n,m){
    let intN = Number(n);
    let intM = Number(m);

    let sum = 0;

    for (let currentNum = intN; currentNum <= intM; currentNum++) {
        sum += currentNum;
        
    }

    console.log(sum);
}