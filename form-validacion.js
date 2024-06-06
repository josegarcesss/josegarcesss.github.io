document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('formulario').addEventListener('submit', function(event){
event.preventDefault();

const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre').value.trim();
const mail = document.getElementById('mail').value.trim();
const sucursal = document.getElementById('sucursal').value.trim();
const mensaje = document.getElementById('mensaje').value.trim();

limpiarErrores();
limpiarMensajes();
let esvalido=true;
if(!validarnombre(nombre)){
    error('Ingrese un nombre (no mayor a 30 caracteres)')
    esvalido=false;
}

if(!validarmail(mail)){
    error('El mail no es valido.')
    esvalido=false;
}

if(!validarsucursal(sucursal)){
    error('Elija una de las 3 sucursales');
    esvalido=false;
}

if(!validarmensaje(mensaje)){
    error('Ingrese un mensaje o duda(no mayor a 300 caracteres)')
    esvalido=false;
}

if(esvalido){
    displaySuccess(nombre, mail, sucursal, mensaje);
    limpiarFormulario();
}
});

function validarnombre(nombre){
    return nombre.length > 0 && nombre.length <=30;
}

function validarmail(mail){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
}

function validarsucursal(sucursal){
    const sucursalNum= parseInt(sucursal);
    return sucursalNum >=1 && sucursalNum<=3;
}

function validarmensaje(mensaje){
    return mensaje.length > 0 && mensaje.length <=300;

}

function error(mensaje) {
    const erroresDiv = document.getElementById('errores');
    const errorElemento = document.createElement('p');
    errorElemento.style.color = "white";
    errorElemento.textContent = mensaje;
    erroresDiv.appendChild(errorElemento);
}

function displaySuccess(nombre, mail, sucursal, mensaje) {
    const formMensaje = document.getElementById('form-mensaje');
    limpiarErrores()
    formMensaje.innerHTML = ''; // Limpiar mensajes anteriores

    const n = document.createElement('div');

    const nombreElemento = document.createElement('p');
    nombreElemento.textContent = 'Nombre: ' + nombre;
    n.appendChild(nombreElemento);
    const mailElemento = document.createElement('p');
    mailElemento.textContent = 'Email: ' + mail;
    n.appendChild(mailElemento);

    const sucursalElemento = document.createElement('p');
    sucursalElemento.textContent = 'Sucursal: ' + sucursal;
    n.appendChild(sucursalElemento);

    const mensajeElemento = document.createElement('p');
    mensajeElemento.textContent = 'Mensaje: ' + mensaje;
    n.appendChild(mensajeElemento);

    formMensaje.appendChild(n);
}

function limpiarFormulario(){
    document.getElementById('formulario').reset();
}

function limpiarErrores() {
    document.getElementById('errores').innerHTML=''; 
}

function limpiarMensajes(){
    document.getElementById('form-mensaje').innerHTML='';
}
});