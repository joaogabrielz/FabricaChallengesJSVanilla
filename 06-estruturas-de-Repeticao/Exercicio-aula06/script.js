let notas = [];
let notaAtual = 0;

let maior = 0;
let menor = 0;

let somaNotas = 0; 
let media = 0;

let chamaSubstituir = false;

function adicionar(){
    let notasInput = document.getElementById("nota").value;

    if(notasInput == ""){
      notasInput = parseFloat(document.getElementById("nota").value);
      alert("Porfavor preencha o campo notas")
    }
    else if(!chamaSubstituir){
      adicionaNotas()
      calculaMedia();
      calculaMaiorEmenor();   
    }
    else{
      substituir();
      calculaMaiorEmenor();
    }

   exibeNotas();
   limpaInput();
}
function adicionaNotas(){
  let notasInput = parseFloat(document.getElementById("nota").value);
  notas.push(notasInput);
  somaNotas = somaNotas + notasInput;
}
function finalizar(){
  document.getElementById("btnAdd").style = "background-color:rgb(218, 228, 38);"
  document.getElementById("btnAdd").innerText = "Substituir"
  chamaSubstituir = true;
}
function substituir(){
  let notasInput = document.getElementById("nota").value;
  chamaSubstituir = true;
  let jaFoiTrocadoUma = false;

  if(notasInput > menor){
    for(let i=0; i < notas.length; i++){
      if(notas[i] == menor && !jaFoiTrocadoUma){    
        alert(`Nota ${notas[i]} foi substituida por ${notasInput}`)  
        notas[i] = notasInput;     
        document.getElementById("substitutivaNota").innerText = notasInput;
        jaFoiTrocadoUma = true;
        
        somaNotas = (somaNotas + parseFloat(notasInput)) - menor;
      }
    }
  }
  else{
    alert("Nota substitutiva não pode ser menor")
  }

  calculaMaiorEmenor();
  calculaMedia();
  exibeNotas();
}
function calculaMaiorEmenor(){
  for(let i = 0 ; i < notas.length; i++){

    if(i == 0){
      menor = notas[0];
      maior = notas[0];
    }
    if(notas[i] >= maior){
      maior = notas[i];
      
    }
    if(notas[i] < menor){
      menor = notas[i];
      
    }
  }
document.getElementById("maiorNota").innerText = maior;
document.getElementById("menorNota").innerText = menor;
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
function exibeNotas(){
  document.getElementById("notas").innerText = notas;
}
function limpaInput(){
  document.getElementById("nota").value = "";
}