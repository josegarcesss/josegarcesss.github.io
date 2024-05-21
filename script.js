const imagenes=['josegarcesss.github.io\imagenes\brazil.png','josegarcesss.github.io\imagenes\argentina.png','josegarcesss.github.io\imagenes\chile.png'];
let n=0;
const carrucel=document.getElementById('carousel-image');
document.getElementById('back').addEventListener('click',()=>{n==(n=0)?imagenes.length-1:n-1;
    caroucel.src=imagenes[n];});
document.getElementById('next').addEventListener('click',()=>{n==(n=0)?imagenes.length-1:n+1;
    caroucel.src=imagenes[n];});  
