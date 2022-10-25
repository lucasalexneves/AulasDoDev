// REPETIÇÃO
// PARA - DEFINIA A QUANTIDADE DE VEZES QUE IRIAMOS EXECUTAR UMA AÇÃO
// Definição da variavel -> Verifica a condiçao para rodar -> Executa o código -> Vai para o laço e muda a variavel

var numeroDaTabuada = prompt("Qual tabuada você deseja?")
for (var contador = 1; contador <= 10; contador++) {
    console.log(numeroDaTabuada, " X ", contador, " = ", numeroDaTabuada * contador)
}