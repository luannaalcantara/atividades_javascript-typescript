import leia from 'readline-sync';

let numero

numero = leia.questionInt("Digite o numero: ");

if (numero % 2 == 0){ 
 if(numero >=0){
   
    console.log(" O numero " + numero + " é par e positivo! ");
 } 
  else{ 
    console.log(" O numero " + numero + " é par e negativo! ");
 }
}
    else if(numero >=0){
        console.log(" O numero " + numero + " é impar e positivo! ");
    }
    else{
            console.log(" O numero " + numero + " é impar e negativo! ")
        }
    
 



 



