const leia = require('readline-sync');

let salario;
let abono;
let novoSalario;

salario = leia.questionFloat("Digite o salario: ");
abono = leia.questionFloat("Digite o abono: ");
novoSalario = salario + abono

console.log(`Novo Salario: ${salario} e ${abono} = ${novoSalario} `);