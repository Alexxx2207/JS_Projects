function sort(array) {
    array.sort((a, b) => {
        if(a.length > b.length) {
            return 1;
        } else if(a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }
    });

    array.forEach((el) => {console.log(el);});
}
