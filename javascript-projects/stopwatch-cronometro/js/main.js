const start = $('.start')
const stoper = $('.stop')
const reset = $('.reset')
const minute = $(".minutes")
const seconds = $('.seconds')
const error = $('.erro')

function sleepet(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

let i = false;
let mt = "00";
let sc = "00";
minute.html(`${mt}`)
seconds.html(`${sc}`)

function counter(bo) {
    if(i == true) {
        sc++;
        if(sc < 10) {
            seconds.html(`0${sc}`)
        } else {
            seconds.html(`${sc}`)
        }
        if(sc == 60) {
            sc = `00`;
            seconds.html(`${sc}`)
            mt++;
            if(mt < 10) {
                minute.html(`0${mt}`)
            } 
            minute.html(`${mt}`)
        }
    }


}
setInterval(counter, 1000)

start.on('click', function (e) {
    e.preventDefault()
    i = true;
    start.addClass("ativado"); start.html('Começou'); stoper.html("Pausar")
});

stoper.on('click', function(e) {
    e.preventDefault()
    i = false
    start.removeClass("ativado"); start.addClass('desativado'); start.html('Começar')
    if(mt == 0 && sc == 0) {
        error.html('Nada a Pausar :/')
    } else {
        stoper.html("Pausado")
    }
})

reset.on('click', function(e) {
    e.preventDefault()
    i = false
    mt = "00"
    sc = "00"
    minute.html(`${mt}`)
    seconds.html(`${sc}`)
    start.removeClass("ativado"); start.addClass('desativado'); start.html('Começar'); stoper.html("Pausar")
})
