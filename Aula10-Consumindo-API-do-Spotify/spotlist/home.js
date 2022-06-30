let clientID = "77083608262b474c97ad90d926158597";
let clientSecret = "ded4d14cb40b42e1a083fe5cafb1c2c8";

async function carregarPlaylists() {

//1 - Pegar Codigo de autorizacao

  let playlistSection = document.querySelector(".playlists");

  let params = new URLSearchParams(location.search);
  let codAuth = params.get("code");

//2 - trocar Codigo de Autorizacao pelo token

  let body = new URLSearchParams()
  body.append("grant_type", "authorization_code");
  body.append("code", codAuth);
  body.append("redirect_uri", "http://localhost:5500/home.html");

  let resposta = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(clientID + ":" + clientSecret),
    },
    body: body,
    })
    let respostaCorpo = await resposta.json();
    let token = respostaCorpo.access_token

//3 - pegar id do usuario

    let respostaUsuario = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token, // ja vem criptografado
        "Content-Type": "application/json", //Info sempre que envia requisicao que tem info em json
      },
    });
    let usuario = await respostaUsuario.json();

//4 - buscar playlists usuario

    let respostaPlaylists = await fetch(
  `https://api.spotify.com/v1/users/${usuario.id}/playlists`,
  {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });
  let respostaPlaylistsCorpo = await respostaPlaylists.json()
  let playlists = respostaPlaylistsCorpo.items;

//5 - Listagem playlists no HTML

  try {
    for (let i = 0; i < playlists.length; i++) {
      let capaPlaylist = playlists[i].images[0];
      playlistSection.innerHTML += `
          <div class="playlist-card">
              <img src="${
                capaPlaylist ? capaPlaylist.url : 
                "https://horizondatasys.com/wp-content/uploads/2018/01/Dark-Gray-Square.png" }">
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
