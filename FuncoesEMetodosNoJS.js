// Função - Método

CalcularMedia(2, 10, 20); // Chamando/Executando a função
PerguntarNome();
console.log(PerguntarNome)

function CalcularMedia(num1, num2, num3){
    //num1 = 2
    //num2 = 10
    //Criando a função
    console.log("A média será calculada aqui!!!")
    console.log((num1 + num2 + num3) / 3)
}

function PerguntarNome(){
    var nome = prompt("Qual o seu nome?")
    return nome;
}