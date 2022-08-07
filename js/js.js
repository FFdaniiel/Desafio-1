// llamar
const inputMensaje = document.querySelector('#ingresoT');
const inputResultado = document.querySelector('#resultado');
const btnEncriptar = document.querySelector('#encriptar');
const btnDesencriptar = document.querySelector('#desencriptar');
const btnCopiar = document.querySelector('#copiar');
const ocultar = document.querySelector('#ocultar');
const busquedaOc = document.querySelector('#busqueda-img');

//Encriptar
function encriptar(){
    let mensaje = inputMensaje.value;
    let mensajeEncriptado = mensaje
    .replaceAll('e','enter')
    .replaceAll('i','imes')
    .replaceAll('o','ober')
    .replaceAll('a','ai')
    .replaceAll('u','ufat');
    
    inputResultado.value = mensajeEncriptado;
    //mostrar resultado
    document.getElementById("resultado").style.display="block"
    document.getElementById("copiar").style.display="block"

    //ocultar texto
    document.getElementById("ocultar").style.display="none"
    document.getElementById("busqueda-img").style.display="none"

}

//Desencriptar
function desencriptar(){
    let mensaje = inputMensaje.value;
    let mensajeEncriptado = mensaje
    .replaceAll('enter','e')
    .replaceAll('imes','i')
    .replaceAll('ober','o')
    .replaceAll('ai','a')
    .replaceAll('ufat','u');
    
    inputResultado.value = mensajeEncriptado;

}

//funcion copiar
function copiar(){
    let mensajeEncriptado = inputResultado.value
    navigator.clipboard.writeText(mensajeEncriptado); //copia
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;


