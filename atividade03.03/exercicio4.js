import leia from 'readline-sync'

let numero1;
let numero2;
let codigo;

numero1 = leia.questionFloat("Digite o primeiro numero: ");
numero2 = leia.questionFloat("Digite o segundo numero: ")
codigo = leia.questionInt("Digite o codigo da operacao (1 a 4): ");

switch(codigo){
    case 1:
console.log(`${numero1} + ${numero2} = ${(numero1 + numero2).toFixed(1)}`);
    break;

       case 2:
console.log(`${numero1} - ${numero2} = ${(numero1 - numero2).toFixed(1)}`);
    break;

       case 3:
console.log(`${numero1} * ${numero2} = ${(numero1 * numero2).toFixed(1)}`);
    break;

       case 4:
console.log(`${numero1} / ${numero2} = ${(numero1 / numero2).toFixed(1)}`);
    break;
default:
    console.log("Operador invalido!");
    break;
}