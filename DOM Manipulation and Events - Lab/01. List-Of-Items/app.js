function addItem() {
    let text = document.getElementById("newItemText").value;

    let unorderedListElement = document.getElementById("items");

    let newListItem = document.createElement("li");

    newListItem.appendChild(document.createTextNode(text));

    unorderedListElement.appendChild(newListItem);

    document.getElementById("newItemText").value = '';
}