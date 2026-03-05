import readlineSync = require("readline-sync");

let cores: string[] = [];

for(let i = 0; i < 5; i++){
   let cor = readlineSync.question("Digite uma cor: ");
   cores [i] = cor;
}
  console.log("\nlistar todas as cores: ");
  for(let i = 0; i < 5; i++){
console.log(cores[i]);

  } cores.sort();

console.log("\nOrdenar as cores: ");
  for(let i = 0; i < 5; i++){
    console.log(cores[i]);
  } 