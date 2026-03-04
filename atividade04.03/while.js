import leia from 'readline-sync';

let contador1 = 0
let contador2 = 0
let idade

idade = leia.questionInt("Digite uma idade: ");

while(idade >= 0){
//idade menor que 21
//idade maior que 50

if (idade < 21){
  contador1 = contador1 + 1
  
}
 if (idade > 50){
 contador2 = contador2 + 1

 }
 idade = leia.questionInt("Digite uma idade: ");

}
console.log("Total de pessoas menores de 21 anos: ", contador1)
console.log("Total de pessoas maiores de 50 anos: ", contador2)