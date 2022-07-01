function mediaPonderada(valores: number[], pesos: number[]) {
    let resultadoArray = [];
    let resultadoFinal = 0;
    let i = 0, somaPeso = 0, somaValores = 0;
    for(i = 0; i < valores.length; i++) {
        resultadoArray.push(valores[i] * pesos[i])
        somaPeso += pesos[i]
    }
    for(i = 0; i < resultadoArray.length; i++) {
        somaValores += resultadoArray[i]
    }

    resultadoFinal = somaValores / somaPeso

    console.log(resultadoArray)
    console.log(somaPeso, somaValores)
    console.log(resultadoFinal)
}
mediaPonderada([5, 8, 10], [1, 2, 3]);