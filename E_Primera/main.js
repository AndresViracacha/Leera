// A: araña, año, arco, alambre, almidón
// B: burro, barro, banco, barón, blanco
// C: carro, camión, casa, celeste, cantar
// D: dado, delfín, dinosaurio, dardo, diez
// E: elefante, estribo, estaca, España, escoba
// F: Francia, fósforo, faraón, felino, fantasma
// G: gato, gimnasia, gris, ganso, gancho
// H: hilo, helio, huevo, harina, hormiga
// I: iglesia, institución, invitación, interno, isla
// J: jaula, Jamaica, jarrón, juntar, jinete
// K: koala, kiosco, karma, kerosene, kilo 
// L: ladrar, ladrón, lagarto, lila, largo
// M: mano, malo, manso, marrón, millón
// N: naranja, negro, ninguno, nube, nariz
// Ñ: ñuzco, ñu, ñudoso, ñacunda, ñanduti 
// O: obrero, orfebrería, oso, oscuro, octavo
// P: púrpura, pera, piso, pantalla, pulso
// Q: querer, quemar, quedar, queso
// R: ratón, rosa, rama, rito, rodar
// S: salmón, saltar, soltar, silbar, sol 
// T: tirar, tratar, timar, tocar, tomar
// U: uva, uña, ultra, unir, único
// V: velar, vela, volver, ver, vigilar
// W: Washington, watts, waffle, whisky, walkman 
// X: xilófono, xenofobia, xilografía, xiloprotector, xerófito 
// Y: Yodo, yoyo, yacía, yaga, yegua
// Z: zapato, zapatilla, zorro, zarza, zarpar 
// 134 palabras
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
        }
        if(options[i].children[0].innerText!=firstLetter){
            options[i].classList.add("incorrect")
        }
        let letter = document.getElementsByClassName("card")[i].children[0].textContent;
        voice.text = letter;
        jarvis.speak(voice);
    })
}
next.addEventListener('click',()=>{
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