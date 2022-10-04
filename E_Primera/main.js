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
// 135 palabras

const words=["araña","año","arco","alambre","almidón","burro","barro","banco","barón","blanco","carro","camión","casa","celeste","cantar","dado","delfín","dinosaurio","dardo","diez","elefante","estribo","estaca","España","escoba","Francia","fósforo","faraón","felino","fantasma","gato","gimnasia","gris","ganso","gancho","hilo","helio","huevo","harina","hormiga","iglesia","institución","invitación","interno","isla","jaula","Jamaica","jarrón","juntar","jinete","koala","kiosco","karma","kerosene","kilo","ladrar","ladrón","lagarto","lila","largo","mano","malo","manso","marrón","millón","naranja","negro","ninguno","nube","nariz","ñuzco","ñu","ñudoso","ñacunda","ñanduti","obrero","orfebrería","oso","oscuro","octavo","púrpura","pera","piso","pantalla","pulso","querer","quemar","quedar","queso","ratón","rosa","rama","rito","rodar"," salmón","saltar","soltar","silbar","sol","tirar","tratar","timar","tocar","tomar","uva","uña","ultra","unir","único","velar","vela","volver","ver","vigilar","Washington","watts","waffle","whisky","walkman","xilófono","xenofobia","xilografía","xiloprotector","xerófito","Yodo","yoyo","yacía","yaga","yegua","zapato","zapatilla","zorro","zarza","zarpar"];
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
// Interface de la API
let voice = new SpeechSynthesisUtterance();
// Objeto de la API
let jarvis = window.speechSynthesis;

voice.lang = 'es';

const selectWord = (selectedWord) => {
selectedWord = words[Math.floor(Math.random()*134)]
return selectedWord;
}

let word = selectWord();

let firstLetter = word[0];


 
let playButton = document.getElementById("playButton");
playButton.addEventListener('click',()=>{
voice.text = word;
jarvis.speak(voice);
console.log("reproduciendo voz");
})
let options = document.getElementsByClassName("card");
options[0].children[0].innerText=letters[Math.floor(Math.random()*27)];
options[1].children[0].innerText=letters[Math.floor(Math.random()*27)];
options[2].children[0].innerText=letters[Math.floor(Math.random()*27)];
options[Math.floor(Math.random()*3)].children[0].innerText=firstLetter.toUpperCase();

for (let i = 0; i < options.length; i++) {
    if (condition) {
        
    }
}





























const audit = ()=>{
    for (let i = 0; i < 2; i++) {
        for (let k = 0; k <= 2; k++) {
            if(options[i].children[0].innerText==options[k].children[0].innerText && i != k){
                console.log("sadfsadfsadfa");
                // Se repitio
                if(options[i].children[0].innerText==firstLetter.toUpperCase()){
                    options[k].children[0].innerText = letters[Math.floor(Math.random()*27)];
                }else if(options[k].children[0].innerText==firstLetter.toUpperCase()){
                    options[i].children[0].innerText = letters[Math.floor(Math.random()*27)];
                }

                return true;
            }
        }
    }
    return false;
}