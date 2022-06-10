function tornaMaiuscula(){
    let maiusc = document.getElementById("palavra").value;

    alert(maiusc.toUpperCase());
    document.getElementById("palavra").value = maiusc.toUpperCase();   
}
function tornaMinuscula(){
    let minusc = document.getElementById("palavra").value;

    alert(minusc.toLowerCase());
    document.getElementById("palavra").value = minusc.toLowerCase();
}
function contaCaracteres(){
    let qntdChar = document.getElementById("palavra").value;

    alert(`Há ${qntdChar.length} caracteres`);
}