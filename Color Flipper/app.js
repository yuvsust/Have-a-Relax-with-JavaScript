var hex_digit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']


var btn = document.getElementById('btn')
var color = document.getElementsByClassName('color-code')[0]

btn.addEventListener('click', function () {
    var hex_color = "#"
    for (var i = 0; i < 6; i++) {
        var idx = Math.floor(Math.random() * 15);
        hex_color += hex_digit[idx];
    }
    color.innerText = hex_color;
    document.getElementsByTagName('main')[0].style.backgroundColor = hex_color;
})