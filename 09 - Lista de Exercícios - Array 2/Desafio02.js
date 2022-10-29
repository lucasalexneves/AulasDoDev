/* Crie um algoritmo que pergunte 5 números ao usuário, coloque em um array,
depois exiba tal array. Modifique os elementos do array de modo que a
sequência de números fique ao contrário.
Ex.: se digitou 1, 2, 3,4, 5
 tem que ficar 5, 4, 3, 2 , 1 */

 var array = []
 var arraySuporte = []
 var contador = 4
 
 for (var index = 0; index < 5; index++) {
     array[index]= parseInt(prompt("Insira um número:"))
 }
 console.log(array)
 
 for (var indexA = 0; indexA < 5; indexA++) {
     arraySuporte[contador] = array[indexA]
     contador--
 }
 
 console.log (arraySuporte)