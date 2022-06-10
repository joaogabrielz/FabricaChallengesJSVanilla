//Credenciais do Projeto/App
let clientID = "77083608262b474c97ad90d926158597";
let clientSecret = "ded4d14cb40b42e1a083fe5cafb1c2c8";
let authorizationCode;
let user;
let refreshToken;

export async function setAuthorizationCode(code) {
  try {
    authorizationCode = code;
    await getUser();
  } catch (error) {
    console.log(error);
  }
}

async function getAcessToken() {
  try {
// - Requisicao p/ Trocar o codigo de autorizacao pelo token de acesso
    let body = new URLSearchParams();

    if (!refreshToken) {
      body.append("grant_type", "authorization_code");
      body.append("code", authorizationCode);
      body.append("redirect_uri", "http://localhost:5500/home.html");
    } else {
      body.append("grant_type", "refresh_token");
      body.append("refresh_token", refreshToken);
    }

    let resposta = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(clientID + ":" + clientSecret),
      },
      body: body,
    });
    let respostaCorpo = await resposta.json();
    if (respostaCorpo.refresh_token) {
      refreshToken = respostaCorpo.refresh_token;
    }
    return respostaCorpo.access_token;
  } catch (error) {
    console.log(error);
  }
}

async function getUser() {
  try {
    let token = await getAcessToken();
// - Obter Id Do Usuario do Spotify
    let resposta = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token, // ja vem criptografado
        "Content-Type": "application/json", //Info sempre que envia requisicao que tem info em json
      },
    });
    user = await resposta.json();
  } catch (error) {
    console.log("Erro ao Obter Usuario: " + error);
  }
}

export async function getPlaylists() {
  try {
    let token = await getAcessToken();
// - Buscar as playlists do usuario
    let resposta = await fetch(
      `https://api.spotify.com/v1/users/${user.id}/playlists`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    let respostaCorpo = await resposta.json();
    
    if(!respostaCorpo.items) return respostaCorpo.items;
    else throw respostaCorpo.error

  } catch (error) {
     throw {
         mensagem: "Erro ao buscar playlists do usuario"
     }
  }
}
