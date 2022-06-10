let notas = [];
   
let maior = 0;
let menor = 0;
let media = 0;

let somaNotas = 0; 

function calculaNotas(){

    adicionaNotas();
    calculaMaiorEmenor();

    exibeNotas();
    limpaInput();
    calculaMedia();
}
function calculaMaiorEmenor(){
  let notasInput = parseFloat(document.getElementById("nota").value); 

  if(notas.length == 1){ //Quando for adicionado um valor
    menor = notas[0];  //Maior e menor sao setados como o primeiro valor do vetor
    maior = notas[0];
    document.getElementById("maiorNota").innerText = maior;
    document.getElementById("menorNota").innerText = menor;
  }

  if(notasInput >= maior){
    maior = notasInput;
    document.getElementById("maiorNota").innerText = maior;
  }

  if(notasInput <= menor){
    menor = notasInput;
    document.getElementById("menorNota").innerText = menor;
  }

}
function adicionaNotas(){
  let notasInput = parseFloat(document.getElementById("nota").value); 
  notas.push(notasInput);
  somaNotas = somaNotas + notasInput;
}
function calculaMedia(){
  media = somaNotas / notas.length;
  document.getElementById("media").innerText = media.toFixed(1);

  if(media < 4){
    document.getElementById("situacao").innerText = "Reprovado";
    document.getElementById("situacao").style = "color:red;"
  }
  else if(media >= 4 || media < 7){
    document.getElementById("situacao").innerText = "Recuperação";
    document.getElementById("situacao").style = "color:yellow;"
  }
  if(media >= 7){
    document.getElementById("situacao").innerText = "Aprovado";
    document.getElementById("situacao").style = "color:green;"
  }

}
function limpaInput(){
  document.getElementById("nota").value = "";
}
function exibeNotas(){
    document.getElementById("notas").innerText = notas;   
}