// Luz
function encenderLuz() {
 fetch("/on").then(() => alert("Luz encendida"));
}

function apagarLuz() {
 fetch("/off").then(() => alert("Luz apagada"));
}

// Cortina
let cortinaAbierta = false;
function toggleCortina() {
 const accion = cortinaAbierta ? "cerrar" : "abrir";
 fetch(`/cortina?accion=${accion}`).then(() => {
  cortinaAbierta = !cortinaAbierta;
  document.getElementById("cortinaBtn").innerText = cortinaAbierta ? "Cerrar Cortinas" : "Abrir Cortinas";
 });
}

// Cama - Respaldo
function rotarRespaldo(grados) {
 fetch(`/rotateRespaldo?degrees=${grados}`)
  .then(r => r.text())
  .then(data => {
   document.getElementById("estadoRespaldo").innerText = `Respaldo a ${data} grados.`;
  });
}

// Cama - Piernas
function rotarPiernas(grados) {
 fetch(`/rotatePiernas?degrees=${grados}`)
  .then(r => r.text())
  .then(data => {
   document.getElementById("estadoPiernas").innerText = `Piernas a ${data} grados.`;
  });
}

// Puerta
function controlPuerta(accion) {
 fetch(`/puerta?accion=${accion}`)
  .then(response => {
   if (response.ok) {
    alert(`Puerta ${accion}ada`);
   } else {
    alert("Error al controlar la puerta");
   }
  })
  .catch(() => alert("Error de conexión"));
}

// Cargar estado inicial de la cama
window.onload = () => {
 fetch("/getRespaldoDegrees")
  .then(r => r.text())
  .then(data => document.getElementById("estadoRespaldo").innerText = `Respaldo a ${data} grados.`);

 fetch("/getPiernasDegrees")
  .then(r => r.text())
  .then(data => document.getElementById("estadoPiernas").innerText = `Piernas a ${data} grados.`);
}