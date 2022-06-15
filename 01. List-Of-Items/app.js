function addItem() {
    let newLine = document.getElementById('newItemText').value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newLine));

    document.getElementById('items').appendChild(li);

    document.getElementById('newItemText').value  = "";
}