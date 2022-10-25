// Array ou Vetores
// length - comprimento
var nome = []

var contadorArray = 0
var continuar = true
while (continuar){
    var nomeAlunoAtual = prompt("Digite o nome do Aluno?")
    nome[contadorArray] = nomeAlunoAtual
    contadorArray++
    var desejaContinuar = prompt ("Insira 1 para parar!")
    if (desejaContinuar == 1){
        continuar = false
    }
    console.log(nome)
}


for (var index = 0; index < nome.length; index++) {
    console.log = (nome[index])
    
}