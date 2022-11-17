const wordsCompletemos = [
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

const lettersCompletemos = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let imageRoute = "";

let image = document.getElementById("image");
let wordImage = document.getElementById("word");

let positionCorrect = Math.floor(Math.random()*3);
let lettersUsed = [];

let points = 0;

const selectLetter = () =>{
    let a = true;
    let index;
    while (a) {
        index = Math.floor(Math.random()*27);
        for (let i = 0; i < lettersUsed.length; i++) {
            if(lettersCompletemos[index]!= lettersUsed[i]){
                a = false;
            }
            if(lettersCompletemos[index]== lettersUsed[i]){
                a = true;                
                index = Math.floor(Math.random()*27);
            }            
        }
    }
    lettersUsed.push(lettersCompletemos[index]);
    return index;
}
const selectWord = () => {
    let item = wordsCompletemos[Math.floor(Math.random()*59)]
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

let textPoints = document.getElementsByClassName("state-points")[0];

let porcent = 0;
let bar = document.getElementsByClassName("state-progress")[0];
let barText = document.getElementsByClassName("state-porcent")[0];

for (let i = 0; i < cards.length; i++) {
    cards[i].children[0].innerHTML=lettersCompletemos[Math.floor(Math.random()*lettersCompletemos.length)];
}

cards[positionCorrect].children[0].innerText=selectedWord[charSelected].toUpperCase();
lettersUsed.push(selectedWord[charSelected].toUpperCase());
for (let i = 0; i < 3; i++) {
    if(cards[i].children[0].innerText==""){
        cards[i].children[0].innerText=lettersCompletemos[selectLetter()];
    }
}

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click",()=>{   
        if(cards[i].children[0].innerText==selectedWord[charSelected].toUpperCase()){
            cards[i].classList.add("correct")
            points = puntos(true,points,textPoints);
        }
        if(cards[i].children[0].innerText!=selectedWord[charSelected].toUpperCase()){
            cards[i].classList.add("incorrect")
            points = puntos(false,points,textPoints);
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
});

next.addEventListener('click',()=>{
    porcent = avanzarBar(bar,porcent,barText)

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
        cards[i].children[0].innerHTML=lettersCompletemos[Math.floor(Math.random()*lettersCompletemos.length)];
    }
    cards[positionCorrect].children[0].innerText=selectedWord[charSelected].toUpperCase();
    lettersUsed.push(selectedWord[charSelected].toUpperCase());
    for (let i = 0; i < 3; i++) {
        if(cards[i].children[0].innerText==""){
            cards[i].children[0].innerText=lettersCompletemos[selectLetter()];
        }
    }
    image.src=itemSelected.imageRoute;
    wordImage.innerText=wordSelected;
})
