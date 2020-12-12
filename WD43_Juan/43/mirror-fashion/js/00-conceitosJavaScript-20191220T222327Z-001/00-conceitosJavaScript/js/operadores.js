console.log("Operadores em JavaScript")

/*
    Operadores em JavaScript são utilizados para
    criar expressões, construir lógica e elaborar
    algoritmos

    Autor: Carlos Savi
    Data de Criação: 08/10/2019
    Última Alteração: João em 09/10/2019
    Descrição da Alteração: xxx
*/

// 1. Aritméticos
var oper1 = 2
var oper2 = 2

console.log(oper1 + oper2)
console.log(oper1 - oper2)
console.log(oper1 / oper2)
console.log(oper1 * oper2)
console.log(oper1 % oper2) // operador mod
console.log(oper1 ** oper2) // valor ao quadrado
console.log(oper1 ^ oper2) // elevado a

// Quero somar 1 na variável
oper1 = oper1 + 1
oper1++ // só soma 1 na variável
oper1 += 1  // posso utilizar para valores maiores que 1
oper1 += 5

// Quero subtrair 1 da variável
oper1 = oper1 - 1
oper1-- // só subtrai 1 da variável
oper1 -= 1  // posso utilizar para valores maiores que 1
oper1 -= 5

// 2. Operador de comparação
var oper3 = 1

console.log(oper3 > 1) // false
console.log(oper3 == 1) // true
console.log(oper3 < 1) // false
console.log(oper3 <= 1) // true
console.log(oper3 >= 1) // true
console.log(oper3 != 1) // false

// 3. Operadores Lógicos
//  AND (E) - &&
//  OR (OU) - ||

// Exemplo 1
//  Regra de Negócio: para ter o acesso liberado, a pessoa
//  precisa ter o cartão E digitar o código da porte
var cartaoValido = true
var codigoPorta = true
var entradaLiberada = cartaoValido && codigoPorta
console.log("Acesso permitido: ", entradaLiberada)

// Exemplo 2
//  Regra de Negócio: para entrar na faculdade, a pessoa
//  precisa passar no vestibular OU passar no ENEM
var passouNoVestibular = true
var passouNoEnem = false
var entrouNaFacu = passouNoVestibular || passouNoEnem
console.log("Entrou na Faculdade? ", entrouNaFacu)

// Exercício
// Regra de Negócio: Para ser admitido no estágio, a pessoa
//  precisa:
//  - Conhecer JavaScript OU
//  - Conhecer Python E
//  - Ter pelo menos 2 anos de experiência com desenvolvedor


// Desafio
//  Para passar de ano um estudante:
//  - Precisa fechar com média 6.0 ou superior
//      Média arimética de 2 notas
//  - Não pode ter mais de 25 faltas

// Trazendo para uma linguagem mais técnica
//  1. Media >= 6.0, E
//  2. Faltas <= 25











