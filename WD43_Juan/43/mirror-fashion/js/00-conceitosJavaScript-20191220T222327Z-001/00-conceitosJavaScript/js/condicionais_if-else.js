console.log("Condicionais em JavaScript:")

/*
    Condicionais avaliam se determinadas condições 
    são verdadeiras ou falsas

    Eis a sintaxe do comando em JavaScript.
    Podem haver pequenas variações em outra linguagem
    if (condição == true) {
        // Comandos se a condição for verdadeira
    } else {
        // Comandos se a condição for falsa
    }
*/

/*
    Exemplo: Perguntei à Alexa se devia levar um casaco
    Ela respondeu: Não, Carlos, pode ir com uma roupa leva hoje
    Os critérios que ela pode ter usado são os seguintes:
    - Se a temperatura estiver abaixo de 21ºC, ela recomenda
        levar um casaci
    - Se a temperatura estiver igual ou acima de 21ºC, ela recomenda
        usar roupas leves
    Vamos representar esse cenário num if-Else
    ATENÇÃO: Vamos pressupor que já temos a temperatura calculado
*/
var temperatura = 21
if (temperatura >= 21) {
    console.log("Pode vestir roupas leves hoje")
} else {
    console.log("Melhor levar um casaco")
}

/*
    Os engenheiros de IA da Amazon inseriram mais uma condição no algoritmo
    da Alexa:
    - Se a temperatura estiver abaixo de 12ºC, ela questiona se você precisa
        mesmo sair de casa, pois está muito frio
    EXERCÍCIO: Como fica o nosso if neste caso?
*/
var temperatura = 21
if (temperatura < 12) {
    console.log("Precisa sair mesmo? Está muito frio lá fora")
} else if (temperatura < 21) {
    console.log("Melhor levar um casaco")
} else {
    console.log("Pode vestir roupas leves hoje")
}

/*
    Estudo de Caso:

    Quando estudamos os operadores, resolvemos um desafio
    onde descobríamos se um estudante foi, ou não, aprovado,
    conforme os seguintes critérios:
    Para passar de ano um estudante:
    - Precisa fechar com média 6.0 ou superior
      Média arimética de 2 notas
    - Não pode ter mais de 25 faltas

    Essa era a solução, utilizando variáveis booleanas
    var media = (5.0 + 7.0) / 2
    var faltas = 25
    passouDeAno = (media >= 6.0) && (faltas <= 25)
    console.log("Estudante aprovado: ", passouDeAno)

    Como ficaria o nosso algoritmo utilizando agora
    If-Else?
*/
let nota1 = 7.0
let nota2 = 5.0
let media = (nota1 + nota2) / 2
let faltas = 20
console.log("Situação do aluno:")
console.log("Média: ", media, " - Faltas: ", faltas)
if (media >= 6.0 && faltas <= 25) {
    console.log("Aluno aprovado")
} else {
    console.log("Aluno reprovado")
}

// Solução com If-Else, mas ainda utilizando variável booleana
let aprovado = (media >= 6.0 && faltas <= 25)
if (aprovado) {
    console.log("Aluno aprovado")
} else {
    console.log("Aluno reprovado")
}

/*
    Utilizando If-Else, avaliar se um estudante entrou na faculdade
    Para entrar, tem que obedecer uma destas
    condições:
    1) Ser aprovado no vestibular, ou
    2) Passar no ENEM
*/
let vestibular = false       // Variável booleana
let enem = false
if (vestibular || enem) {
    console.log("Entrou na faculdade")
} else {
    console.log("NÃO entrou na faculdade")
}

// DESAFIO
// Regra de Negócio: Para ser admitido no estágio, a pessoa
//  precisa:
//  - Conhecer as linguagens JavaScript ou Python, e
//  - Falar inglês fluentemente





