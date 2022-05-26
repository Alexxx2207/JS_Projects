function solve(k, height) {
    let max = Number.MIN_SAFE_INTEGER;

    height.forEach(element => {
        if(element > max) {
            max = element;
        }
    });

    return max - k > 0 ? max - k : 0;
}