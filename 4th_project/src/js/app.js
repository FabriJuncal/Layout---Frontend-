/** Plugin Js - Scroll Reveal **/

window.sr = ScrollReveal(); // Llamos la funcon y la declaramos a una variable que es el objeto de la pantalla

sr.reveal('.navbar', {
    duration: 2000, // Duracion de la Animacion en milisegundos
    origin: 'bottom', // Direccion donde empieza la Animacion
}); 

sr.reveal('.header-content-left', {
    duration: 2000, // Duracion de la Animacion en milisegundos
    origin: 'top', // Direccion donde empieza la Animacion
    distance: '100px', // Distancia que se va a recorrer en la Animacion
    reset: true // Si queremos que se resetee la animacion
});

sr.reveal('.header-content-right', {
    duration: 2000, // Duracion de la Animacion en milisegundos
    origin: 'right', // Direccion donde empieza la Animacion
    distance: '100px', // Distancia que se va a recorrer en la Animacion
    reset: true // Si queremos que se resetee la animacion
}); 

sr.reveal('.header-btn', {
    duration: 2000, // Duracion de la Animacion en milisegundos
    origin: 'bottom', // Direccion donde empieza la Animacion
    delay: 1100,  // Duracion de la tardanza de la Animacion en milisegundos
    reset: true // Si queremos que se resetee la animacion
});

sr.reveal('#testimonial', {
    duration: 2000, // Duracion de la Animacion en milisegundos
    origin: 'left', // Direccion donde empieza la Animacion
    viewFactor: 0.2, // Especifica el tamaño del elemento que se tiene que ver para que realice el efecto, en este ejemplo seria del  0.2 = 20%
    reset: true // Si queremos que se resetee la animacion
});

sr.reveal('.info-left', {
    duration: 2000, // Duracion de la Animacion en milisegundos
    origin: 'left', // Direccion donde empieza la Animacion
    distance: '100px', // Distancia que se va a recorrer en la Animacion
    reset: true // Si queremos que se resetee la animacion
});

sr.reveal('.info-right', {
    duration: 2000, // Duracion de la Animacion en milisegundos
    origin: 'right', // Direccion donde empieza la Animacion
    distance: '100px', // Distancia que se va a recorrer en la Animacion
    reset: true // Si queremos que se resetee la animacion
});

sr.reveal('.card', {
    duration: 2000, // Duracion de la Animacion en milisegundos
    origin: 'right', // Direccion donde empieza la Animacion
    distance: '100px', // Distancia que se va a recorrer en la Animacion
    reset: true // Si queremos que se resetee la animacion
});

//==========================================================================================================================================
/** Smoth Scrolling **/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });