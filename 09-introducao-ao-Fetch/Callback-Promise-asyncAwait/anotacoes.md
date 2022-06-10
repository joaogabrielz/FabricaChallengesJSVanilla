# Introdução ao Fetch

## Sincrona

 - Sequencial passo1. -> passo2. -> passo3.(Demora +Tempo) -> passo4. Depende do resultado do 3(Esperar o passo 3 executar pra executar o 4) -> passo5.(Nao consegue executar por ser sincrono)
						- Se der problema no passo 3 a aplicação vai ficar travada

	- No mundo Real com aplicações Web, a base de dados nao esta no mesmo lugar da aplicacao, nos consumimos de um lugar externo
	 - existe uma chamada, um pedido de recurso, uma Requisicao e esse outro lugar devolve a informacao e a informacao vai ser utilizada.
	  - Buscar a informacao e esperar ela chegar
	   - esta chamada de recurso externo precisa esperar ela finalizar ou resolver, pra poder fazer proximo passo

## Asincrona

 - Execução ao mesmo tempo, ou concorrente
Ex: receita de Bolo

passo1. -> passo2. -> passo 3.(esta sem farinha, mas pode adiantar outras coisas)|(-> passo5.  -> passo6.)(Dependem do 3,quando tiver a farinha continua..)(Execucoes Que dependem = Callback)
											- Funcao de Callback(Handler)(Tratar resposta de uma requisicao que e executada asincrona)
				     -> passo4. -> passo7. (passos Independentes, entao da pra executar de maneira concorrente)



### Handler = Funcao que trata alguma coisa

### callback = funcao que é passada pra tratar Resultado da funcao

  - Problema do callback HELL (chamada consecutiva de funcoes de callbacks que chamam outras funcoes q dependem de resultado de outras);
	- "Código Hadouken", tambem dificulta leitura, torna codigo mt abstrato, perde controle de como as funcoes sao executadas..

	primeiraFunction(args, function(resultadoPrimeira) {
  	  segundaFunction(reultadosPrimeiraFuncao, function(resultadoSegunda) {
   	     terceiraFunction(reultadosSegundaFuncao, function(resultadoTerceira) {
   	       E continua...
  	     });
 	    });
	  });

 - Evolução de CallBacks, Execução de Promises

## Promises

## Async Await

## Comunicação HTTP

				HTTP

			GET(Pedir Infos, sem corpo)
         	Cliente     ->(Requisição)        Servidor("https://port.../personagens")

				
	     (Head(Metadados:Tipo de dado,tamanho,auth,etc..),
		       Body(Informacoes, Params))

	    Formato JSON("Objeto JS escrito formato de texto")[{...}]
		Cliente     <-(Resposta)        Servidor

### (Execução Tem um Tempo)Entao temos Que tratar de maneira Async
- callback
- Promise
- Async/Await

## Fetch(Biblioteca JS para fazer requisicoes HTTP)

https://finalspaceapi.com/api/v0/character/
	 
