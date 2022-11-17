const words=["araña","año","arco","alambre","almidón","burro","barro","banco","bus","blanco","carro","camión","casa","celeste","cantar","dado","delfín","dinosaurio","dardo","diez","elefante","estribo","estaca","España","escoba","Francia","fósforo","faraón","felino","fantasma","gato","gimnasia","gris","ganso","gancho","hilo","helio","huevo","harina","hormiga","iglesia","institución","invitación","interno","isla","jaula","Jamaica","jarrón","juntar","jinete","koala","kiosco","karma","karaoke","kilo","ladrar","ladrón","lagarto","lila","largo","mano","malo","manso","marrón","millón","naranja","negro","ninguno","nube","nariz","ñuzco","ñu","ñudoso","ñacunda","ñanduti","obrero","orfebrería","oso","oscuro","octavo","púrpura","pera","piso","pantalla","pulso","querer","quemar","quedar","queso","ratón","rosa","rama","rito","rodar"," salmón","saltar","soltar","silbar","sol","tirar","tratar","tiempo","tocar","tomar","uva","uña","ultra","unir","urbano","velar","vela","volver","ver","vigilar","Washington","watts","waffle","whisky","walkman","xilófono","xilografía","xiloprotector","xerófito","Yodo","yoyo","yacía","yaga","yegua","zapato","zapatilla","zorro","zarza","zarpar"];
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const selectWord = (selectedWord) => {
    selectedWord = words[Math.floor(Math.random()*134)]
    return selectedWord;
}
const selectLetter = () =>{
    let a = true;
    let index;
    while (a) {
        index = Math.floor(Math.random()*27);
        for (let i = 0; i < lettersUsedPrimera.length; i++) {
            if(letters[index]!= lettersUsedPrimera[i]){
                a = false;
            }
            if(letters[index]== lettersUsedPrimera[i]){
                a = true;                
                index = Math.floor(Math.random()*27);
            }
        }
    }
    lettersUsedPrimera.push(letters[index]);
    return index;
}

let word = selectWord();
let firstLetter = word[0].toUpperCase();

let voice = new SpeechSynthesisUtterance();
let jarvis = window.speechSynthesis;

let playButton = document.getElementById("playButton");
let next = document.getElementById("next");

let options = document.getElementsByClassName("card");
let positionCorrectPrimera = Math.floor(Math.random()*3);
let lettersUsedPrimera = [];

let points = 0;
let textPoints = document.getElementsByClassName("state-points")[0];
let porcent = 0;
let bar = document.getElementsByClassName("state-progress")[0];
let barText = document.getElementsByClassName("state-porcent")[0];

voice.lang = 'es';
playButton.addEventListener('click',()=>{
    voice.text = word;
    jarvis.speak(voice);
});

options[positionCorrectPrimera].children[0].innerText=firstLetter;
lettersUsedPrimera.push(firstLetter);

for (let i = 0; i < 3; i++) {
    if(options[i].children[0].innerText==""){
        options[i].children[0].innerText=letters[selectLetter()];
    }
}

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click",()=>{   
        if(options[i].children[0].innerText==firstLetter){
            options[i].classList.add("correct")
            points = puntos(true,points,textPoints);
        }
        if(options[i].children[0].innerText!=firstLetter){
            options[i].classList.add("incorrect")
            points = puntos(false,points,textPoints);
        }
        let letter = document.getElementsByClassName("card")[i].children[0].textContent;
        voice.text = letter;
        jarvis.speak(voice);
    })
}
next.addEventListener('click',()=>{
    porcent = avanzarBar(bar,porcent,barText)
    word = selectWord();
    firstLetter = word[0].toUpperCase();
    lettersUsedPrimera = [];
    positionCorrectPrimera = Math.floor(Math.random()*3);
    let next1 = document.getElementById("next").innerText;
        voice.text = next1;
        jarvis.speak(voice);
    for (let i = 0; i < 3; i++) {
        options[i].classList.remove("incorrect");
        options[i].classList.remove("correct");
        options[i].children[0].innerText="";
    }

    options[positionCorrectPrimera].children[0].innerText=firstLetter;
    lettersUsedPrimera.push(firstLetter);

    for (let i = 0; i < 3; i++) {
        if(options[i].children[0].innerText==""){
            options[i].children[0].innerText=letters[selectLetter()];
        }
    }
})