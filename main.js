let principal = document.getElementById("principal");
let gamesScreen = document.getElementById("games");
let goGames = document.getElementById("begin");
let backButton = document.getElementsByClassName("backButton")[0];
let fullscreen = document.getElementsByClassName("fullscreen")[0];
var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  backButton.style.display="none";

goGames.addEventListener("click",()=>{
    principal.style.display="none";
    gamesScreen.style.display="flex";
    backButton.style.display="block";
});

backButton.addEventListener("click",()=>{
    principal.style.display="flex";
    backButton.style.display="none";
    gamesScreen.style.display="none";
});
fullscreen.addEventListener("click",()=>{
    openFullscreen();
});