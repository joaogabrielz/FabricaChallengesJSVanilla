//let contador = 0;
let listaCompras = [];

function adicionaItem(){
    let item = document.getElementById("item").value; //string

    if(item != ""){   
            //listaCompras[listaCompras.length] = item;   //length sempre é uma a mais
            //contador = contador + 1;   //Ou (Contador += 1) ou (Contador++);
    
        if(listaCompras.indexOf(item) < 0 ) {//Ou -1(Nao encontrou) //CASE SENSITIVE!

            listaCompras.push(item); //insere no final
            imprimir();
        }
        else{
            alert("Item ja Existe na Lista")
        }

        limpar();
    }
    else{
        alert("Porfavor Preencha o campo")
    }
}

function removerItem(){
    let itemRemover = document.getElementById("itemRemover").value;

    let indiceRemover = listaCompras.indexOf(itemRemover);

    if(indiceRemover == -1){
        alert("Item nao encontrado!")
    }
    else{
        // listaCompras.splice(indiceRemover, 1, "Removido")
        // //metodo de array(vetor) a partir do indice remove elementos a frente, e se quiser pode colocar paramentro a mais
        // imprimir();

        listaCompras.splice(indiceRemover, 1)
        alert("Item Removido com Sucesso!")
        imprimir();
    }

    limpar();
}

function limpar(){
    document.getElementById("item").value = "";
    document.getElementById("itemRemover").value = "";
}

function imprimir(){
    document.getElementById("lista").innerText = listaCompras.join(" | "); //padrao de string é ( , )
}

//{
// *************   OBS **************** 

//Mais Sobre Arrays(Vetores)

// listaCompra.slice(2) // Corta elementos mas nao altera o original cria um novo array
//let listacompra2 = listaCompra.slice(2, 4) // indice do comeco obrigatorio, ultimo nao necessario
//corta do 2 ao 4

//Inverso do Push é o pop
//listaCompras.pop() // Remove o ultimo elemento do array

//listacompra.shift() //Deslizou todo mundo do vetor pra esquerda
// quem ta na primeira posicao some, e arrasta resto pra esquerda

//Ao contrador de shift é o listacompras.unshift("primeiro elemento agr")
//Insire no comeco e arrasta resto pra direita

//Metodo concat junta arrays, em outro array , nao alerta a principal
//let array1 = ["arroz", "madioca"]
//let array2 = ["refri","bacon"]
//array1.concat(array2) > ["arroz", "madioca,"refri","bacon"]

//includes
//listaCompras.includes("bacon")
//listacompras.includes("bacon") e retorna Boolean(true or false)

//}