function createPhoneNumber(numbers){
    strnum = numbers.toString().replaceAll(",", "")
    number1 = strnum.toString().slice(3, 6)
    number2 = strnum.toString().slice(6, 10)
    ddd = strnum.toString().slice(0, 3)
    num = `(${ddd}) ${number1}-${number2}`
    return console.log(num)
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])