const body = $('body')
const btn = $('.change')
const selected = $('.selected')

btn.on('click', function() {
    /* Aqui especificamos que a variável color é uma Array
    e depois criamos a Array com um objeto iteravel, que se
    pode se repetir várias vezes */
    let color = Array.from({
        /* Falamos o tamanho da Array */
        length: 6
        /* Logo após criamos uma função que irá ser itera-
        tiva, ela vai ocorrer 6 vezes, que é o tamanho da
        array. */
    }, () => Math.floor((10*Math.random())))
    color = '#' + color.toString().replaceAll(',', "");
    body.css('background-color', color)
    $('.color').val(color)
    console.log(color);
});

function mostrarValor() {
    
}

selected.on('click', function(event) {
    const scolored = "#"+$('.color').val();
    body.css('background-color', `${scolored}`)
    event.preventDefault();
})

