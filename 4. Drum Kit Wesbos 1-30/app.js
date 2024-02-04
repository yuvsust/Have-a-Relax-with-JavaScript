const keys = document.querySelectorAll('.key');
let volume = document.getElementById('volume-slider');

keys.forEach(key => key.addEventListener('transitionend', removeAnimation));

document.addEventListener("keydown", (event) => {
    let key_num = event.code;
    let audio = document.querySelector(`audio[data-key=${key_num}]`);
    let pressed_ky = document.querySelector(`.key[data-key=${key_num}]`);
    if (!audio) return;

    // Add Drum Button Animation
    pressed_ky.classList.add("playing");

    // Play Audio
    audio.currentTime = 0;
    audio.volume = volume.value / 100;
    audio.play();
})


function removeAnimation(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove("playing");
}

// JS for volume slieder
for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    // e.style.setProperty('width', '50%');
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }