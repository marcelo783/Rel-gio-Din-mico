const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new  Date();
    let hr= dateToday.getHours();
    let min= dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if(hr < 10) horas = '0' + hr;

    if(min < 10) horas = '0' + min;

    if(seg < 10) horas = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

})