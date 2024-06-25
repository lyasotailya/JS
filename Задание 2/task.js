const img = document.getElementById('cookie');
const clc = document.getElementById('clicker__counter');
img.onclick = () => {
    clc.textContent = Number(clc.textContent) + 1;
    img.width += 20;
    img.height += 20;

    setTimeout(() => {
        img.width -= 20;
        img.height -= 20;
    }, 100);
}

