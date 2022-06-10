# Aula 5 - String:
## String é internamente tratada como um vetor, mas não é literalmente um vetor
### alguns metodos de vetor podem ser usados mas nao todos

## Exemplos:

>> let texto = "ola, tudo bem?"

### length
    > texto.length >> 14
    - como em arrays ve tamanho total de elementos

### var[10]
    > texto[10]; >> "b"
    - como em arrays ve oque tem no index [10]

### includes()
    >texto.includes("ola") >> true or false
    - Verifica se string existe dentro de uma outra string
    
### charAt
    > texto.charAt(10) >> b
    - ve posicao especifica o conteudo

### indexOf
    > texto.indexOf("b") >> 10
    > texto.indexOf("bem") >> 10
    - Ve posicao da letra ou frase
    - POSSIVEL VER SE A PALAVRA EXISTE DENTRO, SENAO EXISTE RETORNA -1

### slice
    > texto.slice(0,4) >> "Olá,"
    - Corta pedaco da string
    > texto.substring(0,4) >> Reparte string em um pedaco igual = slice
    - Corta pedaco da string

### split
    > texto.split("") >> ["O", "l", "a" ...]
    - Transforma Texto String em Vetor

    > texto.split(",") >> ["Ola", "tudo bem?" ]
    - Separa onde acha a virgula

### substr
    > texto.substr(0,3) >> "ola" passa tamanho que quer cortar (0 ate 3)
    - passa o tamanho q quer e corta o resto


>> let frase = "com abacate pode fazer vitamina"

### replace
    > frase.replace("abacate", "milho") >> Nao altera a string frase, somente substiui sem alterar
    - Cria uma nova frase susbstituindo abacate por milho
    //frase = frase.replace("abacate", "milho") agr substitui na variavel frase


>> let receita = "para bolo de cenoura, cenoura, farinha, oleo..."

### replaceALL
    > receita.replaceAll("cenoura", "maça") >> substitui todos onde tem cenoura e troca por maça
    - Substitui todas ocorrencias das palavra

>> let nome = "Joao da Silva"

### toUpperCase()
    >nome.toUpperCase() >> "JOAO DA SILA" Transforma string em MAIUSCULA

### toLowerCase()
    >nome.toLowerCase() >> "joao da silva" Transforma string em MINUSCULA

### trim()
    // "  joao da silva  "
    >nome.trim() >> "joao da silva" retorna valor da variavel sem espacos somente nas Extremidades <>