import readlinesync from "readline-sync";
import { Stack } from "./Stack";

const pilha = new Stack<string>();

let opcao: number;

pilha.printStack(); 


do {
   console.log("\n1 - Adicionar livros na pilha: ");
   console.log("2 - Listar todos os livros: ");
   console.log("3 - Retirar livro da pilha: ");
   console.log("0 - Sair");
   console.log("\n")

opcao = readlinesync.questionInt("Escolha uma opcao desejada: "); 
switch (opcao) {

      case 1:
         
         const nomelivro = readlinesync.question("Digite o nome do livro: ");

         pilha.push(nomelivro);  
         console.log("\nLivro adicionado!");
         console.log("\nPilha: ")
         pilha.printStack()
         break;

      case 2:
         
         console.log("\nLista de Livros:");
         pilha.printStack()
       
         break;

      case 3:

        
         if (pilha.isEmpty()) {
         console.log("A pilha esta vazia!");

         } else {

            const nomelivro =  pilha.pop() 

            console.log("\nUm livro foi retirado! " );
            console.log("Pilha: ");
            pilha.printStack();
         }
         break;

      default:
         console.log("Programa Finalizado!");

   }

} while (opcao !==0);

