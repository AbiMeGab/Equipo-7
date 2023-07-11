document.addEventListener(function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
    document.getElementById('enviarBtn').addEventListener('click', function(event) {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
      alert('Enviado!');
    document.getElementById('limpiarBtn').addEventListener('click', function(event) {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
    });
  });
  