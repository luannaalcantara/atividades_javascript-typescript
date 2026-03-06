import readlinesync from "readline-sync";
import { Queue } from "./Queue";

const fila = new Queue<string>();

let opcao: number;
let continuar: boolean;

do {
   console.log("\n1 - Adicionar cliente");
   console.log("2 - Listar clientes");
   console.log("3 - Chamar cliente da fila");
   console.log("0 - Sair");
   console.log("\n")
   

   
   opcao = readlinesync.questionInt("Escolha uma opcao desejada: ");

   switch (opcao) {

      case 1:
         
         const nomecliente = readlinesync.question("Digite o nome do cliente: ");

         fila.enqueue(nomecliente);

         console.log("\nCliente adicionado na fila!");
         console.log("Fila: ")
          fila.printQueue()
         break;

      case 2:
        
         console.log("\nLista de clientes na fila:");
         fila.printQueue(); //motra a fila
       
         break;

      case 3:

         if (fila.isEmpty()) {
         console.log("A fila esta vazia!");

         } else {

            const cliente = fila.dequeue();

            console.log("\nCliente chamado: " + cliente);
            console.log("Fila Atual: ");
            fila.printQueue();
         }
         break;

      default:
         console.log("Programa Finalizado!");

   }

} while (opcao !==0);