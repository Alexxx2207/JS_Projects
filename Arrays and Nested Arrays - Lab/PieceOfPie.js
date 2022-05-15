function pieceOfPie(flavors, start, end) {
    let startIndex = flavors.indexOf(start);
    let endIndex = flavors.indexOf(end);

    return flavors.slice(startIndex, endIndex+1);
}

