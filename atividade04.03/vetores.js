import leia from 'readline-sync';

let soma = 0
let media 
let vetor = []

for(let i = 0; i <10; i++){
  vetor[i] = leia.questionFloat(`Digite o ${i+1} numero: `);
}

console.log("Elementos nos indices impares: ")
for(let i = 0; i <10; i++){
    if(i % 2 == 1){
        console.log( vetor[i]);
        
    }
 }

console.log("Elementos pares: ")
for(let i = 0; i <10; i++){
if(vetor[i] % 2 == 0)
console.log( vetor[i]);
   }

for(let i = 0; i <10; i++){
soma = soma + vetor [i];


}media = (soma / 10).toFixed(2)
    console.log("A soma:é  ", soma);
  console.log("A media:é  ", media);
