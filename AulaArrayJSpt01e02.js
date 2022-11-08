var teste = [1, 2, 0, 5, 2]
console.log(teste)
// push - Coloca dado na ultima posição
teste.push(6)

// pop - Retira o ultimo elemento do Array
teste.pop()

//indexOf - Espera um valor e retorna uma posição no array
//teste.indexOf(0)
var posicaoDoZero = teste.indexOf(0)

//Includes - Espera um valor e retorna true ou false
var temDois = teste.includes(2)

//forEach - Para cada (Elemento)
teste.forEach(numero => {
    console.log(numero)
    console.log(numero + 5)
    console.log("Cabo aqui!")
})

//Filter - Espera um predicado e retorna um filtro da função
var filtrado = teste.filter(x => elemento >= 2)

//OrderBy - Ordena em ordem crescente
teste.sort()