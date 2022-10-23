let tail = document.getElementById("tail");
let exercises = document.getElementsByClassName("exercise");
let cardsRelatos = document.getElementsByClassName("card");
let arrowRight = document.getElementById("arrow-right");
let arrowLeft = document.getElementById("arrow-left");
let triviaElements = [tail]
let positionIndex=0;
let nextButton = document.getElementById("next");
nextButton.style.display="none";

let answers = [
    "Ardilla","Almendra"
]

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

function arrowsDisplay() {
    if(positionIndex==0){
        arrowLeft.style.display="none"
    }
    if(triviaElements.length-1==positionIndex){
        arrowRight.style.display="none"
    }
    if(positionIndex>0){
        arrowLeft.style.display="block"
    }
    if(triviaElements.length-1>positionIndex){
        arrowRight.style.display="block"
    }
}

function verification() {
    let counter=0;
    for (let i = 0; i < cardsRelatos.length; i++) {
        const element = cardsRelatos[i];
        if(element.classList.contains("correct")){
            counter++;
        }
    }
    if(counter==2){
        nextButton.style.display="block"
    }
}

arrowsDisplay();

arrowRight.addEventListener('click',()=>{
    positionIndex++;
    tailPosition();
    triviaElements[positionIndex].style.left=0+"vw";
    triviaElements[positionIndex-1].style.left=-100+"vw";
    if(positionIndex+1>triviaElements.length){
        triviaElements[positionIndex+1].style.left=100+"vw";
    }
    arrowsDisplay();
    verification();
})

arrowLeft.addEventListener('click',()=>{
    positionIndex--;
    tailPosition();
    triviaElements[positionIndex].style.left=0+"vw";
    triviaElements[positionIndex+1].style.left=100+"vw";
    if(positionIndex-1>0){
        triviaElements[positionIndex-1].style.left=-100+"vw";
    }
    arrowsDisplay();
    verification();
})
for (let i = 0; i < cardsRelatos.length; i++) {
    const element = cardsRelatos[i];
    element.addEventListener("click",()=>{
        for (let j = 0; j < answers.length; j++) {
            const element2 = answers[j];
            console.log(element.children[1].textContent==element2)
            if(element.children[1].textContent!=element2){
                element.classList.add("incorrect")
            }else{
                element.classList.add("correct")
                element.classList.remove("incorrect")
                verification();
                break;
            }
        }
    });
}