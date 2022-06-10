let listaPrecos = [0, 0, 0];

function adicionarReceita(){
    let receitaInput = parseFloat(document.getElementById("receitaInput").value);

    listaPrecos[0] = listaPrecos[0] + receitaInput
    exibirPrecos();
    limpaCampo();
}

function adicionarDespesa(){
    let despesaInput = parseFloat(document.getElementById("despesaInput").value);

    listaPrecos[1] = listaPrecos[1] + despesaInput
    exibirPrecos();
    limpaCampo();
}
function exibirPrecos(){
    document.getElementById("preco").innerText = listaPrecos[0];
    document.getElementById("despesa").innerText = listaPrecos[1];
    document.getElementById("balanca").innerText = listaPrecos[0] - listaPrecos[1];
}
function limpaCampo(){
    document.getElementById("receitaInput").value = "";
    document.getElementById("despesaInput").value = "";
}