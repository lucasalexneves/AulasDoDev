/*Crie um array para armazenar a idade e outro para armazenar a altura 
de 10 alunos. No final, exiba quantos alunos com mais de 13 anos tem uma altura menor 
do que a média da altura de todos os alunos.*/

var idades = []
var alturas = []

var quantidadeDeAlunos = 0
var mediaAltura = 0

for (var index = 0; index < 10; index++) {
    idades[index] = parseInt(prompt("Insira sua idade"))
    alturas[index] = parseFloat(prompt("Insira sua altura"))
    mediaAltura = mediaAltura + alturas[index]
}

mediaAltura = mediaAltura / 10

for (var index = 0; index < 10; index++) {
    if(idades[index] > 13 && alturas[index] < mediaAltura){
        quantidadeDeAlunos++
    }
}

console.log(quantidadeDeAlunos, "alunos são maiores de 13 anos e possuem a altura menor que a média de alturas.")