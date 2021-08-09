var valueElement = document.getElementById("value");

var decreaseBtn = document.getElementsByClassName("btn")[0];

var resetBtn = document.getElementsByClassName("btn")[1];

var increaseBtn = document.getElementsByClassName("btn")[2];

increaseBtn.addEventListener("click", () => {
    var val = parseInt(valueElement.innerText);
    valueElement.innerText = val + 1;
})


decreaseBtn.addEventListener("click", () => {
    var val = parseInt(valueElement.innerText);
    valueElement.innerText = val - 1;
})


resetBtn.addEventListener("click", () => {
    valueElement.innerText = 0;
})
