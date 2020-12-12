console.log("Funções em JavaScript:")

/*
    Funções são um dos pilares de qualquer linguagem de programação
    Temos 2 tipos de função:
    1. Executa um conjunto de instruções
    2. Calcula um valor e devolve um resultado
*/

// Função tipo 1
// Função com UM parâmetro
function hello(nome) {
    console.log("Hello World")
    console.log(nome, ", a Caelum lhes dá as boas-vindas")
}

let nome = prompt("Digite seu nome")
hello(nome)

// Função com dois ou mais parâmetros
function helloCompleto(nome, sobrenome) {
    // Sintaxe utilizando concatenação (sinal de +)
    console.log("Olá " + nome + ", seu nome de usuário será " +
        sobrenome)
}

let sobrenome = prompt("Agora seu sobrenome")
helloCompleto(nome, sobrenome)

// Função tipo 2

// Função para calcular e devolver a raiz quadrada de um número
function raizQuadrada(numero) {
    return Math.sqrt(numero)
}

let numero = prompt("Qual a raiz quadrada de")
let resultado = raizQuadrada(numero)
console.log("A raiz quadrada de " + numero + " é " + resultado)

// Criar uma função que some 2 valores e retorne o resultado


// Chamada da função


// Utilizando sintaxe mais refinada
let numero1 = parseInt(prompt("Digite primeiro número"))
let numero2 = parseInt(prompt("Digite segundo número"))
