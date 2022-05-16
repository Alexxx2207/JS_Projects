function listOfNames(names) {
    names.sort((a, b) => a.localeCompare(b));
    names.forEach((el, index) => console.log(`${index+1}.${el}`))
}