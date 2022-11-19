/* Agora devemos criar funções para um “carrinho de compras” para utilizar junto com as
funções anteriores, esse carrinho de compras deve guardar duas informações: o id do
produto e a quantidade deste produto ;
1. Crie uma função para adicionar produtos no carrinho, você deve passar o nome do
produto e a quantidade que deseja adicionar como parâmetro. Essa função deve
verificar primeiro se já existe esse produto no carrinho, se existir apenas adicione a
quantidade, se não adicione o produto e a quantidade;
2. Crie uma função para excluir um produto do carrinho, essa função deve receber o
nome do produto e a quantidade que deseja excluir como parâmetro. Se a
quantidade a se excluir for o total desse produto no carrinho o produto como um
todo deve ser removido;
3. Crie uma função que retorne o valor total de todos os produtos no carrinho;
4. Crie uma função que exiba todos os produtos do carrinho e o valor total de todos os
produtos; */

var ids = []
var nomes = []
var precos = []
var avaliacoes = []
var index = 0
var indexId = 0

var idsSup = []
var nomeSup = []
var precoSup = []
var avaliacoesSup = []
var indexSup = 0



function CadastrarProduto() {
    ids[index] =  indexId + 1
    nomes[index] = prompt ("Insira o nome do produto")
    precos[index] = parseInt(prompt("Insira o preço do produto")) 
    avaliacoes[index] = parseInt(prompt("Insira a avaliação do produto")) 
    index++
    indexId++
}

function BuscarPorId(id) {
    for (var contador = 0; contador < ids.length; contador++) {
        if(id == ids[contador]){
            console.log("O produto de ID " + id + " é o " + nomes[contador] + " custa " + precos[contador] + " e tem avaliação " + avaliacoes[contador])
        }       
    }
}

function BuscarPorNome(nome) {
    for (var contador = 0; contador < nomes.length; contador++) {
        if(nome == nomes[contador]){
            console.log("O produto de nome " + nome + " tem o ID: " + ids[contador] )
        }
    }
}

var maiorId = 0

function OrdenarPorId() {

    idsSup = []
    nomeSup = []
    precoSup = []
    avaliacoesSup = []

    for (var contador = 0; contador < ids.length; contador++) {
        maiorId = 0

        for (var contador2 = 0; contador2 < ids.length; contador2++) {
            if(ids[contador2] > maiorId){
                maiorId = ids [contador2]
            }           
        }

        for (var contador3 = 0; contador3 < ids.length; contador3++ && ids[contador3] != 0) {
            if(maiorId == ids[contador3]){
                idsSup[indexSup] = ids[contador3]
                nomeSup[indexSup] = nomes[contador3]
                precoSup[indexSup] = precos[contador3]
                avaliacoesSup[indexSup] = avaliacoes[contador3]
                ids[contador3] = 0
                indexSup++
            }            
        }
    }

    ids = idsSup
    nomes = nomeSup
    precos = precoSup
    avaliacoes = avaliacoesSup
    indexSup = 0

    for (var contador = 0; contador < ids.length; contador++) {
        console.log(ids[contador], nomes[contador], precos[contador], avaliacoes[contador])
    }   
}


var maiorPreco = 0
function OrdenarPorPreco() {

    idsSup = []
    nomeSup = []
    precoSup = []
    avaliacoesSup = []
    
    for (var contador = 0; contador < precos.length; contador++) {

        maiorPreco = 0

        for (var contador2 = 0; contador2 < precos.length; contador2++) {
            if(precos[contador2] > maiorPreco){
                maiorPreco = precos[contador2]
            }
        }

        for (var contador3 = 0; contador3 < precos.length; contador3++) {
            if(maiorPreco == precos[contador3]){
                idsSup[indexSup] = ids[contador3]
                nomeSup[indexSup] = nomes[contador3]
                precoSup[indexSup] = precos[contador3]
                avaliacoesSup[indexSup] = avaliacoes [contador3]
                indexSup++
                maiorPreco = 0
                precos[contador3] = 0
            }
            
        }
    }

    ids = idsSup
    nomes = nomeSup
    precos = precoSup
    avaliacoes = avaliacoesSup
    indexSup = 0

    for (var contador = 0; contador < ids.length; contador++) {
        console.log(ids[contador], nomes[contador], precos[contador], avaliacoes[contador])
    }   
}

var maiorAvaliacao = 0

function OrdenarPorAvaliacao() {

    idsSup = []
    nomeSup = []
    precoSup = []
    avaliacoesSup = [] 

    for (var contador = 0; contador < avaliacoes.length; contador++) {
        maiorAvaliacao = 0

        for (var contador2 = 0; contador2 < avaliacoes.length; contador2++) {
            if(avaliacoes[contador2] > maiorAvaliacao){
                maiorAvaliacao = avaliacoes[contador2]
            }
        }

        var contador4 = 0
        for (var contador3 = 0; contador3 < avaliacoes.length; contador3++) {
            
            if(maiorAvaliacao == avaliacoes[contador3] && contador4 == 0){

                idsSup[indexSup] = ids[contador3]
                nomeSup[indexSup] = nomes[contador3]
                precoSup[indexSup] = precos[contador3]
                avaliacoesSup[indexSup] = avaliacoes[contador3]
                avaliacoes[contador3] = 0
                indexSup++
                contador4++
            }            
        }
    }

    ids = idsSup
    nomes = nomeSup
    precos = precoSup
    avaliacoes = avaliacoesSup
    indexSup = 0

    for (var contador = 0; contador < ids.length; contador++) {
        console.log(ids[contador], nomes[contador], precos[contador], avaliacoes[contador])
    }   
}

function AtualizarPreco(id, novoValor){
    for (var contador = 0; contador < ids.length; contador++) {
        if(id == ids[contador]){
            precos[contador] = novoValor
        }        
    }
}

function DeletarProduto(){

    idsSup = []
    nomeSup = []
    precoSup = []
    avaliacoesSup = [] 
    
    var idDeletado = parseInt(prompt("Insira o Id do produto que quer deletar."))

    for (var contador = 0; contador < ids.length; contador++) {
        if(idDeletado == ids[contador]){
            ids[contador] = 0
        }        
    }
    for (var contador = 0; contador < ids.length; contador++) {
        if(ids[contador] != 0){
            idsSup[indexSup] = ids [contador]
            nomeSup[indexSup] = nomes[contador]
            precoSup[indexSup] = precos[contador]
            avaliacoesSup[indexSup] = avaliacoes[contador]
            indexSup++
        }
        
    }

    ids = idsSup
    nomes = nomeSup
    precos = precoSup
    avaliacoes = avaliacoesSup
    indexSup = 0
    index = index - 1
}



function CarrinhoDeCompras (id, quantidade) {
    var opcaoCarrinho = prompt("Digite uma opção para o carrinho: 1 - Adicionar produto, 2 - Excluir produto ou quantidade, 3 - Valor total ou 4 - Ver todos os itens e valor")

    if(opcaoCarrinho == "1"){
        var nomeProduto = prompt("Insira o nome do produto para adicionar ao carrinho:")
        var quantidadeAdicionado = parseInt(prompt("Insira a quantidade do produto que deseja add ao carrinho:"))
        AddProdutos(nomeProduto, quantidadeAdicionado)
    } else if(opcaoCarrinho == "2"){
        var nomeProduto = prompt ("Digite o nome do produto que deseja excluir do carrinho.")
        var quantidadeExcluido = parseInt(prompt("Digite a quantidade que deseja excluir do produto do carrinho."))
        ExcluirProdutoCarrinho(nomeProduto, quantidadeExcluido)
        console.log("Produto excluido do carrinho com sucesso!")
    } else if(opcaoCarrinho == "3"){
        ValorTotal()
    } else if(opcaoCarrinho == "4"){
        ExibirTudoDoCarrinho()
    } else {
        console.log("Opção incorreta, digite novamente!")
    }
}



var QuantidadeCarrinho = []
var nomesCarrinho = []
var PrecosCarrinho = []
var QuantidadeSup = []
 
function AddProdutos(nomeProduto, quantidadeAdicionado) {

    for (var index = 0; index < nomesCarrinho.length; index++) {
        if(nomeProduto == nomesCarrinho[index]){
            QuantidadeCarrinho[index] = QuantidadeCarrinho[index] + quantidadeAdicionado
            
        } else {
            nomesCarrinho[index] = nomeProduto
            QuantidadeCarrinho[index] = quantidadeAdicionado

        }      
    }
    console.log("Produto adicionado ao carrinho com sucesso!")
}

function ExcluirProdutoCarrinho(nomeProduto, quantidadeExcluido){
    
    nomeSup = []
    precoSup = []
    QuantidadeSup = []

    for (var index = 0; index < nomesCarrinho.length; index++) {
        if(nomeProduto == nomesCarrinho[index] && quantidadeExcluido == QuantidadeCarrinho[index]){
            QuantidadeCarrinho[index] = 0
            nomesCarrinho[index] = 0
        } else if(nomeProduto == nomesCarrinho[index] && quantidadeExcluido < QuantidadeCarrinho[index]){
            QuantidadeCarrinho[index] = QuantidadeCarrinho[index] - quantidadeExcluido
        } else {
            console.log("Valor inválido!!")
        }
    }

    for (let index2 = 0; index2 < nomesCarrinho.length; index2++) {
        if(nomesCarrinho[index2] != ''){
            nomeSup[indexSup] = nomesCarrinho[index2]
            QuantidadeSup[indexSup] = QuantidadeCarrinho[index2]
            precoSup[indexSup] = precos[index2]
            indexSup++
        }
    }

    nomesCarrinho = nomeSup
    QuantidadeCarrinho = QuantidadeSup
    precos = precoSup
    indexSup = 0
}

function ValorTotal() {

    var valorTotalCarrinho = 0

    for (var index = 0; index < nomesCarrinho.length; index++) {
        valorTotalCarrinho = valorTotalCarrinho + (PrecosCarrinho[index] * quantidadeAdicionado[index])
    }

    console.log("Valor total dos itens do carrinho: " + valorTotalCarrinho)

    return valorTotalCarrinho
}

function ExibirTudoDoCarrinho() {
    console.log("Todos os itens do carrinho são: " + nomesCarrinho)
    console.log("Valor total de todos os produtos: " + valorTotalCarrinho)
}

var continuar = true

while(continuar){
    var opcao = prompt("Insira a opção que deseja executar: 1 - Cadastro, 2 - Buscar por ID, 3 - Buscar por nome, 4 - Ordenar por ID, 5 - Ordenar por preço, 6 - Ordenar por avaliação, 7 - Atualizar preço, 8 - Deletar produto, 9 - Carrinho")

    if(opcao == "1"){
        CadastrarProduto()
        console.log("Produto Cadastrado com Sucesso!")
    } else if(opcao == "2"){
        var id = parseInt(prompt("Insira um id para pesquisar"))
        BuscarPorId(id)
    } else if (opcao == "3"){
        var nome = prompt("Insira um nome para quesquisar.")
        BuscarPorNome(nome)
    } else if (opcao == "4"){
        OrdenarPorId()
    } else if(opcao == "5"){
        OrdenarPorPreco()
    } else if(opcao == "6"){
        OrdenarPorAvaliacao()
    }else if (opcao == "7"){
        var id = parseInt(prompt("Insira o id do produto que deseja atualizar."))
        var valor = parseInt(prompt("Insira o novo valor do produto."))
        AtualizarPreco(id, valor)
        console.log("Preço atualizado!")
    }else if (opcao == "8") {
        DeletarProduto()
        console.log("Produto deletado com sucesso.")
    } else if (opcao == "9") {
        CarrinhoDeCompras(ids, QuantidadeCarrinho)
        
    } else {
        console.log("Opção inválida!")
    }

    var opcaoContinuar = prompt("Deseja continuar fazendo operações? s ou n")
    if( opcaoContinuar != "s"){
        continuar = false
    }
}