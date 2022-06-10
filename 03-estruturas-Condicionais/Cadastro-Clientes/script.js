function salvar(){ 
    let nome = document.formulario.nome.value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let tipo = document.formulario.tipo.value;
        //ou
        // let tipo = document.querySelector("input[type=radio]:checked").value;
        //vê primeiro input type radio q esteja checkado,o valor de dentro fisica ou juridica

    let erros = "";


    if(nome == ""){         //else if (nao verifica outros if se o primeiro if passar!)
      erros += "nome, "       //Possivel if e else dentro de ifs (que so executa se primeiro if passar)  
    }
    if(email == ""){
        erros += "email, " 
    }
    if(idade == ""){
        erros += "idade, " 
    }
    if(tipo == ""){
        erros += "tipo " 
    }
        if(erros != ""){
            alert("Os campos [ "+ erros +"] não foram preenchidos corretamente. " );
        }
        else{
            alert("ok")
        }
}