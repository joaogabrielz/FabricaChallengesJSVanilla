// # Escopos
// - Quem pode Acessar quem e Oque pode acessar oque..
// - Funcoes mais de fora Nao acessam as de dentro, mas os mais restritos acessam os escopos mais genericos 

//1- Escopo Global 
let nome = "Jao da silva";

//2- Escopo de Modulo
// - o Html nao Acessa o modulo, mas o js acessa html
// - configura OnClick do botao no JS...
//document.getElementById("btnCadastrar").onclick = cadastrar;

//3- Escopo Funcao
function ola(){
  alert("ola")
  let oi = "Oi"; //Nao pode ser acessado Fora

   //4- Escopo de Bloco (condicoes, loops, etc..)
    if(true){
      let algo = "Algo";//Nao pode ser acessado fora nem dentro da Funcao
    }//Variavel local no escopo bloco if

}
//Escopo limitado dentro da funcao