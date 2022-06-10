import { setAuthorizationCode, getPlaylists } from "./api.js";

async function carregarPlaylists() {
  let playlistSection = document.querySelector(".playlists");

//1 - Pegar Codigo de autorizacao
  let params = new URLSearchParams(location.search);
  let codAuth = params.get("code");

//2 - Passar Codigo de Autorizacao para o módulo Api.js
  await setAuthorizationCode(codAuth);

//3 - Buscar as playlists do usuario
  try {
    let playlists = await getPlaylists();

//4 - Listagem das Playlists no HTML
    for (let i = 0; i < playlists.length; i++) {
      let capaPlaylist = playlists[i].images[0];

      playlistSection.innerHTML += `
          <div class="playlist-card">
              <img src="${
                capaPlaylist
                  ? capaPlaylist.url
                  : "https://horizondatasys.com/wp-content/uploads/2018/01/Dark-Gray-Square.png"
              }">
              <span>${playlists[i].name}</span>      
          </div>
          `;
    }
  } catch (error) {
      console.log(error);
      playlistSection.innerHTML = error.mensagem;
  }
}
document.body.onload = carregarPlaylists();
