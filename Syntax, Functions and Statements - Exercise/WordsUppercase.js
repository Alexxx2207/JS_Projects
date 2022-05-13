function wordsUppercase(string) {

    let words = string.split(/[\'\"\[\]\{\}\;\:\,\?\!\-\.\_\s]+/);

    let newWords = [];

    for (let index = 0; index < words.length; index++) {
        const element = words[index].toUpperCase();
        if(element != '')
            newWords.push(element)
    }

    console.log(newWords.join(', '));
}
