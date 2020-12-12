console.log("Listas em JavaScript:")

/*
    Em lógica de programação, é muito comum 
    trabalharmos com listas de objetos.
    Chamamos essas listas de arrays
*/

// Lista de Compras
let listaDeCompras = ["ovos", "leite", "pão de forma"]
// let item1 = "ovos"
// let item2 = "leite"
// let item3 = "pão de forma"
console.log("Item da lista de compras: ", listaDeCompras[0])
console.log("Item da lista de compras: ", listaDeCompras[1])
console.log("Item da lista de compras: ", listaDeCompras[2])

// Adicionar um novo item
listaDeCompras.push("batata frita")
console.log("Item da lista de compras: ", listaDeCompras[3])

// Como descobrir o tamanho da lista
console.log("O tamanho de nossa lista é: ", listaDeCompras.length)

// Como excluir o último elemento da lista
console.log("Tiramos da lista o item: ", listaDeCompras.pop())

// Quero visualizar toda a lista
let item = 0
let totalElementos = listaDeCompras.length
while (item < totalElementos) {
    console.log("Item: ", item, ":", listaDeCompras[item])
    item++
}

// Se eu quisesse alterar um elemento específico da lista
listaDeCompras[2] = "queijo"
console.log(listaDeCompras)

// Para pesquisar um item da lista

// Do jeito raiz
item = 0
totalElementos = listaDeCompras.length
while (item < totalElementos) {
    if(listaDeCompras[item] == "laranja") {
        console.log("A lista tem leite!")
        break
    }
    item++
}
// Verificar se o item não foi encontrado
if (item == totalElementos) {
    console.log("Não há este item na lista")
}

// Do jeito nutella - alto nível
if(listaDeCompras.includes("laranja")) {
    console.log("A lista tem leite!")
} else {
    console.log("Não há este item na lista")
}


