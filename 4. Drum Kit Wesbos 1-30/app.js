document.addEventListener("keydown", (event) => {
    let key_num = event.code;
    let audio = document.querySelector(`audio[data-key=${key_num}]`);
    let pressed_ky = document.querySelector(`.key[data-key=${key_num}]`);
    if (!audio) return;

    // Add Drum Button Animation
    pressed_ky.classList.add("playing");

    // Play Audio
    audio.currentTime = 0;
    audio.play();
})


function removeAnimation(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove("playing");
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeAnimation));
