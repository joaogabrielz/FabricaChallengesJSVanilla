// ************* OBS **************** 
//Mais Sobre Arrays(Vetores)...

// > SLICE
// listaCompra.slice(2) // Corta elementos mas nao altera o original cria um novo array
//let listacompra2 = listaCompra.slice(2, 4) // indice do comeco obrigatorio, ultimo nao necessario
//corta do 2 ao 4

// > POP
//Inverso do Push é o pop
//listaCompras.pop() // Remove o ultimo elemento do array

// > SHIFT
//listacompra.shift() //Deslizou todo mundo do vetor pra esquerda
// quem ta na primeira posicao some, e arrasta resto pra esquerda

// > UNSHIFT
//Ao contrador de shift é o listacompras.unshift("primeiro elemento agr")
//Insire no comeco e arrasta resto pra direita

// > CONCAT
//Metodo concat junta arrays, em outro array , nao alerta a principal
//let array1 = ["arroz", "madioca"]
//let array2 = ["refri","bacon"]
//array1.concat(array2) > ["arroz", "madioca,"refri","bacon"]

// > INCLUDES
//se tem item no vetor
//listaCompras.includes("bacon")
//listacompras.includes("bacon") e retorna Boolean(true or false)