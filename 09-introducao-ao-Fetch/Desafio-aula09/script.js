async function buscaCep(){
    let cep = document.getElementById("cep").value

    if(cep != ""){
        if(cep.length == 8){
            
            let res= await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            let resultado = await res.json() 
         //   console.log(resultado);
            if(resultado.erro){
                alert("CEP não encontrado, Porfavor Digite um CEP válido!");
                limpaInput();
            }
            else{
                document.querySelector(".lista").innerHTML = `
                <h2>CEP</h2>
                <table>
                    <thead>
                        <th>Rua</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Uf</th>
                    </thead>
                    <tbody id="tabelaCliente">
                        <tr>
                        <td>${resultado.logradouro}</td>
                        <td>${resultado.bairro}</td>
                        <td>${resultado.localidade}</td>
                        <td>${resultado.uf}</td>
                        </tr>
                    </tbody>
                </table>
            `; 
            limpaInput();
             }
            }
            else{
                alert("Erro: CEP inválido, Cep´s possuem 8 Numeros!");
                limpaInput();
            }
        }
else{
        alert("Porfavor preencha o campo")
    }

   function limpaInput(){
    document.getElementById("cep").value = "";
   }

}