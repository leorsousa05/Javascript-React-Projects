function drivenNumber(num, val) {
    for(let i = 0; i < num.length; i++) {
        if(num[i] == val) {
            console.log(num[i])
            return num[i]
        }
    }
}

drivenNumber([1,2,3], 2)