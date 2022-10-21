var elem = document.documentElement;
var itsFullScreen = false;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

let modalMenu = document.getElementById("modal-menu");
let modalHelp = document.getElementById("help-menu");
let exitModalMenu = document.getElementById("exit-modal-menu");
let exitModalHelp = document.getElementById("exit-boton-help");
let buttonMenu = document.getElementsByClassName("button-menu")[0];
let buttonHelp = document.getElementsByClassName("button-help")[0];
let buttonReset = document.getElementsByClassName("modal-buttons")[0].children[1];
let fullscreenOption = document.getElementsByClassName("fullscreen-option")[0].children[2].children[0];

buttonMenu.addEventListener("click",()=>{
  modalMenu.style.top="50%";
})
buttonHelp.addEventListener("click",()=>{
  modalHelp.style.top="50%";
})
exitModalMenu.addEventListener("click",()=>{
  modalMenu.style.top="-50%";
})
exitModalHelp.addEventListener("click",()=>{
  modalHelp.style.top="-50%";
})
buttonReset.addEventListener("click",()=>{
  location.reload();
})
fullscreenOption.addEventListener("click",()=>{
    if (itsFullScreen) {
        closeFullscreen();
        itsFullScreen=false;
        fullscreenOption.style.left="-2px";
        fullscreenOption.style.backgroundColor="#F5F4EB";
        fullscreenOption.children[0].textContent="NO"
        fullscreenOption.children[0].style.color="#292929"

    }else{
        openFullscreen();
        itsFullScreen=true;
        fullscreenOption.style.left="23px";
        fullscreenOption.style.backgroundColor="#F79824";
        fullscreenOption.children[0].textContent="SI"
        fullscreenOption.children[0].style.color="#F5F4EB"
    }
})