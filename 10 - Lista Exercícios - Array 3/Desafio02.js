/* Faça um algoritmo que receba 10 números inteiros e armazene-os em um array. 
Depois armazene em um array PAR todos os números que forem pares, 
e em um array IMPAR os que forem ímpares, no final exiba os três vetores. */

var array = []
var arrayPares = []
var arrayImpares = []
var indexPares = 0
var indexImpares = 0

for (let index = 0; index < 10; index++) {
    array[index] = parseInt(prompt("Insira um número"))
    if(array[index] % 2 == 0){
        arrayPares[indexPares] = array[index]
        indexPares++
    } else{
        arrayImpares[indexImpares] = array[index]
        indexImpares++
    }
    
}

console.log(array)
console.log(arrayPares)
console.log(arrayImpares)