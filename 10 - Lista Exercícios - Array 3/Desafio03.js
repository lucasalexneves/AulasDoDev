/* Faça um algoritmo com dois arrays arrayA e arrayB e popule ambos com 10 elementos cada. 
Depois salve em um terceiro array somente os números que estiverem nos dois primeiros, 
mesmo que em posições diferentes, e forem maiores que 5, não tem problema repetir os valores. 
Exiba o último array no final.
Ex.: arrayA[5,6,2,4,8,7,3,6,7,1]
arrayB[8,5,3,1,4,7,8,2,3,6]
Deve ser exibido no último array apenas os números arrayC[6,8,8,7,6,7] */

var arrayA = []
var arrayB = []
var arrayC = []
var indexC = 0

for (var index = 0; index < 10; index++) {
    arrayA[index] = parseInt(prompt("Insira um número"))
    arrayB[index] = parseInt(prompt("Insira um número"))
}

for (var indexA = 0; indexA < 10; indexA++) {
    for (var indexB = 0; indexB < 10; indexB++) {
        if(arrayA[indexA] == arrayB[indexB] && arrayA[indexA] > 5){
            arrayC[indexC] = arrayA[indexA]
            indexC++
        }
        
    }
    
}

console.log(arrayA)
console.log(arrayB)
console.log(arrayC)

