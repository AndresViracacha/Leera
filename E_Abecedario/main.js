let pictures = [
    "Camion.png",
    "Gato.png",
    "Herramientas.png",
    "jirafa.png",
    "Libelula.png",
    "muneca.png",
    "Pajaro.png",
    "Parque.png",
    "Planetas.png",
    "Play.png"
]
let exitBoton = document.getElementById("exit-boton");
let colorMenu = document.getElementById("color-menu");
let colorPicker = document.getElementById("color-picker");
let canva = document.getElementById("canva");
let colors = document.getElementsByClassName("color-box");
let colorSelect = '#B80C09';
let canColor = true;

exitBoton.addEventListener("click",()=>{
    colorMenu.style.top="-50vh";
    canColor = true;
});
colorPicker.addEventListener("click",()=>{
    colorMenu.style.top="50%";
    canColor = false;
});

for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    element.addEventListener('touchmove', function(e) {
        // grab the location of touch
        var touchLocation = e.targetTouches[0];
        
        // assign box new coordinates based on the touch.
        colorMenu.style.top="-50vh";
        canColor = true;
        element.style.position="absolute";
        /* element.style.left = touchLocation.pageX+ window.innerWidht/2 + element.clientWidth+element.clientWidth/2 + 'px';
        element.style.top = touchLocation.pageY+ window.innerHeight/2 + element.clientHeight+element.clientHeight/2 + 'px'; */
        element.style.left = touchLocation.pageX-element.clientWidth+ 'px';
        element.style.top = touchLocation.pageY+ window.innerHeight/2 + element.clientHeight+element.clientHeight/2 + 'px';
      });
    element.addEventListener('touchend', function(e) {
        // current box position.
        var x = parseInt(element.style.left);
        var y = parseInt(element.style.top);
    })
}


function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
    colorMenu.style.top="-50vh";
    canColor = true;
}
function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}
function drop(e) {
    const id = e.dataTransfer.getData('text/plain');
    console.log(id)
    const draggable = document.getElementById(id);
    console.log(draggable)
    e.target.appendChild(draggable);
    draggable.classList.remove('hide')
    if(canva.children.length==5){
        canva.style.backgroundImage="url('./img/habitacion/complete.png')";
        for (let i = 0; i <5; i++) {
            const element = canva.children[0];
            canva.removeChild(element);
        }
    }

}

canva.addEventListener('dragenter', dragEnter)
canva.addEventListener('dragover', dragOver);
canva.addEventListener('dragleave', dragLeave);
canva.addEventListener('drop',drop);


for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    element.addEventListener("dragstart",dragStart)
}














/*addEventListener('pointerdown')
  /* 
  window.onbeforeunload = function() {
    return "Dude, are you sure you want to leave? Think of the kittens!";
} */