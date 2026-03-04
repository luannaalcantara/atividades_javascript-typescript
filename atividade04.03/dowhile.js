import leia from 'readline-sync';

let numero
let soma = 0
let contador = 0
let media

do{
numero = leia.questionFloat('Digite um numero: ');

if(numero % 3 == 0 && numero != 0){
soma = soma + numero
contador = contador + 1

}


}while(numero != 0)
    media = (soma / contador).toFixed(2)
    console.log("A media de todos os números múltiplos de 3 é: ", media);