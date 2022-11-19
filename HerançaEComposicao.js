// HERANÇA
// COMPOSIÇÃO

class Carro {
    Cor 
    Ano 
    Modelo

    ligar() {
        console.log("Estou ligando!")
    }
}

class Pessoa {
    nome 
    idade

    falar(texto){
        console.log(texto)
    }
}

class Motorista extends Pessoa{
    carro 

    ultrapassar(){
        console.log("Ultrapassei alguem heheh!")
    }

}

let primeiraPessoa = new Pessoa()
primeiraPessoa.nome = "Joaquim"
primeiraPessoa.idade = 11
primeiraPessoa.falar("Eu sou o Joaquim")

let carroFiesta = new Carro ()
carroFiesta.Modelo = "Fiesta"
carroFiesta.Cor = "Vermelho"
carroFiesta.Ano = 2016

let primeiroMotorista = new Motorista()
primeiroMotorista.nome = "Claudio"
primeiroMotorista.idade = 23
primeiroMotorista.falar("Eu sou o motorista Claudio")
primeiroMotorista.carro = carroFiesta
primeiroMotorista.ultrapassar()