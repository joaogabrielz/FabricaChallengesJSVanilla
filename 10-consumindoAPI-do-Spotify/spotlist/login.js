function login(){
    location.href = "https://accounts.spotify.com/authorize?response_type=code&client_id=77083608262b474c97ad90d926158597&redirect_uri=http://localhost:5500/home.html&scope=playlist-modify-private playlist-modify-public playlist-read-collaborative playlist-read-private" 
    //QueryString "?..response_type=code&client_id=770.."
    //Retorna na URL(autorization code)
}
document.getElementById("btnEntrar").onclick = login;


