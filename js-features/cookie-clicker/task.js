let count = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');

let countspeed = document.getElementById('clicker__speed');
let date_Before = new Date();

cookie.onclick = () => {
    count.textContent = +count.textContent + 1;
    if(+count.textContent % 2 === 1) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }
}
