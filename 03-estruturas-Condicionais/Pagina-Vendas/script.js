let total = 0;

function adicionar(){
    let frutaSelecionada = document.getElementById("fruta").value
    
    switch(frutaSelecionada){
        case "banana":
            total = total + 5;
            alert("Banana a >5,00R$ Adicionada com sucesso, valor compra: "+ total)
            break;
        case "goiaba":
            total += 8.20;
            alert("Goiaba a >8,20R$ Adicionada com sucesso, valor compra: "+ total)
            break;
        case "maca":
            total += 4;
            alert("Maça a >4,00R$ Adicionada com sucesso, valor compra: "+ total)
            break;     
        case "melao":
            total += 6.50
            alert("Melão a >6,50R$ Adicionada com sucesso, valor compra: "+ total)
            break; 
        default:
            alert("Por favor Selecione uma Fruta")
        break;
    }
}
function finalizar(){
    alert("Sua compra foi finalizada com sucesso, o total foi de: "+ total + " reais.")
    total = 0;
}