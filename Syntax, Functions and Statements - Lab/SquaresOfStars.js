function square(size = 5) {
    for (let row = 0; row < size; row++) {
        console.log("* ".repeat(size).trimEnd());      
    }
}

let size = 53;
let onRow = 1;

for (let row = 1; row <= Math.floor(size/2); row++) {
    console.log(' '.repeat(size / 2 - row+1) + '*'.repeat(onRow));
    onRow+=2 
}

for (let row = Math.floor(size/2); row >= 0 ; row--) {
    console.log(' '.repeat(size / 2 - row) +  '*'.repeat(onRow)); 
    onRow-=2 
}