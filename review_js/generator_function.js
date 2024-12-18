// merupakan function dalam JS yg bisa mereturn lebih dari 1 nilai
//  cara membuatnya adalah dengan menambahkan simbol asterisk (*) setelah keyword function atau nama functionnya
function biasa() {
    return 1
}
console.log(biasa())

function* generatorFx() {
    yield 1
    yield 2
    yield 3
    return 4
}

console.log(generatorFx().next())
