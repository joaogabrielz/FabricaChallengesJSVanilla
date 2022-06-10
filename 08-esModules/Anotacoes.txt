# ES_modules

## Mostrar Valor -> Dado que expressa no JS ("Jao da silva");
	- esse valor é armazenadoem variaveis
	 - VARIABLES:
	    let nome = "Jao da silva";

## Expressar nao so uma , mas um conjunto informações de um valor
	 - ARRAYS:
	    let numbers = [1,2,3,4,5];

## Guardar um conjunto de valores dentro e uma variavel
	 - OBJECTS:
	   let pessoa = {
		nome:"Jao da silva",
		cpf:0323131212,
		idade:22,
		email:"jao@gmail.com"
	      }

     ### Acesso Literal a Propriedade do Objeto:
       - Usando modificador "."
        - Passamos exatamente o Nome do Campo que quer Acessar

	 > pessoa.nome; //"Jao da silva"


     ### Acesso Avaliado pelo JavaScript
       - Usando modificador "[]"
	
 	> pessoa["nome"]; //"Jao da silva"

      - O JS executa processo Evaluate(A avaliação da expressao dentro dos Colchetes)
       - Nao precisa ser exatamente o nome do campo
        - Pode-se Colocar uma expressão de JavaScript, pode ser chamada de funçoes, soma de numeros, etc..

        >pessoa["no + me"]; //"Jao da silva"

## Referencias:
      - Como javascript Entende e Interpeta os Valores que armazenamos em Variaveis

  ### Valores Literais:
      - String, Numericos, Booleanos
	 JS armazena literalmente aquela String,Number,Booleano dentro da variavel..
      - Isso empacta em Comparações de Variaveis:

	nome = "joao";
	nome2 = "joao";
	nome == nome2; //true 

  ## Valores do tipo Objeto:
    - a Variavel Nao guarda um Objeto dentro dela
	- Guarda a REFERENCIA pra <Posicao de memoria> pra onde esse Objeto esta Armazenado

	let objeto1 = {
		nome:"jao da silva",
		email:"jao@gmail.com"
	 }
	let objeto2 = {
		nome:"jao da silva",
		email:"jao@gmail.com"
	 }

	objeto1 == objeto2 //false

    ### Operador == Nao compara se as Propriedades do Objeto sao iguais
	e sim se Apontam pro mesmo Objeto, se tem a referencia do mesmo Objeto

    - Valores Iguais , mas sao objetos diferentes
     - Exemplo mesma casa, mesmo desgin, pintura , Mas estao em endereços diferentes
      - Nao é porque sao iguais que sao as mesmas casas, residem em endereços Diferentes!

   - Comparacao entre essas 2 variaveis que Recebem Referencia de um Objeto
    - Nao esta comparando se os 2 Objetos contem os mesmos atributos
     - E sim se Apontam pro mesmo Objeto, Se guardam o Endereco de um mesmo Objeto.

     - Objetos Sao Referencia!
       - Variavel Aponta para onde o Objeto Reside, Variavel armazena Endereço do Objeto.

## Copia De Valores:
    ### Literais:
	- Para tipos Literais Os Valores Sao Copiados!, se alterar um nao afeta o outro.

	let nome = "jao silva"
	let nome2 = nome; 
	 //As 2 tem jao da silva

	nome = "jao silva"
	nome2 = "Maria silva"; 
	 //Agr cada uma tem um nome

   ### Objetos:

	let objeto1 = {
		nome:"jao da silva",
		email:"jao@gmail.com"
	 }
	let objeto2 = objeto1;

     objeto1 //{nome:"jao da silva",email:"jao@gmail.com"}
     objeto2 //{nome:"jao da silva",email:"jao@gmail.com"}

	Os 2 Estao Apontando para o mesmo Endereço!, tem a mesma Referencia pro mesmo Objeto

      objeto2.nome = "Maria da silva"; //{nome:"Maria da silva",email:"jao@gmail.com"}
      objeto1 //{nome:"Maria da silva",email:"jao@gmail.com"}

     Objeto1 Tambem sofre a alteração!, pois nao esta mudando a propriedade nome do objeto2
     Esta mudando a propriedade nome do objeto que o Objeto2 esta apontando, que é a mesma de objeto1

	- COPIA de Referencia -> "COPIA RASA" 

  ### Copiar Propriedades do Objeto , Nao sua Referencia
	
      - COPIA de Propriedades do Objeto -> "COPIA Profunda"/"Deep Copy"	

	let objeto1 = {
		nome:"jao da silva",
		email:"jao@gmail.com"
	 }

     - Object.assign(destino, alvo); //Copia Propriedades do Objeto!

      let objeto2 = Object.assign({}, objeto1); //{nome:"jao da silva",email:"jao@gmail.com"}

	objeto1 == objeto2 //false  
    - Se mudar 1 Nao altera o outro, Pois apontam para objetos diferentes


# Escalabilidade

 - Capacidade do software aumentar e diminuir seu tamanho conforme a demanda

 ### Como?
   - Estrutura e Organização!

 ### Porque?
   - Complexidade, vai aumentar propocionalmente ao crescimento do software, entao
	Manter a organizacao/boa estrutura vai minimizar os impactos da complexidade no software

   - Reaproveitamento, Pode reaproveitar varias partes do software o tornando mais manutenivel
	Bug detectado so manutenção em um local, e nao em todo código se fosse replicado..

# Desacoplamento & Separação de Responsabilidade

  - Desacoplar funcionalidades, para obter reaproveitamento
  - Separação de Resposabilidade vai depender doque vai desacoplar, cada sepracação tem uma Responsabilidade

 ## Modulos
  - Desacoplar Partes de codigos, ES_Modules. a partir do EcmaScript6.

  ### Criar arquivo JavaScript e determinar quais partes quer modularizar, conhecido como EXPORT.(exportar var, funcoes,...)
   ### E o ES_Modules tambem permite que outro js possa Utilizar A importacao.

     ### (X.js) >"Import funcao a" (X depende da Funcao a, do arquivo/Componente (Y.js)) -> ### (Y.js)-(function a) >"Export funcao a"

	 - "Entao Arquivo Y.js é uma Dependencia do arquivo X.js".


 # Servidores
  - Contador, maquina fisica que disponibiliza e hospeda arquivo fonte do projeto
	- parte fisica é um computador, sendo computador pode se tornar um servidor

   ### Servidor Logico/Software um progama que usa no computador que implementa a logica de servir os arquivos do Projeto
	- Software de Servidor

   ## Software de Servidor HTTP
	- Protocolo HTTP
    ### Requisição -> entra em um site, ex: google, requisicao da pagina de busca 
    ### Resposta -> Servidor do Gooogle, Fisico, que tem software HTTP, recebe a requisição e Envia como Resposta oque Voce Solicitou
	
 ## Exemplos:
       - Servidor HTTP dedicados a linguagem 
	  PHP > Wamp, Lamp, Wamp (Pacotes)
	  Java > Apache tom cat
 
       - Soluções Genericas que não dependem de tecnologia Especifica 
	  - Extensão/Plugin VsCode (Live Server) - Install
	    - LocalHost ex:127.0.0.1:5500/index.html ou localhost:5500/index.html

# Escopos
  - Quem pode Acessar quem e Oque pode acessar oque..
	
	
	
	