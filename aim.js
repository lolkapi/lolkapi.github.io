var box = document.getElementById("xd");
var anya1 = document.getElementById("kapdbe")

function black() {
    document.body.classList.toggle("black")
}
let i = 0
function randomxd(){
    i++;
    document.getElementById("pa").innerHTML = i;
}
setInterval(function(){
    var xdd =`${Math.random()*40}px`
    anya1.style.bottom = `${Math.random()*95}%`;
    anya1.style.left = `${Math.random()*97}%`;
    anya1.style.background = `linear-gradient(${Math.random()*255}deg ,rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255}),rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
    anya1.style.color =`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
    anya1.style.height=xdd
    anya1.style.width=xdd
},1000)

