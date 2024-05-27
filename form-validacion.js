document.addEventListener('DOMContentLoaded', function() {


document.getElementById('formulario').addEventListener('submit', function(event){
event.preventDefault();

const formulario = document.getElementById('formulario')
const nombre = document.getElementById('nombre').value.trim();
const mail = document.getElementById('mail').value.trim();
const mensaje = document.getElementById('mensaje').value.trim();

let esvalido=true;

if(!validarnombre(nombre)){
    error('Ingrese un nombre (no mayor a 30 caracteres)')
    esvalido=false;
}

if(!validarmail(mail)){
    error('El mail no es valido.')
    esvalido=false;
}

if(!validarmensaje(mensaje)){
    error('Ingrese un mensaje o duda(no mayor a 300 caracteres)')
    esvalido=false;
}

if(esvalido){
    displaySuccess(nombre, mail, mensaje);
}
});

function validarnombre(nombre){
    return nombre.length > 0 && nombre.length <=30;
}

function validarmail(mail){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
}

function validarmensaje(mensaje){
    return mensaje.length > 0 && mensaje.length <=300;

}

function error(mensaje){
    const formMensaje = document.getElementById('form-mensaje');
    const errorElemento = document.createElement('p');
    errorElemento.style.color = "green";
    errorElemento.textContent = mensaje;
    formMensaje.appendChild(errorElemento);
}

function displaySuccess(nombre, mail, mensaje) {
    const formMensaje = document.getElementById('form-mensaje');
    const n = document.createElement('div');

    const nombreElemento =document.createElement('p');
    nombreElemento.textContent= 'Nombre: ' + nombre;
    n.appendChild(nombreElemento);

    const mailElemento = document.createElement('p');
    mailElemento.textContent = 'Email: ' + mail;
    n.appendChild(mailElemento);

    const mensajeElemento = document.createElement('p');
    mensajeElemento.textContent = 'Mensaje: ' + mensaje;
    n.appendChild(mensajeElemento);

    formMensaje.appendChild(n);
    limpiarFormulario()
}

function limpiarFormulario() {
   if(esvalido=true){
    
    formulario.reset();

   }}

});