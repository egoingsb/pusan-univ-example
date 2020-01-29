import anime from "animejs";
import './style.css';
var input = prompt('word?');
var tags = '';
for (var i = 0; i < input.length; i++) {
    tags += `<div>${input[i]}</div>`;
}
document.querySelector('#stage').innerHTML = tags;
setInterval(function () {
    var divs = document.querySelectorAll('#stage>div');
    for (var i = 0; i < divs.length; i++) {
        anime({
            targets: divs[i],
            translateX: (document.body.clientWidth-50)*Math.random(),
            duration: 1000 * Math.random() 
        })
    }
}, 1000);