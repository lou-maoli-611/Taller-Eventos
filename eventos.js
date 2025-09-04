//Solución
function saludar(e) {
  alert("Hola!");
  e.stopPropagation(); // evita que el clic suba al div
}

//Manejador de eventos para el div
const div = document.getElementById("contenedor");

div.addEventListener("click", () => {
  alert("Hola! Soy el div");
});