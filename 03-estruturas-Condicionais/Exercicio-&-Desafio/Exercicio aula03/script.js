
function verificar(){
    let numString = document.getElementsByName("numero")[0].value; //como pode ter mais de 1 tem q colocar posicao[0]
    
    let num = 0;

    if(numString != ""){
        num = Number(numString);

        if(num % 2 == 0 ){
            alert("Numero é Par")
        }
        else{
            alert("Numero é ímpar")
        }
    }
    else{
        alert("Porfavor Preencha o campo")
    }

   
}