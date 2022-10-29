/* Crie um algoritmo que pede um número inteiro positivo para o usuário. Em
seguida, popule uma array com os números de Fibonacci, na hora de somar com
os termos anteriores, some com elementos anteriores do array. Faça com que o
array tenha no máximo 10 elementos, para iniciar a sequência use o número que
o usuário inseriu -1.
Ex.: inseriu o número 8,
a sequência deve começar da seguinte maneira 7 8 15 23  */

var Fibonacci = []
var numero = parseInt(prompt("Insira um número"))

console.log("Número inserido = " + numero)

Fibonacci[0] = numero - 1
Fibonacci[1] = numero

for (var index = 2; index < 10; index++) {
    Fibonacci[index] = Fibonacci[index - 1] + Fibonacci [index - 2]
}

console.log(Fibonacci)