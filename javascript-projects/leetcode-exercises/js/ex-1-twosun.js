let powersOfTwo = (n) => {
    let resultado = [(i) => {
        i = 0
        if(i === n) {
            return
        }
        return resultado(i + 1)
    }]
    /* for(i = 0; i <= n; i++) {
        resultado.push(2**i);
    } */
    return console.log(resultado)
}

powersOfTwo(4)

