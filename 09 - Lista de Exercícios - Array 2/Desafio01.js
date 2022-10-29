/*Crie um algoritmo que receba um array e um número inteiro positivo. Popule o array
e no final exiba os índices em que número inserido aparece nesse array. Para testes
do exercício use até 10 elementos no array.*/

var array = []
var numero = 0

for (var index = 0; index < 10; index++) {
    array[index] = parseInt(prompt("Insira um número para o array:"))
}

numero = parseInt(prompt("Insira um numero para ser comparado"))

for (var index = 0; index < 10; index++) {
    if(numero == array[index]){
        console.log("Numero: " + numero + " esta na posição " + index + " do array.")
    } 
}