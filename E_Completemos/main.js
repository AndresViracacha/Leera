const words = [
    ["Árbol","./img/Arbol.png"],
    ["Astronauta","./img/Astronauta.png"],
    ["Autobus","./img/Autobus.png"],
    ["Basura","./img/Basura.png"],
    ["Buhó","./img/Buhó.png"],
    ["Buscar","./img/Buscar.png"],
    ["Caja","./img/Caja.png"],
    ["Cama","./img/Cama.png"],
    ["Camara","./img/Camara.png"],
    ["Campana","./img/Campana.png"],
    ["Carretera","./img/Carretera.png"],
    ["Carro","./img/Carro.png"],
    ["Casa","./img/Casa.png"],
    ["Cometa","./img/Cometa.png"],
    ["Contento","./img/Contento.png"],
    ["Cuaderno","./img/Cuaderno.png"],
    ["Dulces","./img/Dulces.png"],
    ["Escalera","./img/Escalera.png"],
    ["Espada","./img/Espada.png"],
    ["Espejo","./img/Espejo.png"],
    ["Estrella","./img/Estrella.png"],
    ["Estuche","./img/Estuche.png"],
    ["Fantasma","./img/Fantasma.png"],
    ["Farola","./img/Farola.png"],
    ["Gafas","./img/Gafas.png"],
    ["Globo","./img/Globo.png"],
    ["Guitarra","./img/Guitarra.png"],
    ["Iguana","./img/Iguana.png"],
    ["Lápiz","./img/Lapiz.png"],
    ["Libros","./img/Libros.png"],
    ["Linterna","./img/Linterna.png"],
    ["Llavero","./img/Llavero.png"],
    ["Mariposa","./img/Mariposa.png"],
    ["Medalla","./img/Medalla.png"],
    ["Mesa","./img/Mesa.png"],
    ["Niña","./img/Niña.png"],
    ["Nube","./img/Nube.png"],
    ["Olla","./img/Olla.png"],
    ["Oso","./img/Oso.png"],
    ["Paraguas","./img/Paraguas.png"],
    ["Patinete","./img/Patinete.png"],
    ["Pelota","./img/Pelota.png"],
    ["Perro","./img/Perro.png"],
    ["Pintar","./img/Pintar.png"],
    ["Portafolio","./img/Portafolio.png"],
    ["Raqueta","./img/Raqueta.png"],
    ["Regla","./img/Regla.png"],
    ["Reloj","./img/Reloj.png"],
    ["Robot","./img/Robot.png"],
    ["Rompecabezas","./img/Rompecabezas.png"],
    ["Silla","./img/Silla.png"],
    ["Sombrero","./img/Sombrero.png"],
    ["Teléfono","./img/Telefono.png"],
    ["Televisión","./img/Television.png"],
    ["Tijeras","./img/Tijeras.png"],
    ["Tiranosaurio","./img/Tiranosaurio.png"],
    ["Tren","./img/Tren.png"],
    ["Vela","./img/Vela.png"],
    ["Zapato","./img/Zapato.png"]
]

let voice = new SpeechSynthesisUtterance();
let jarvis = window.speechSynthesis;

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let imageRoute = "";

let image = document.getElementById("image");
let wordImage = document.getElementById("word");

let positionCorrect = Math.floor(Math.random()*3);
let lettersUsed = [];

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
const selectWord = () => {
    let item = words[Math.floor(Math.random()*60)]
    selectedWord = item[0];
    imageRoute = item[1];
    return {selectedWord,imageRoute};
}
const setCharAt = (str,index,chr) =>{
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
let itemSelected = selectWord();
let charSelected = Math.floor(Math.random()*itemSelected.selectedWord.length)
let wordSelected = setCharAt(itemSelected.selectedWord,charSelected,"_");

let cards = document.getElementsByClassName("card");
let playButton = document.getElementById("playButton");
let next = document.getElementById("next");
var elem = document.documentElement;

for (let i = 0; i < cards.length; i++) {
    cards[i].children[0].innerHTML=letters[Math.floor(Math.random()*letters.length)];
}

cards[positionCorrect].children[0].innerText=selectedWord[charSelected].toUpperCase();
lettersUsed.push(selectedWord[charSelected].toUpperCase());
for (let i = 0; i < 3; i++) {
    if(cards[i].children[0].innerText==""){
        cards[i].children[0].innerText=letters[selectLetter()];
    }
}

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click",()=>{   
        if(cards[i].children[0].innerText==selectedWord[charSelected].toUpperCase()){
            cards[i].classList.add("correct")
        }
        if(cards[i].children[0].innerText!=selectedWord[charSelected].toUpperCase()){
            cards[i].classList.add("incorrect")
        }
        let letter = document.getElementsByClassName("card")[i].children[0].textContent;
        voice.text = letter;
        jarvis.speak(voice); 
    })
}

image.src=itemSelected.imageRoute;
wordImage.innerText=wordSelected;

voice.lang = 'es';
playButton.addEventListener('click',()=>{
    voice.text = itemSelected.selectedWord;
    jarvis.speak(voice);
    openFullscreen();
});

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    }

next.addEventListener('click',()=>{
    lettersUsed = [];
    positionCorrect = Math.floor(Math.random()*3);
    let next1 = document.getElementById("next").innerText;
        voice.text = next1;
        jarvis.speak(voice);
    for (let i = 0; i < 3; i++) {
        cards[i].classList.remove("incorrect");
        cards[i].classList.remove("correct");
        cards[i].children[0].innerText="";
    }
    itemSelected = selectWord();
    charSelected = Math.floor(Math.random()*itemSelected.selectedWord.length);
    wordSelected = setCharAt(itemSelected.selectedWord,charSelected,"_");
    for (let i = 0; i < cards.length; i++) {
        cards[i].children[0].innerHTML=letters[Math.floor(Math.random()*letters.length)];
    }
    cards[positionCorrect].children[0].innerText=selectedWord[charSelected].toUpperCase();
    lettersUsed.push(selectedWord[charSelected].toUpperCase());
    for (let i = 0; i < 3; i++) {
        if(cards[i].children[0].innerText==""){
            cards[i].children[0].innerText=letters[selectLetter()];
        }
    }
    image.src=itemSelected.imageRoute;
    wordImage.innerText=wordSelected;
})




/*
//////////////////////////////////////////////////////////
let word = itemSelected;
let firstLetter = word[0].toUpperCase();

let voice = new SpeechSynthesisUtterance();
let jarvis = window.speechSynthesis;

let playButton = document.getElementById("playButton");
let next = document.getElementById("next");

let options = document.getElementsByClassName("card");


voice.lang = 'es';
playButton.addEventListener('click',()=>{
    voice.text = word;
    jarvis.speak(voice);
});




next.addEventListener('click',()=>{
    word = selectWord();
    firstLetter = word[0].toUpperCase();
    lettersUsed = [];
    for (let i = 0; i < 3; i++) {
        options[i].classList.remove("incorrect");
        options[i].classList.remove("correct");
        options[i].children[0].innerText="";
    }

    options[positionCorrect].children[0].innerText=firstLetter;
    lettersUsed.push(firstLetter);

    for (let i = 0; i < 3; i++) {
        if(options[i].children[0].innerText==""){
            options[i].children[0].innerText=letters[selectLetter()];
        }
    }
}) */