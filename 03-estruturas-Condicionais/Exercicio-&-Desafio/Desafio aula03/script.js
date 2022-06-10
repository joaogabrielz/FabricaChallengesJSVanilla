
function classifica(){
  let n1String = document.getElementById("ld1").value;
  let n2String = document.getElementById("ld2").value;
  let n3String = document.getElementById("ld3").value;

  let n1 =0;
  let n2 =0;
  let n3 =0;
 if(n1String != "" && n2String != "" && n3String != ""){

    n1 = Number(n1String);
    n2 = Number(n2String);
    n3 = Number(n3String);

    if(n1 == n2 && n1 == n3  &&   n2==n1 && n2==n3  &&   n3==n1 && n3==n2){//tds lados iguais
        alert("Triangulo Equilátero")
    }
    else if(n1 != n2 && n1 != n3  &&   n2!=n1 && n2!=n3  &&   n3!=n1 && n3!=n2){//tds lados diferentes
        alert("Triangulo Escaleno")
    }
    else { //dois lados iguais e 1 diferente
       
        alert("Triangulo Isóceles")
        
    }
}
else{
    alert("Porfavor Preencha todos os campos")
}
}