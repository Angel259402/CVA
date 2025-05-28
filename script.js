window.addEventListener('load', () => {
  const ruta = window.location.pathname;

  if (ruta.includes("index.html") || ruta === "/" || ruta === "/mi-sitio/" || ruta === "/mi-sitio/index.html") {
    alert("¡Bienvenido a la página principal!");
  } else if (ruta.includes("desempeño academico.html")) {
    alert("¡Bienvenido a la sección de desempeño académico!");
  } else if (ruta.includes("intereses.html")) {
    alert("¡Explora mis intereses!");
  } else if (ruta.includes("proyectos.html")) {
    alert("Conoce mis proyectos personales.");
  } else {
    alert("¡Bienvenido!");
  }
});

console.log("El script se está ejecutando");
const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
    }
})


const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
}

window.addEventListener('load', () => {
  if (!localStorage.getItem("mensajeMostrado")) {
    alert("¡Bienvenido a mi página web!");
    localStorage.setItem("mensajeMostrado", "true");
  }
});