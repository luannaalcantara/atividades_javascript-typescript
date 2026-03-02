const leia = require('readline-sync');

let salarioBruto
let adicionalNoturno
let horaExtra
let desconto
let salarioLiquido

salarioBruto = leia.questionFloat("digite o salario bruto ");
adicionalNoturno = leia.questionFloat("digite o adicional noturno ");
horaExtra = leia.questionFloat("difite a hora extra ");
desconto = leia.questionFloat("digite o desconto ");

salarioLiquido = (salarioBruto + adicionalNoturno + (horaExtra *5) - desconto)

console.log(`Salario liquido: ${salarioLiquido.toFixed(2)}`)


