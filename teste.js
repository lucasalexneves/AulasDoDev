var idade
var nome
var valorUm = 3
var valorDois = 4

idade = prompt("Insira a sua idade")
nome = prompt("Insira seu nome")
//Para printar no console
console.log(nome)
console.log(idade)

var soma = valorUm + valorDois
var subtracao = valorUm - valorDois
var multiplicacao = valorUm * valorDois
var divisao = valorDois / valorUm
var modulo = valorDois % valorUm

// Operadores:
console.log ("Conta maior: ", (2 + 2) * 5 + 3)
console.log ("Soma: ", soma)
console.log ("Subtracao: ", subtracao) 
console.log ("Multiplicação: ", multiplicacao)
console.log ("Divisão: ", divisao)
console.log ("Modulo: ", modulo)

//True = verdadeiro 
//False = falso
console.log(2 == 2)
console.log(2 != 2)
console.log(3 > 2)
console.log(3 < 2)
console.log (3 <= 3)
console.log (3 >= 3)

//if = se
//else = se não
if(2 == 2){
    console.log ("Entrou no if")
}else{
    console.log ("Deu ruim!")
}