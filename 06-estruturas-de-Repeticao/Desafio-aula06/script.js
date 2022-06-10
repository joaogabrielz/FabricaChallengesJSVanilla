// > ou = 0;
let lista = [];
let maior = 0;

function adicionarValores(){
    let numeroInput = document.getElementById("numero").value;

    if(numeroInput != "" && numeroInput > -1){
        numeroInput = parseInt(document.getElementById("numero").value);

        lista.push(numeroInput);
        exibeValores();
        limpaInput();
    }
    else if(numeroInput == ""){
        alert("Porfavor preencha o campo")
    }
    else{
        limpaInput();
        alert("Numero invalida somente numeros[ >=0 ]")
    }

}

function ordenarValores(){
    
    for(let i=0; i < lista.length -1; i++){ //For ate o penultimo item dalista
       for(let j = i + 1; j < lista.length; j++){ //for do proximo item ate o ultimo da lista

        if(lista[i] > lista[j]){ //se posicao da lista[i] > proxima posicao

            let aux = lista[i]; //aux recebe lista pos[i] ,valor maior
            lista[i] = lista[j]; //lista pos[i] recebe, posicao menor
            lista[j] = aux; //proximo item da lista, recebe maior
        }
       }
    }
    document.getElementById("numeroOrdenado").innerText = lista
}
function limpaInput(){
    document.getElementById("numero").value = "";
}
function exibeValores(){
    document.getElementById("numeroAdicionado").innerText = lista;
}