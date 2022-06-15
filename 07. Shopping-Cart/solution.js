function solve() {
    let textField = document.getElementsByTagName('textarea')[0];
    let sum = 0;
    let productsBought = [];
    Array.from(document.querySelectorAll('.add-product')).forEach(i => { i.addEventListener('click', addItem); });
    document.querySelector('.checkout').addEventListener('click', checkOut);

    function addItem(ev) {
        let productName = ev.target.parentNode.previousElementSibling.firstElementChild.textContent;
        if (!productsBought.includes(productName)) {
            productsBought.push(productName);
        }
        let productPrice = Number(ev.target.parentNode.nextElementSibling.textContent);
        sum += productPrice;
        textField.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
    }

    function checkOut(ev) {
        textField.value += `You bought ${productsBought.join(", ")} for ${sum.toFixed(2)}.`;
        let  buttons = document.getElementsByClassName('add-product');
        for ( let btn of buttons) {
            btn.disabled = true;
        }
        document.querySelector('.checkout').disabled = true;
        
    }

    textField.value = "";
}