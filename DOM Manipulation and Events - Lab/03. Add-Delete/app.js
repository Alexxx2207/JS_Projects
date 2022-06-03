function addItem() {
    let listElement = document.getElementById("items");

    let inputText = document.getElementById("newItemText").value;

    let newListItem = document.createElement("li");

    let aDeleteElement = document.createElement("a");

    aDeleteElement.appendChild(document.createTextNode("[Delete]"));
    aDeleteElement.href = "#";

    aDeleteElement.addEventListener('click', function(e) {
        newListItem.remove();
    });

    newListItem.appendChild(document.createTextNode(inputText));
    newListItem.appendChild(aDeleteElement);

    listElement.appendChild(newListItem);
}