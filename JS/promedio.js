const nombreInput = document.getElementById("usuario");
const formulario = document.getElementById("formulario");
const idInput = document.getElementById("id");
const nombreParrafo = document.getElementById("nombre");
const promedioParrafo = document.getElementById("promedio");
const aprobadoParrafo = document.getElementById("aprobado");
const botonIngresar = document.getElementById("ingresar");
const tbody = document.getElementById("tbody");
const botonCalcular = document.getElementById("calcular");
const notas = [];

function ingresoNota(click){
  const notaInput = document.getElementById("nota");
  const nota = notaInput.value;
  const esValido = validar(nota);

  if (esValido){
    notas.push(parseInt(nota));
    // Cuando se ingresa una nota reiniciamos el valor 
    // del input en un espacio vacio para que la persona
    // pueda ingresar otro dato
    notaInput.value = "";
    // El atributo disabled lo que hace es desactivar el boton
    // removeAttribute lo que hace es quitar el estado del boton 
    // lo que hace que el boton se pueda usar
    botonCalcular.removeAttribute("disabled")
    const nombreNota = `Nota ${notas.length}`;
    agregarNota(nombreNota, nota);
  } else {
    alert("Dato incorrecto");
  }
}

function agregarNota(nombreNota, nota){

  tbody.innerHTML += `
  <tr>
    <td>${nombreNota}</td>
    <td>${nota}</td>
  </tr>
  `

}

botonIngresar.addEventListener("click", ingresoNota);

function calcular(evento){
    evento.preventDefault()

    mostrarResultado();
}

formulario.addEventListener("submit", calcular);


function validar(nota){
  let validacion = true;
  
  if ((nota < 0) || (nota > 10) || !nota){
    validacion = false;
  } 
  return validacion;
}

function calcularPromedio(array){
  let suma = 0;
  let promedioLista = 0;
  array.forEach((elemento) => {
    suma += elemento;
  })
  promedioLista = Math.floor(suma / array.length) 
  return promedioLista;
}

function mostrarResultado(){
  const promedio = calcularPromedio(notas);
  const usuarioNombre = nombreInput.value;
  const idUsuario = idInput.value;

  if (promedio >= 6){
    nombreParrafo.textContent = `${usuarioNombre} con identificación ${idUsuario}`;
    promedioParrafo.textContent = `Su promedio es: ${promedio}`;
    aprobadoParrafo.textContent = "Ha aprobado";
  } else {
    nombreParrafo.textContent = `${usuarioNombre} con identificación ${idUsuario}`;
    promedioParrafo.textContent = `Su promedio es: ${promedio}`;
    aprobadoParrafo.textContent = "No ha aprobado";
  }
}

