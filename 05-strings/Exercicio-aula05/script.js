function substituir(){
    let palavra = document.getElementById("palavra").value
    let busca = document.getElementById("busca").value
    let substituta = document.getElementById("substituta").value

    let result = palavra.includes(busca);
    
   if(palavra != "" && busca != "" && substituta != ""){
        if(result == true){
            let troca =  palavra.replaceAll(busca, substituta)
            document.getElementById("palavra").value = troca;
        }
        else{
            alert("Palavra buscada não existe!")
        }
   }
   else{
       alert("Preencha todos os campos")
   }
  
}