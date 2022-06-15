function validate() {
    let target = document.getElementById('email');
    target.addEventListener('change', validEmail);

    let regex = /[a-z]+@[a-z]+\.[a-z]{2,4}/g;

    function validEmail(ev) {
        if (!regex.test(target.value)) {
            ev.target.className = 'error';
        } else {
            ev.target.className = '';
        }

    }

}