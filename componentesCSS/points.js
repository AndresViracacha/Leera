function puntos(correcto, puntos,texto) {
    if(correcto){
        puntos+=100;
        console.log("yes")
    }
    if (!correcto) {
        if((puntos-100)<0){
            puntos=0
        }
        else{
            puntos-=100
        }
    }
    texto.textContent= "Puntos: " + puntos;
    return puntos;
}

function avanzarBar(bar,porcent,textPorcent) {
    porcent+=10;
    if(porcent>=100){
        porcent=100
    }
    bar.style.width=porcent+"%"
    textPorcent.textContent=porcent+"%"
    return porcent;
}