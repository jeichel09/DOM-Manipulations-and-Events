function focused() {
    Array.from(document.querySelectorAll('input')).forEach(i => { i.addEventListener('focus', addFocus);
                                                                          i.addEventListener('blur', addBlur); })

    function addFocus(ev) {
       ev.target.parentElement.className = 'focused';
    }

    function addBlur(ev) {
        ev.target.parentElement.className = '';
    }
}