let exitBoton = document.getElementById("exit-boton");
let colorMenu = document.getElementById("color-menu");
let colorPicker = document.getElementById("color-picker");
let canva = document.getElementById("canvasp5");
exitBoton.addEventListener("click",()=>{
    colorMenu.style.top="-50vh"
});
colorPicker.addEventListener("click",()=>{
    colorMenu.style.top="50%"
});

let sketch = function(p) {
    let img;
    let aspectRatioImg
    p.setup = function(){
        p.createCanvas(canva.clientWidth,canva.clientHeight);
        p.background(200);
        img = p.loadImage("./img/Camion.png")
    }        
    p.draw = function() {
        p.strokeWeight(10);
        p.stroke(255);
        if (p.mouseIsPressed === true) {
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
  /* 
  window.onbeforeunload = function() {
    return "Dude, are you sure you want to leave? Think of the kittens!";
} */