"use strict";
// Operador "!" você especifica que nunca irá ser nulo
const start = document.querySelector(".start");
const stoper = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const minute = document.querySelector(".minutes");
const seconds = document.querySelector('.seconds');
const error = document.querySelector('.erro');
let i = false;
let interval = 0;
let mt = 0, sc = 0;
printDate(minute, mt);
printDate(seconds, sc);
function convertNumberToDecimal(secOrMin) {
    return String(secOrMin).padStart(2, "0");
}
function addSec() {
    sc++;
    seconds.innerHTML = convertNumberToDecimal(sc);
}
function addMin() {
    mt++;
    minute.innerHTML = convertNumberToDecimal(mt);
}
function printDate(minOrSec, mtOrSc) {
    return minOrSec.innerHTML = convertNumberToDecimal(mtOrSc);
}
function secondsResetAndAddMinute() {
    sc = 0;
    printDate(seconds, sc);
    addMin();
}
function counter() {
    console.log(i);
    if (i) {
        addSec();
        sc > 59 && secondsResetAndAddMinute();
        return setTimeout(counter, 1000);
    }
}
start.addEventListener("click", (e) => {
    e.preventDefault();
    if (!i == true) {
        i = true;
    }
    else {
        return;
    }
    i = true;
    counter();
    start.classList.add("ativado");
    start.innerHTML = 'Começou';
    stoper.innerHTML = "Pausar";
});
stoper.addEventListener('click', (e) => {
    e.preventDefault();
    i = false;
    start.classList.remove("ativado");
    start.classList.add('desativado');
    start.innerHTML = 'Começar';
    error.innerHTML = mt == 0 && sc == 0 ? "Nada a pausar :/" : "Pausado";
});
reset.addEventListener('click', (e) => {
    e.preventDefault();
    i = false;
    mt = 0, sc = 0;
    printDate(minute, mt), printDate(seconds, sc);
    start.classList.remove("ativado");
    start.classList.add('desativado');
    start.innerHTML = 'Começar';
    stoper.innerHTML = "Pausar";
});
