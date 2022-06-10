function procurar(){
    let frase = document.getElementById("frase").value;
    let busca = document.getElementById("busca").value;

    let resultado = frase.includes(busca);
    let divResult = document.querySelector(".resultado");

    if(resultado == true){
        divResult.innerHTML = "<p>Palavra ["+ busca +"] Encontrada</p>"; //innerText nao usa quando quer usar tag HTML      
    }
    else{
        divResult.innerHTML = `<p>Palavra <strong>${busca}</strong> Não Encontrada</p>`;
    }
}