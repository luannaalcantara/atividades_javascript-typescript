const leia = require('readline-sync');

let numero1
let numero2
let numero3
let numero4
let diferenca

numero1 = leia.questionFloat("digite numero1: ");
numero2 = leia.questionFloat("digite numero2: ");
numero3 = leia.questionFloat("digite numero3: ");
numero4 = leia.questionFloat("digite numero4: ");

diferenca = (numero1*numero2) - (numero3*numero4);

console.log (`diferenca: ${diferenca.toFixed(2)}`)
