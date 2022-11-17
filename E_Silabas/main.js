const CONSONANTS = ["B","C","D","F","G","H","J","K","L","M","N","Ñ","P","R","S","T","V","W","X","Y","Z"];
const VOCALS = ["a","e","i","o","u"];

const taleOne = ["a","de","la","es","u","na","ar","di","lla","a","de","la","tie","ne","mu","chas","a","mi","gas","a","li","na","es","a","mi","ga","de","a","de","la","a","li","na","es","u","na","ar","di","lla","a","ma","ble","a","li","na","re","co","ge","al","men","dras","a","li","na","com","par","te","las","al","men","dras","con","a","de","la","a","de","la","y","a","li","na","son","bue","nas","a","mi","gas"];


const buildSyllabe = () => {
    let syllabe = "";
    syllabe=CONSONANTS[Math.floor(Math.random()*CONSONANTS.length)].toUpperCase()+VOCALS[Math.floor(Math.random()*VOCALS.length)].toLowerCase();
    
    return syllabe;
}
let indexSyllabe=0;
const selectWord = (indexSyllabe) => {
    selectedWord = taleOne[indexSyllabe];
    return selectedWord;
}

let points = 0; 
let textPoints = document.getElementsByClassName("state-points")[0];

let word = selectWord(indexSyllabe);
let firstLetter = word[0].toUpperCase();

let voice = new SpeechSynthesisUtterance();
let jarvis = window.speechSynthesis;

let playButton = document.getElementById("playButton");
let next = document.getElementById("next");

let optionsSilabas = document.getElementsByClassName("card");
let positionCorrectSilabas = Math.floor(Math.random()*3);
let lettersUsedSilabas = [];

let porcent = 0;
let bar = document.getElementsByClassName("state-progress")[0];
let barText = document.getElementsByClassName("state-porcent")[0];

voice.lang = 'es';
playButton.addEventListener('click',()=>{
    voice.text = word;
    jarvis.speak(voice);
});

optionsSilabas[positionCorrectSilabas].children[0].innerText=word;
lettersUsedSilabas.push(word);

for (let i = 0; i < 3; i++) {
    if(optionsSilabas[i].children[0].innerText==""){
        optionsSilabas[i].children[0].innerText=buildSyllabe();
    }
}

for (let i = 0; i < optionsSilabas.length; i++) {
    optionsSilabas[i].addEventListener("click",()=>{   
        if(optionsSilabas[i].children[0].innerText==word.toUpperCase()){
            optionsSilabas[i].classList.add("correct")
            points = puntos(true,points,textPoints);
        }
        if(optionsSilabas[i].children[0].innerText!=word.toUpperCase()){
            optionsSilabas[i].classList.add("incorrect")
            points = puntos(false,points,textPoints);
        }        
        let letter = document.getElementsByClassName("card")[i].children[0].textContent;
        voice.text = letter;
        console.log(letter);
        if (letter == "lla"){
            voice.text= "ya";
        }
        jarvis.speak(voice);
    })
}
next.addEventListener('click',()=>{
    porcent = avanzarBar(bar,porcent,barText)

    indexSyllabe++;
    word = selectWord(indexSyllabe);
    firstLetter = word[0].toUpperCase();
    lettersUsedSilabas = [];
    positionCorrectSilabas = Math.floor(Math.random()*3);
    let next1 = document.getElementById("next").innerText;
        voice.text = next1;
        jarvis.speak(voice);
    for (let i = 0; i < 3; i++) {
        optionsSilabas[i].classList.remove("incorrect");
        optionsSilabas[i].classList.remove("correct");
        optionsSilabas[i].children[0].innerText="";
    }

    optionsSilabas[positionCorrectSilabas].children[0].innerText=word;
    lettersUsedSilabas.push(firstLetter);

    for (let i = 0; i < 3; i++) {
        if(optionsSilabas[i].children[0].innerText==""){
            optionsSilabas[i].children[0].innerText=buildSyllabe();
        }
    }
})