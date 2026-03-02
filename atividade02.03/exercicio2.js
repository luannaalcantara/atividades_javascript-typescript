const leia = require('readline-sync');

let nota1
let nota2
let nota3
let nota4
let mediaFinal


nota1 = leia.questionFloat("digite a nota1 ");
nota2 = leia.questionFloat("digite a nota2 ");
nota3 = leia.questionFloat("digite a nota3 ");
nota4 = leia.questionFloat("digite a nota4 ");

mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`A media final do participante é: ${mediaFinal.toFixed(1)}`)