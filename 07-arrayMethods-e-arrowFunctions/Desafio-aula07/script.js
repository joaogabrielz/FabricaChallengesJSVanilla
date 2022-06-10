let comidas = [
    // {
    //     descricao:"Bife a parmegiana",
    //     valor:35.50,
    //     url:"https://img.itdg.com.br/tdg/images/blog/uploads/2017/07/shutterstock_413580649.jpg?w=1200",
    //     entrega:false;
    // }
]

function adicionaPratos(){
    let urlI = document.getElementById("url").value;
    let valorI = document.getElementById("valor").value;
    let descricaoI = document.getElementById("descricao").value;

    let entregaF = document.getElementById("entregaF");
    let entregaI;

    if(descricaoI != "" && valorI != ""){
        if(entregaF.checked){
            entregaI = true;
        }
        else{
            entregaI = false;
        }
        comidas.push({
            descricao: descricaoI,
            valor:valorI,
            url:urlI,
            entrega:entregaI
        })
        criaCatalogoDeComidas();
        limpaInput();
    }
    else if(descricaoI == ""){
        alert("Porfavor Preencha o Campo de Descrição")
    }
    else if(valorI == ""){
        alert("Porfavor Preencha o Campo de Valor")
    }
    
}

let comidasBkp;

function limpaInput(){
    document.getElementById("url").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("descricao").value = "";

    document.getElementById('busca').value = "";
}
function criaCatalogoDeComidas(){
    let divComidas = document.querySelector(".comidasDiv");
    document.querySelector(".comidasDiv").innerHTML = "";
    for (let i = 0; i < comidas.length; i++) {
        divComidas.innerHTML += `
        <div class="comida">
            <div>
                <img src="${comidas[i].url}">
                <p class="comida-descricao">${comidas[i].descricao}</p>
                <p class="comida-valor">${comidas[i].valor}</p>
            </div>
        </div>
        `;
    }
}
let buscaActive = false;
function buscaPratos(){
    if(!buscaActive){
        let busca = document.getElementById('busca').value
        comidasBkp = comidas;
        let entregaGratis = document.getElementById("entregaO")
    
        if(entregaGratis.checked){
            comidas = comidas.filter((el) => {
                return el.entrega == true && el.descricao.toLowerCase().includes(busca.toLowerCase());  
            })
        }
        else{
            comidas = comidas.filter((el) => {
                return el.descricao.toLowerCase().includes(busca.toLowerCase());  
            })
        }
       
    
        document.querySelector(".comidasDiv").innerHTML = "";
        criaCatalogoDeComidas();
        buscaActive = true;
    }
    else{
        alert("Limpe o filtro antes de Buscar novamente")
    }
    
}
function limpaFiltro(){
    buscaActive = false;
    limpaInput();
    comidas = comidasBkp;
    document.querySelector(".comidasDiv").innerHTML = "";
    criaCatalogoDeComidas();
}