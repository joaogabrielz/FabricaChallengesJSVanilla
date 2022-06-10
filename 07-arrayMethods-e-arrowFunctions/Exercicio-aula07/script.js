lista = [];
buscarActive = false;

function adicionarTarefas(){
   let tarefas = document.getElementById("tarefas").value;
   if(tarefas == ""){
       alert("Porfavor Preencha o campo de Tarefas")
   }
   else{
    lista.push(tarefas);
    mostrarTarefas();
    limparImput()
   }  
}
function limparImput(){
    document.getElementById("tarefas").value = "";
}
function mostrarTarefas(){
    let listaDiv = document.getElementById("lista");
    listaDiv.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
        listaDiv.innerHTML += `<p>${lista[i]} <img class="imgClose" src="close.png" onclick="excluirTarefa(${i})"></p>`
  }
}
function excluirTarefa(index){
    if(!buscarActive){
        if(window.confirm("Tem certeza que deseja remover esta Tarefa?")){
            lista.splice(index, 1);
        }
        mostrarTarefas();
    }
    else{
        alert('Limpe o filtro para excluir')
    }
        
}
function buscar(){
    buscarActive = true;
    let busca = document.getElementById("tarefas").value;
    listaBkp = lista;
    lista = lista.filter((element) => {
        return element.toLowerCase().includes(busca.toLowerCase());
    });
    document.getElementById("lista").innerHTML = "";
    mostrarTarefas();
}
function limparFiltro(){
    buscarActive = false;
    lista = listaBkp;
    document.getElementById("lista").innerHTML = "";
    mostrarTarefas();
    limparImput();
}