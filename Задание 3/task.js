const hole = document.getElementsByClassName('hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

   
for (let i = 0; i < 9; i++) {
    hole[i].onclick = () => {
        if (hole[i].className.includes( 'hole_has-mole' )) {
            dead.textContent = Number(dead.textContent) + 1;

            if (dead.textContent == 10) {
                alert("Вы победили!");
                dead.textContent = 0;
                lost.textContent = 0;
            };
        } else {
            lost.textContent = Number(lost.textContent) + 1;

            if (lost.textContent == 3) {
                alert("Вы победили!");
                dead.textContent = 0;
                lost.textContent = 0;
            };
        }    
    }
}