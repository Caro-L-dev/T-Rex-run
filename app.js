document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino');

    function control(event) {
        // keycode - keyboard touch (spacebar)
        if (event.keyCode === 32) {
        console.log('pressed');
        }
    }
    document.addEventListener('keyup', control);
});