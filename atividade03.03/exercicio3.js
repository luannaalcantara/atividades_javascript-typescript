import leia from 'readline-sync'

let codigo
let quantidade
let nomeProduto
let preco
let total

codigo = leia.questionInt(" Digite o codigo do produto: ");
quantidade = leia.questionInt(" Digite a quantidade: ");

switch(codigo){
    case 1:
nomeProduto = " Cachorro Quente "
preco = 10
break;

  case 2:
nomeProduto = " X-Salada "
preco = 15
break;

    case 3:
nomeProduto = " X-Bacon "
preco = 18
break;

    case 4:
nomeProduto = " Bauru "
preco = 12
break;

    case 5:
nomeProduto = " Refrigerante "
preco = 8
break;

    case 6:
nomeProduto = " Suco de laranja "
preco = 13
break;
}
  
total = quantidade * preco
console.log(`Produto: ${nomeProduto}`)
console.log(`Valor total: ${total.toFixed(2)}`)


