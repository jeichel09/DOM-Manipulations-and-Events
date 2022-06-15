function attachGradientEvents() {
    let grad = document.getElementById('gradient');
    let result = document.getElementById('result');
    grad.addEventListener('mousemove', gradMove);
    grad.addEventListener('mouseout', gradOut);

    function gradMove(ev) {
        let off = Math.floor((ev.offsetX / grad.clientWidth) * 100);
        result.textContent = off + "%";
    }

    function gradOut () {
        
    }
}