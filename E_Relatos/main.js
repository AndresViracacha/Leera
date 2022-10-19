let tail = document.getElementById("tail");
let exercises = document.getElementsByClassName("exercise");
let arrowRight = document.getElementById("arrow-right");
let arrowLeft = document.getElementById("arrow-left");
let triviaElements = [tail]
let positionIndex=0;

for (let i = 0; i < exercises.length; i++) {
    let distance = 200;
    const element = exercises[i];
    element.style.left=distance+distance*i+"vw";
    triviaElements.push(element);
}
function tailPosition() {
    if(positionIndex>0){
        tail.style.left=-100+"vw";
    }
    if(positionIndex==0){
        tail.style.left=0+"vw";
    }
}

arrowRight.addEventListener('click',()=>{
    positionIndex++;
    tailPosition();
    triviaElements[positionIndex].style.left=0+"vw";
})
arrowLeft.addEventListener('click',()=>{
    positionIndex--;
    tailPosition(); 
})