console.log(2 < 3 && 3 < 4)
//true E true = true
console.log(2 < 3 && 3 < 2)
//true E false = false
console.log(2 < 3 || 3 < 2)
//true OU false = true

var idade = prompt("Digite a sua idade:")
var nacionalidade = prompt("Você é Brasileiro? Digite 1 para sim")

if (idade >= 18 || (idade >= 16 && nacionalidade != 1)){
    console.log("Pode beber.")

}else{
    console.log("Não pode beber")
}
