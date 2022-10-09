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
      p.createCanvas(canva.clientWidth,canva.clientHeight);
      p.background(200);
      
    }
        
    p.draw = function() {
        p.strokeWeight(10);
        p.stroke(255);
        if (p.mouseIsPressed === true) {
            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        }
    }
}
  new p5(sketch, canva);