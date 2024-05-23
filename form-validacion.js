document.getElementById('formulario').addEventListener('submit', function(event){
Event.preventDefault();

const formulario=dosument.getElementById('fomulario')
formulario.innerHTML='';

const nombre=document.getElementById('nombre').ariaValueMax.trim();
const mail=document.getElementById('mail').ariaValueMax.trim();
const mensaje=document.getElementById('mensaje').ariaValueMax.trim();

let esvalido=true

if(!validarnombre(nombre)){
    displayError('Ingrese un nombre (no mayor a 30 caracteres)')
    esvalido=false;
}

if(!validarmail(mail)){
    displayError('El mail no es valido.)')
    esvalido=false;
}

if(!validarmensaje(mensaje)){
    displayError('Ingrese un mensaje o duda(no mayor a 300 caracteres)')
    esvalido=false;
}

if(esvalido){
    displaSucces(nombre,mail,mensaje);
}
});

function validarnombre(nombre){
    return nombre.length > 0 && nombre.length <=30;
}

function validarmail(mail){
    const emailRegex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';
    return emailRegex.test(mail);
}

function validarmensaje(mensaje){
    return mensaje.length > 0 && mensaje.length <=300;

}

function error(mensaje){
    const formMensaje =document.getElementById('form-mensaje');
    const errorElement =document.getElementById('p');
    errorElement.style.color="red";
    errorElement.textContent=mensaje;
    formMensaje.appendChild(errorElement);
}

function displaySucces(nombre, mail, mensaje){
    const formMensaje =document.getElementById('form-mensaje');
    const succesElement=document.createElement('div');

    const nombreElemento =document.createElement('p');
    nombreElemento.textContent='Nombre: ${name}';
    succesElement.appendChild(mensajeElemento);

    const mailElemento = document.createElement('p');
    mailElemento.textContent = 'Email: ${email}';
    successElement.appendChild(mailElemento);

    const mensajeElemento = document.createElement('p');
    mensajeElemento.textContent = 'Mensaje: ${message}';
    successElement.appendChild(mensajeElemento);

    form-mensaje.appendChild(successElement);
}
