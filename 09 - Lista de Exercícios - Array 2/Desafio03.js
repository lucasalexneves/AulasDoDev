/* Refaça o script anterior, mas agora pergunte ao usuário quantos números ele
deseja inserir no array. Depois, o usuário vai preenchendo elemento por
elemento do vetor, ao final, exiba o array e o array ao contrário */

var array = []
var arraySuporte = []
var quantidade = parseInt(prompt("Quantos números deseja inserir?"))
var contador = quantidade - 1

for (var index = 0; index < quantidade; index++) {
    array[index]= parseInt(prompt("Insira um número:"))   
}
console.log(array)

for (var indexA = 0; indexA < quantidade; indexA++) {
    arraySuporte[contador] = array[indexA]
    contador--
}

console.log (arraySuporte)