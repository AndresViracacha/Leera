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
let eraser = document.getElementById("eraser");
let colorMenu = document.getElementById("color-menu");
let colorPicker = document.getElementById("color-picker");
let canva = document.getElementById("canvasp5");
let colors = document.getElementsByClassName("color-box");
let colorSelect = '#B80C09';
let canColor = true;
let widthBrush = 20;

let voice = new SpeechSynthesisUtterance();
let jarvis = window.speechSynthesis;

colorPicker.children[1].style.backgroundColor=colorSelect;

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
        p.strokeWeight(widthBrush);
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
window.addEventListener("resize",()=>{
    canva.removeChild(canva.children[0])
    new p5(sketch, canva);
})
voice.lang = 'es';
new p5(sketch, canva);
for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    element.addEventListener("click",()=>{
        colorSelect=window.getComputedStyle( colors[i].children[0] ,null).getPropertyValue('background-color'); 
        colorPicker.children[1].style.backgroundColor=colorSelect
        voice.text = element.children[1].textContent;
        jarvis.speak(voice);
    })
}
eraser.addEventListener("click",()=>{
    colorSelect="#F5F4EB";
})
let widthBrushX = document.getElementById("widthBrushX");
let widthBrushM = document.getElementById("widthBrushM");
let widthBrushS = document.getElementById("widthBrushS");
widthBrushX.addEventListener("click",()=>{
    widthBrush=30
})
widthBrushM.addEventListener("click",()=>{
    widthBrush=20
})
widthBrushS.addEventListener("click",()=>{
    widthBrush=10
})