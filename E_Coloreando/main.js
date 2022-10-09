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
    p.setup = function(){
      p.createCanvas(100, 100);
      p.background(200);
    }
        
    p.draw = function() {
        if (p.mouseIsPressed) {
            p.fill(0);
        } else {
        }
        p.ellipse(p.mouseX, p.mouseY, 8, 8);
        p.ellipse(p.mouseX, p.mouseY, 8, 8);
        p.ellipse(p.mouseX, p.mouseY, 8, 8);
        p.ellipse(p.mouseX, p.mouseY, 8, 8);
        p.ellipse(p.mouseX, p.mouseY, 8, 8);
        p.ellipse(p.mouseX, p.mouseY, 8, 8);
        p.ellipse(p.mouseX, p.mouseY, 8, 8);
        p.ellipse(p.mouseX, p.mouseY, 8, 8);
    }
}
  new p5(sketch, canva);