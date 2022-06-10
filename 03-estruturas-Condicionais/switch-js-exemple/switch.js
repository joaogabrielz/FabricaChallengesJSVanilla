//Usa se Switch quando se tem numero condições maiores e contaveis
//Escopo de exclusão multiplas, onde não se tem ação concorrente

let metodo = "dinheiro";

switch (metodo) {
  case "dinheiro":
    alert("Pagamento em Dinheiro $");
 // console.log("Pagamento em Dinheiro $");
    break;

  case "pix":
    alert("Pagamento em Pix");
    break;

  case "Cartao de credito":
    alert("Pagamento em Cartao de Credito");
    break;

  case "Cartao de debito":
    alert("Pagamento em Cartao de Debito");
    break;

  case "Vale Alimentação":
    alert("Pagamento em Vale Alimentação");
    break;

  default:
    alert("Opção Invalida");
    break;
}
