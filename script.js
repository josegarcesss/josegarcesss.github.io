const imagenes=['imagenes/argentina.png','imagenes/playa.jpg','imagenes/ciudad_chile.jpg','imagenes/riocristo.webp'];
let n=0;
const caroucel=document.getElementById('carousel-image');


document.getElementById('back').addEventListener('click',()=>{n = (n===0) ? imagenes.length - 1 : n-1;
    caroucel.src=imagenes[n];
});


document.getElementById('next').addEventListener('click',()=>{n = (n=== imagenes.length-1) ? 0 : n+1;
    caroucel.src=imagenes[n];
});  
