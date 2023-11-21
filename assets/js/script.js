
const horasElement = document.getElementById('horas');
const minutosElement = document.getElementById('minutos');
const segundosElement = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new  Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(seg < 10) seg = '0' + seg;

    horasElement.textContent = hr;
    minutosElement.textContent = min;
    segundosElement.textContent = seg;

}, 1000);
