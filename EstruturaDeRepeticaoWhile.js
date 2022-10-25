//Estrutura de repetição - Enquanto / While

var ano = 2022

for (var index = 2015; index < ano; index++){
    console.log("Repetição numero: ", index)

}

var desejaContinuar = true
while(desejaContinuar){
    console.log("Oi")
    var inputUsuario = prompt ("Insira 1 se deseja parar.")
    if(inputUsuario == 1){
        desejaContinuar = false
    }
}