let principal = document.getElementById("principal");
let gamesScreen = document.getElementById("games");
let goGames = document.getElementById("begin");

goGames.addEventListener("click",()=>{
    principal.style.display="none";
    gamesScreen.style.display="flex"
});