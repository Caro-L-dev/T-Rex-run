document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino');

    function control(event) {
        // keycode - keyboard touch (spacebar)
        if (event.keyCode === 32) {
        jump();
        }
    }
    document.addEventListener('keyup', control);

    function jump() {
        let position = 0;
        let timerId = setInterval(function () {
            // move down
            if (position === 150) {
                clearInterval(timerId);
                console.log('down');
                let downTimerId = setInterval(function () {
                    position -=30;
                    dino.style.bottom = position + 'px';
                },20);
            }

            // move up
            console.log('up');
            position +=30;
            dino.style.bottom = position + 'px';
        },20);
    }
});