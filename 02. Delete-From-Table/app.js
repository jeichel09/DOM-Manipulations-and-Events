function deleteByEmail() {
    let toDel = document.getElementsByTagName('input')[0].value;

    let emails = document.querySelectorAll("tbody tr td:nth-child(2)");
    for (let cell of emails) {
        if (cell.textContent == toDel) {
            let line = cell.parentNode;
            line.parentNode.removeChild(line);
            document.getElementById('result').textContent = "Deleted.";
            return;
        }
    }
    document.getElementById('result').textContent = "";
}