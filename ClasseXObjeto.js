class Carro {
    Cor
    Ano
    Modelo

    ligar(){
        console.log("Estou ligando")
    }
}

class Calculadora{
    numeroUm
    numeroDois

    somar(){
        console.log(this.numeroUm + this.numeroDois)
    }
}

let calculadora = new Calculadora()
calculadora.numeroUm = 10
calculadora.numeroDois = 10
calculadora.somar()


/* let carroNovo = new Carro()
carroNovo.Ano = 2006
carroNovo.Cor = "Vermelho"
carroNovo.Modelo = "Peugeot 306"

let carroDoANo = new Carro()
carroDoANo.Ano = 2022
carroDoANo.Cor = "Preto"
carroDoANo.Modelo = "Civic" */

//Mesma class para criar 2 objetos