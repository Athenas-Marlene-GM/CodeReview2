// var ya no se debe usar, debe ser reemplazado por const y let,


const formulario = document.querySelector(".formulario"); // cambié el selector por el de clase establecido en el html en la etiqueta form

formulario.onsubmit = function(e) {

  e.preventDefault(); // es prevent default para evitar que se recargue la pagina
  
  let n = formulario.elements[0]
  let ed = formulario.elements[1] // esta variable no se podia llamar e porque esa variable ya esta siendo usada para el evento
  let na = formulario.elements[2]

  let nombre = n.value
  let edad = ed.value

  let i = na.selectedIndex
  let nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

/* var botonBorrar = document.createElement("button")  //Este código genera un botón sin funcionalidad por lo que no sirve realmente
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar); */

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  var lista = document.getElementById("lista-de-invitados")

  var elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista")// el metodo correcto es add, no added
  lista.appendChild(elementoLista)

  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor 
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }
  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
  // this.parentNode.style.display = 'none';
  botonBorrar.parentNode.remove()
  }

  
}