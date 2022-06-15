function addItem() {
    let newLine = document.getElementById('newItemText').value;
    if (newLine.length === 0) return;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newLine));

    let remove = document.createElement("a");
    let delLink = document.createTextNode("[Delete]");

    remove.appendChild(delLink);
    remove.href = "#";
    remove.addEventListener("click", deleteItem);

    li.appendChild(remove);
    document.getElementById('items').appendChild(li);

    function deleteItem() {
        li.remove();
    }

    document.getElementById('newItemText').value  = "";
}