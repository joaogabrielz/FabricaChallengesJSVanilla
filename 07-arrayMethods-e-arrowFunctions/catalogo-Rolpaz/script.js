let produtos = [
    {
        valor:230.00,
        imagem: "https://cf.shopee.com.br/file/04b655d82f0facbd82cd3206640f8717",
        descricao: "Camisa Tommy hilfiger Azul"
    },
    
    {
        valor:153.45,
        imagem: "https://cf.shopee.com.br/file/4fe624718def283ead5e38787d9ff0f9",
        descricao: "Camiseta Nike Preta"
    },

    {
        valor:140.75,
        imagem: "https://imgcentauro-a.akamaihd.net/900x900/9584702R/camiseta-nike-dry-academy-21-top-masculina-img.jpg",
        descricao: "Camiseta Nike Esportiva Azul"
    },

    {
        valor:93.55,
        imagem: "https://m.media-amazon.com/images/I/51PS7SlzhGL._AC_SX522_.jpg",
        descricao: "Camiseta Pool Preta"
    },

    {
        valor:119.00,
        imagem: "https://images.tcdn.com.br/img/img_prod/745575/camisa_social_tradicional_passa_facil_maquinetada_azul_manga_curta_27_1_20201216141841.jpg",
        descricao: "Camisa Sixtini Azul"
    },

    {
        valor:118.00,
        imagem: "https://images.lojanike.com.br/1024x1024/produto/camiseta-nike-sb-infantil-CZ7775-100-1-11627399490.jpg",
        descricao: "Camiseta Nike Brasil"
    },

    {
        valor:109.00,
        imagem: "https://www.katy.com.br/cdn/imagens/produtos/original/camiseta-nike-sportswear-masculina-a51bc0a3c894228e83745337df94bbb8.png",
        descricao: "Camiseta Nike Air"
    },

    {
        valor:99.99,
        imagem: "https://images.lojanike.com.br/1024x1024/produto/camiseta-nike-sportswear-just-do-it-masculina-AR5006-010-1-11627568092.jpg",
        descricao: "Camiseta Nike Just Do It"
    },

    {
        valor:30.90,
        imagem: "https://m.media-amazon.com/images/I/51PlFZUy34L._AC_SX679_.jpg",
        descricao: "Pendrive sandisk"
    }

];

let produtosBkp;

function criaCatalogo(){
   let sectionCatalogo = document.getElementById("catalogo");
   for(let i=0; i < produtos.length; i++){
     sectionCatalogo.innerHTML += `
        <div class="produto">
            <img src="${produtos[i].imagem}">
            <div class="produto-detalhe">
            <p class="produto-titulo">${produtos[i].descricao}</p>
            <p class="produto-valor">R$${produtos[i].valor}</p>
            </div>
        </div>
     `;
   }
}
function buscar(){
    let busca = document.getElementById("busca").value
    produtosBkp = produtos;
    produtos = produtos.filter((elemento)=>{ //cada elemento do vetor
        return elemento.descricao.toLowerCase().includes(busca.toLowerCase());
    })
    document.getElementById("catalogo").innerHTML = "";
    criaCatalogo();
}
function limpar(){
    document.getElementById("busca").value = "";
    produtos = produtosBkp;
    document.getElementById("catalogo").innerHTML = "";
    criaCatalogo();
}