document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino');
    let isJumping = false;

    function control(event) {
        // keycode - keyboard touch (spacebar)
        if (event.keyCode === 32) {
            if (!isJumping) {
                isJumping = true;
                jump();
            }
        
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
                    if (position === 0) {
                        clearInterval(downTimerId);
                        isJumping = false;
                    };
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