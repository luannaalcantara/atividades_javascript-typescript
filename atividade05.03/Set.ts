import readlineSync = require("readline-sync");

let numeros = new Set<number>();

for(let i = 0; i < 10; i++){
   let numero = readlineSync.questionInt("Digite um numero: ");
 
   numeros.add(numero);

} console.log("\nListar dados do Set: ")
for(let numero of numeros){
    console.log(numero);
 

}