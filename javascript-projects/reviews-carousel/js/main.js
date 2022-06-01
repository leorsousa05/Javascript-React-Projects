const clientPicReview = $('#client-pic-review')
const clientNameReview = $('#client-name-review')
const clientReview = $('#client-review')
const rArrow = $('.right-arrow')
const lArrow = $('.left-arrow')

const reviews = [
    {
        nome: 'Leonardo',
        img: 'http://pm1.narvii.com/7240/9d64f0773a1889d8cae9b9e34a3259cad13237e2r1-480-484v2_uhq.jpg',
        texto: 'Eu gostei muito do trabalho dele, achei um trabalho excepcionalmente ótimo.'
    },
    {
        nome: 'André',
        img: 'https://photografos.com.br/wp-content/uploads/2020/09/fotografia-para-perfil.jpg',
        texto: 'Ótimo atendimento e trabalho moderno. Recomendo!!!'
    },
    {
        nome: 'Mel',
        img: 'https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117',
        texto: 'Trabalho perfeito, design de alta qualidade.'
    }
]

let i = 0;

let pessoa = reviews[i].nome
let texto = reviews[i].texto
let img = reviews[i].img
clientNameReview.text(pessoa)
clientReview.text(texto)
clientPicReview.attr('src', img)

const tamOfArr = reviews.length

const handleNextReview = () => { 
    i++

    if(i == tamOfArr) {i = 0}

    let pessoa = reviews[i].nome
    let texto = reviews[i].texto
    let img = reviews[i].img
    
    clientNameReview.text(pessoa)
    clientReview.text(texto)
    clientPicReview.attr('src', img)
}

const handlePrevReview = () => {
    if(i == 0) {i = tamOfArr}
    i--

    let pessoa = reviews[i].nome
    let texto = reviews[i].texto
    let img = reviews[i].img
    
    clientNameReview.text(pessoa)
    clientReview.text(texto)
    clientPicReview.attr('src', img)

}

rArrow.on('click', () => handleNextReview())
lArrow.on('click', () => handlePrevReview())
