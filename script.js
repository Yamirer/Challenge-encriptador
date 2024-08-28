var textoEscrito = document.querySelector(".texto");
var textoResultado = document.querySelector(".resultadoDesencriptado");
var campoMunecoVacio = document.querySelector(".campoMuneco");
var campoDelResultado = document.querySelector(".cajaDeResultado");
var codigoDeEncriptacion = [["e", "enter"],["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]];

var abcdario = new RegExp ("[^abcdefghijklmnñopqrstuvwxyz!¡¿?,. ]");

function btnEncriptar(){
    if(validarCaracteres(textoEscrito.value == true)){
        let textoEncriptado = funcionEncriptar (textoEscrito.value);
        textoResultado.innerHTML= textoEncriptado;
        campoMunecoVacio.style.display ="none";
        campoDelResultado.style.display = "initial";
    }
    else {
        alert("Solo se aceptan letras minusculas. Sin acentos ni caracteres especiales.");
        textoEscrito.value = "";
        textoResultado.innerHTML ="";
    }
}


function funcionEncriptar (mensajeParaEncriptar){
    for (let i = 0; i < codigoDeEncriptacion.length; i++){
        if(mensajeParaEncriptar.includes (codigoDeEncriptacion[i][0])){
            mensajeParaEncriptar = mensajeParaEncriptar.replaceAll(codigoDeEncriptacion[i][0],codigoDeEncriptacion[i][1]);
        }
    }
    console.log(mensajeParaEncriptar);
    return mensajeParaEncriptar;
}

function btnDesencriptar (){
    if(validarCaracteres(textoEscrito.value == true)){
        let textoDesencriptado = funcionDesencriptar (textoEscrito.value);
        textoResultado.innerHTML= textoDesencriptado;
        campoMunecoVacio.style.display ="none";
        campoDelResultado.style.display = "initial";
    }
    else {
        alert("Solo se aceptan letras minusculas. Sin acentos ni caracteres especiales.");
        textoEscrito.value = "";
        textoResultado.innerHTML ="";
    }
}


function funcionDesencriptar (mensajeParaDesencriptar){
    for (let i = 0; i <codigoDeEncriptacion.length; i++){
        if(mensajeParaDesencriptar.includes (codigoDeEncriptacion[i][1])){
            mensajeParaDesencriptar = mensajeParaDesencriptar.replaceAll(codigoDeEncriptacion[i][1],codigoDeEncriptacion[i][0]);
        }
    }
    console.log(mensajeParaDesencriptar);
    return mensajeParaDesencriptar;
}

function validarCaracteres(textoEscrito){
    if (abcdario.test(textoEscrito) == true){
        console.log("El texto contiene caracteres especiales");
        return false;
    }
    return true;
}

function copiarMensaje(){
    textoResultado.select();
    document.execCommand("copy");
    alert ("Texto ha sido copiado");
}
