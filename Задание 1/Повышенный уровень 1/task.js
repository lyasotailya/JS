const h = document.getElementById('hour');
const m = document.getElementById('min');
const s = document.getElementById('sec');

setInterval(() => {
    if (h.textContent == 0 && m.textContent == 0 && s.textContent == 0) {
        alert('Вы победили в конкурсе!');
    };

    if (h.textContent != 0 && m.textContent == 0 && s.textContent == 0) {
        h.textContent = Number(h.textContent) - 1;

        if (h.textContent < 10) {  /* Добавляем ноль перед цифрой */
            h.textContent = '0' + h.textContent;
        };

        if (h.textContent == 0) {
            h.textContent = '00';
        };

        m.textContent = Number(59);
        s.textContent = Number(60);
    };

    if (m.textContent != 0 && s.textContent == 0) {
        m.textContent = Number(m.textContent) - 1;

        if (m.textContent < 10) {  /* Добавляем ноль перед цифрой */
            m.textContent = '0' + m.textContent;
        };

        if (m.textContent == 0) {
            m.textContent = '00';
        };

        s.textContent = Number(60);
    };

    s.textContent = Number(s.textContent) - 1;

    if (s.textContent < 10) {  /* Добавляем ноль перед цифрой */
        s.textContent = '0' + s.textContent;
    };

}, 1000);

