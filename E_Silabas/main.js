const CONSONANTS = ["B","C","D","F","G","H","J","K","L","M","N","Ñ","P","Q","R","S","T","V","W","X","Y","Z"];
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
const selectLetter = () =>{
    let a = true;
    let index;
    while (a) {
        index = Math.floor(Math.random()*27);
        for (let i = 0; i < lettersUsed.length; i++) {
            if(letters[index]!= lettersUsed[i]){
                a = false;
            }
            if(letters[index]== lettersUsed[i]){
                a = true;
                index = Math.floor(Math.random()*27);
            }
        }
    }
    lettersUsed.push(letters[index]);
    return index;
}

let word = selectWord(indexSyllabe);
let firstLetter = word[0].toUpperCase();

let voice = new SpeechSynthesisUtterance();
let jarvis = window.speechSynthesis;

let playButton = document.getElementById("playButton");
let next = document.getElementById("next");

let options = document.getElementsByClassName("card");
let positionCorrect = Math.floor(Math.random()*3);
let lettersUsed = [];

voice.lang = 'es';
playButton.addEventListener('click',()=>{
    voice.text = word;
    jarvis.speak(voice);
});

options[positionCorrect].children[0].innerText=word;
lettersUsed.push(word);

for (let i = 0; i < 3; i++) {
    if(options[i].children[0].innerText==""){
        options[i].children[0].innerText=buildSyllabe();
    }
}

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click",()=>{   
        if(options[i].children[0].innerText==word.toUpperCase()){
            options[i].classList.add("correct")
        }
        if(options[i].children[0].innerText!=word.toUpperCase()){
            options[i].classList.add("incorrect")
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
    indexSyllabe++;
    word = selectWord(indexSyllabe);
    firstLetter = word[0].toUpperCase();
    lettersUsed = [];
    positionCorrect = Math.floor(Math.random()*3);
    let next1 = document.getElementById("next").innerText;
        voice.text = next1;
        jarvis.speak(voice);
    for (let i = 0; i < 3; i++) {
        options[i].classList.remove("incorrect");
        options[i].classList.remove("correct");
        options[i].children[0].innerText="";
    }

    options[positionCorrect].children[0].innerText=word;
    lettersUsed.push(firstLetter);

    for (let i = 0; i < 3; i++) {
        if(options[i].children[0].innerText==""){
            options[i].children[0].innerText=buildSyllabe();
        }
    }
})