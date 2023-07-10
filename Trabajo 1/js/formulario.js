let btnRegistro = document.querySelector('#botonRegistro');
let campoNombre = document.querySelector('#nombre');
let campoCorreo = document.querySelector('#correo');
let campoContrasena = document.querySelector('#contrasena1');
let campoContrasena2 = document.querySelector('#contrasena2');

let nombre = false;
let correo = false;
let contrasena = false;
let contrasenaConfirmacion = false;

btnRegistro.addEventListener('click', function(e){
    let validacionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let validacionContrasena = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;  

    if (campoNombre.value.length > 10) {
        nombre = true;
    } else {
        alert("Ingresa al menos un nombre y apellido válidos.");
    };

    if (validacionCorreo.test(campoCorreo.value)) {
        correo = true;
    } else {
        alert("Ingresa un correo electrónico válido.")
    };

    if (validacionContrasena.test(campoContrasena.value)) {
        contrasena = true;
    } else { 
        alert("Ingresa una contraseña válida, debe contener a menos una letra de la A a la Z, un número y un carácter especial.");
    };

    if (campoContrasena.value === campoContrasena2.value) {
        contrasenaConfirmacion = true;
    } else {
        alert("Las contraseñas no coinciden.");
    };

    if(nombre == true && correo == true && contrasena == true && contrasenaConfirmacion == true) {
        console.log("Usuario: " + campoNombre.value + " Correo: " + campoCorreo.value);
        alert("Registro compleado!");
        window.location.href = "./formulario.html";
        window.open("./formulario");
    };
});