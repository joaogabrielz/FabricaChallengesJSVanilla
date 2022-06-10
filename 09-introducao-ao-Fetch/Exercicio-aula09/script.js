let result = document.getElementById("result");

let sec = 0;
let min = 0;

result.innerHTML = "00:00";

function iniciaTemporizador() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let tempoM = document.getElementById("tempoMin").value;

      if (sec < 10) {
        sec = "0" + sec;
      }
      if (sec == 60) {
        min += 1;
        sec = 0;
      }

      if (min < 10) {
        result.innerHTML = "0" + min + ":" + sec;
      } else {
        result.innerHTML = min + ":" + sec;
      }

      if (sec == 0) {
        result.innerHTML = min + ":" + "00";
      }
      if (min < 10 && sec == 0) {
        result.innerHTML = "0" + min + ":" + "00";
      }
      sec++;

      if (min == tempoM) {
        result.innerHTML = "Acabou!";
        resolve("Acabou!");
      }
      else if (tempoM > 0 && min != tempoM) {
        iniciaTemporizador();
      }
      if (tempoM < 0) {
        alert("Ocorreu um Erro!");
        reject("Somente Numeros > 0");
      }
    }, 1000);
  });
}

async function verificaTempo() {
  sec = 0;
  min = 0;
    let resultado = await iniciaTemporizador()
    .then((result)=>{console.log(result)})
    .catch((e)=>{console.log(e)})
}
