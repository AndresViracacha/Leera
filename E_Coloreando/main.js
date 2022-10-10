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
let canva = document.getElementById("canvasp5");
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

let sketch = function(p) {
    let img;
    p.setup = function(){
        p.createCanvas(canva.clientWidth,canva.clientHeight);
        p.background("#F5F4EB");
        img = p.loadImage("./img/"+pictures[Math.floor(Math.random()*pictures.length)])
    }        
    p.draw = function() {
        p.strokeWeight(10);
        p.stroke(colorSelect);
        if (p.mouseIsPressed === true && canColor) {
            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        }
        if (canva.clientWidth>canva.clientHeight) {
            p.image(img,canva.clientWidth/2-canva.clientHeight/2,0,canva.clientHeight,canva.clientHeight);
        }
        if (canva.clientWidth<canva.clientHeight) {
            p.image(img, 0, canva.clientHeight/2-canva.clientWidth/2,canva.clientWidth,canva.clientWidth);
        }
    }
}
new p5(sketch, canva);
for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    element.addEventListener("click",()=>{
        colorSelect=window.getComputedStyle( colors[i].children[0] ,null).getPropertyValue('background'); 
        colorPicker.children[1].style.backgroundColor=colorSelect
    })
}
  /* 
  window.onbeforeunload = function() {
    return "Dude, are you sure you want to leave? Think of the kittens!";
} */