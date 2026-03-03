import leia from 'readline-sync';

let numeroA;
let numeroB;
let numeroC;


numeroA = leia.questionInt("Digite o numero A: ");
numeroB = leia.questionInt("Digite o numero B: ");
numeroC = leia.questionInt("Digite o numero C: ");

let soma = numeroA + numeroB;

if(soma > numeroC){
    console.log(" A soma de A + B é maior que C")
}
else if(soma < numeroC) {
    console.log(" A soma de A + B é menor que C")
}

else{
    console.log(" A soma de A + B é igual a C")
}


