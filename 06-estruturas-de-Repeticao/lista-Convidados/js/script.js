let convidados = [];

function inserir(){
    let nomeConvidado = document.getElementById("nomeConvidado").value;

    if(nomeConvidado == ""){
        alert("Preencha o nome do convidado")
    }
    else{
        convidados.push(nomeConvidado);
        limpar();
        imprimir();
    }
}
function imprimir(){
    let tabela = document.getElementById("tabela");
    let cacheTabela = "";
    tabela.innerHTML = "";

    for(let i=0; i < convidados.length; i++){     
       cacheTabela =  cacheTabela + `<tr><td>${convidados[i]}</td> <td> <img src="img/close.png" onclick="remover(${i})"></img></td> </tr>`
    }
    tabela.innerHTML = cacheTabela;
}
function limpar(){
    document.getElementById("nomeConvidado").value = "";
    document.getElementById("nomeBusca").value = "";
}
function remover(posicao_i){

    if(window.confirm("Tem certeza que deseja remover este convidado?")){
        convidados.splice(posicao_i, 1);
        imprimir();
    }
}
function buscar(){
    let nomeBuscar = document.getElementById("nomeBusca").value;

    if(nomeBuscar == ""){
        alert("Preencha um nome a ser buscado")
    }
    else{
        let i = 0;
        let achou = false;

        while(i < convidados.length && !achou){//enquanto i for menor q o length e achou = false
            if(convidados[i] == nomeBuscar){          
                alert(`O nome ${nomeBuscar} foi encontrado e está na posição [${i+1}]`)
                achou = true;
            }
           i++;
        }
            if(!achou){ //ou false
                alert("Nome não encontrado")
            }           
    }
    limpar();
}