const clc = document.getElementsByClassName('hole hole_has-mole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');


dead.textContent = clc.textContent
console.log(clc)

clc.onclick = () => {
    dead.textContent = clc
    

    /*setTimeout(() => {
        
    }, 100);*/
}