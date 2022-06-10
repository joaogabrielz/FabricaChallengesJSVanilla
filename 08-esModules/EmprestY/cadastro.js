import { removePontos, removeIfens } from "./formatador.js"; //Dependencia dele

let clientes = [];

function cadastrar(){
    let novoCliente = {};
    novoCliente.nome = document.getElementById("nome").value;
    novoCliente.cpf = document.getElementById("cpf").value;
    novoCliente.cep = document.getElementById("cep").value;
    novoCliente.numeroResidencial = document.getElementById("numero").value;
    novoCliente.limite = document.getElementById("limite").value;

    novoCliente.cpf = removePontos(novoCliente.cpf);
    novoCliente.cpf = removeIfens(novoCliente.cpf);
    
    clientes.push(novoCliente);
    listarClientes();
    alert("Cliente Cadastrado com Sucesso!");
}
function listarClientes(){
    let tabelaClientes = document.getElementById("tabelaCliente")
    tabelaClientes.innerHTML  = "";
    for(let i=0; i < clientes.length; i++){
        tabelaClientes.innerHTML += `
            <tr>
                <td>${clientes[i].nome}</td>
                <td>${clientes[i].cpf}</td>
                <td>${clientes[i].cep}</td>
                <td>${clientes[i].limite}</td>
            </tr>
        `;
    }
}

document.getElementById("btnCadastrar").onclick = cadastrar;