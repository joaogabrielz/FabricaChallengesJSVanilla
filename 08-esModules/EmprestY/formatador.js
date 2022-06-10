export function removePontos(texto){
    return texto.replaceAll(".", ""); //Remove ocorrencia de pontos, substitui por nada "";
}
export function removeIfens(texto){
    return texto.replaceAll("-", "");
}