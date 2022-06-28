# Consumir API spotify

## API Rest

   - Utiliza verbos/metodos HTTP para classificar tipos de acoes que vamos fazer:"CRUD"
	- GET - Acessar recursos
        - POST - Requisicoes, Criar recursos novos
        - PUT - Alterar ou substituir Recursos
        - DELETE - Remover Recursos

  ### Sempre que for Consumir API Ler documentação Fonte para descobrir, 
       estudar como ela funciona para consumi-la
      - Ex: Spotify for Developers


 ## Authentication:
	- OAuth 2.0
          > Sistema que dita, regra o processo de autenticação
		-Google e Spotify Utilizam

## Papeis:

### Dono do Recurso
    Detentora da informação que queremos utilizar(Caso do Spotify, Usuario que usa Spotify)
(Usuario do Spotify, e da nossa Aplicação)

### Servidor de Autorização
    Papel responsavel por fornecer TOKEN de acesso aos recursos da informacao.
(Proprio Spotify)

### Servidor de Recurso
    Servidor que hospeda informações do Dono do Recurso(Caso do Spotify, o proprio Spotify)
(Proprio Spotify)

### Cliente
    Entidade que quer acessar as informacoes, os recursos que o Dono do recurso detem,
    e esta hospedado no Servidor de Recurso,
    e ele Precisa obter Autorizacao atraves do servidor de autorização
(Nao especifica quem é, pode ser Servidor, Aplicação Front-end ou back-end..)
(No Caso, Nossa Aplicação)


App -> Garantia de Acesso aos Dados(Vamos Requisitar) Usuario(Dono do Recurso)
App Obter como Resposta,a Autorização(Codigo, Grant-Code) ou NÃO,da Garantia de Autorização <- Usuario(Dono do Recurso)

App -> Troca,Enviar Codigo Autorização(Grant-Code) Servidor de Autorização(Spotify)
App  Spotify Valida o Código,E Devolve o (Token de Acesso) <- Servidor de Autorização(Spotify)

App -> Fornece Token de Acesso, Permite acesso aos Recursos do sistema(ex:Playlists) Servidor de Recursos(tbm Spotify)
App  Recebe retorno o Acesso das Informaçoes,As informacoes(ex:Playlists) <- Servidor de Recursos(tbm Spotify)


## Token de Acesso

   ### Ciclo 
        - (Token de Acesso) -Expira, Entao temos Que Renovar
	  Renovação do Token e feito usando outro (Refresh Token)

	  "1-Token Acesso -> Expirou -> Token de Renovação
	   2-Token Renovação -> Novo Token -> Token Acesso"

   ### Escopos(Spotify decide quais escopos permite o usuario liberar para Acessarmos)
        - Definem Oque podemos Acessar do Usuario usando Token de Acesso
(Ex:Google Play, Instala App, ele informa quais recursos vai usar do seu celular, e voce autoriza)

    - Definido o Escopo na Geração do Codigo de Garantia(Grant Code)
      String com espaços

## Spotify for Developers

    ### Docs:
        - Development Guides,Authorization Guides...
    
    ### Dashboard:
    - Edit Settings:
      - Rediret URIs("http://localhost:5500/home.html")("Endereço pra voltar depois de logar")


## Pegar <Code> na URL
    - f12-> pegar URL: location.href(toda url)
    - Objeto nativo do JS: extrair Query String code, URLSearchParams(location.href)

    - URLSearchParams(location.href)->(Ojeto Tipo Classes (new)->(Instanciação...))
    - Classe (é um Molde..ex: Classe Pessoa)
    - let params = new URLSearchParams(location.href)

    //Parametros de Busca só, e nao a URL inteira entao:
    - let params = new URLSearchParams(location.search)
    - params.get("code")

## Network(Ver oque esta trafegando na pagina)
    - Caso de Erro Pode Investigar:
        - Resquest.., Headers.., Preview..

# Recapitulando
 - PC1  ->Protocolo Rede Comunicacao(ex nosso HTTP(Comunicação Web))   PC2
 Protocolo HTTP(Comunicação pela Rede atraves de Requisicoes e Resposta)
 - PC1 -> Requisita Info(assume Papel Cliente) (Nosso APP)
 - PC2 (Recebendo Requisicao, Precisa enviar resposta, assume papel Servidor) (API Spotify)

 - Requisicao = "Remetente Envia Carta ao Destinatario, destinatario, Informacoes escritas"
    -> 2Partes:
    - Headers(Cabecalho)("Envelope da Carta") e Body(Corpo)("Papel com Informacoes dentro")
    - Header (Metodo de envio, requisicao HTTP > GET,POST,PUT,DELETE)

 - Resposta = "Destinatario recebe Carta, E envia outra respondendo o Remetente"

    > Em Geral
  ### Padrão REST:
     - Depende de como a API foi Construida Pode nao seguir, mas o do Spotify Segue o Padrao REST.
        - Get - Consulta,Busca
        - Post - Cadastro
        - Put - Alteração, Registro existente
        - Delete - Remoção Info,Registro

    - *GET -> So vai Envelope(Header(QueryString)),(Nao tem Corpo(Body(Conteudo)))

  ### API RestFul:
        - Uma API que Foi Construida Usando os Padrões REST
        - Rest e Restful "nao tem diferenca+-"
        - Rest(Nome do Padrao) e RestFul(Api que segue o Padrão REST). 

### Resposta HTTP
 - Cabecalho > status_code(Oque Aconteceu na resposta (ex:404)status_text(Not found))
 - Corpo > Informação, Principal("Tal coisa cadastrada, removida, aletrada com Sucesso")

    
 - img quadrado cinza
    "https://horizondatasys.com/wp-content/uploads/2018/01/Dark-Gray-Square.png"





	




