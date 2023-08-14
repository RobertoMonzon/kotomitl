// =========== VALIDACIÓN DE FORMULARIO DE LOGIN ===========

// =========== VALIDACIÓN DE FORMULARIO DE LOGIN ===========
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let btnEnviar = document.getElementById("btnEnviar");

// Escucha el evento click en el botón de envío
btnEnviar.addEventListener("click", function () {
    // Se obtienen los valores de los campos del formulario
    let email = emailInput.value.trim().toLowerCase();
    let password = passwordInput.value.trim();

    // Se obtienen los registros almacenados en el localStorage
    let storedRecordJSON = localStorage.getItem('registroUsuario');
    if (!storedRecordJSON) {
        alert("No hay registros almacenados. Debes registrarte primero.");
        return;
    }
    let storedRecord = JSON.parse(storedRecordJSON);

    // Compara el email y la contraseña con los valores almacenados
    if (storedRecord.email === email && storedRecord.password === password) {
        // En caso de que las credenciales sean correctas, muestra un mensaje de éxito
        alert("Inicio de sesión exitoso");
    } else {
        // Credenciales incorrectas, muestra un mensaje de error
        alert("Correo electrónico o contraseña incorrectos");
    }

    // Limpia los campos de entrada
    emailInput.value = '';
    passwordInput.value = '';
});

// Función para validar el formato de email
function validarEmail() {
    let regexEmail = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    let email = emailInput.value.trim().toLowerCase();

    let alert_email = document.getElementById("alert_email");
    let alert_email_txt = document.getElementById("alert_email_txt");

    // Elementos de validación limpios
    emailInput.style.border = "";
    alert_email.style.display = "none";
    alert_email_txt.innerHTML = "";

    if (regexEmail.test(email)) {
        emailInput.style.border = "solid 2px green";
        return true;
    } else {
        alert_email_txt.insertAdjacentHTML("afterbegin", `E-mail incorrecto`);
        alert_email.style.display = "flex";
        emailInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

emailInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarEmail();
});

//IMPLEMENTAR ESTE TIPO DE ALERTAS AL PROGRAMA

/*
// ***********  Alerta de error  ***********
function alertWrong() {
    swal("El usuario y la contraseña no coinciden, por favor revísalos", "error");
}

// ***********  Alerta de éxito  ***********
function alertSuccess() {
    swal("Inicio de sesión exitoso", "success");
}

// ***********  Botón de envío  ***********

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    let esEmail = validarEmail();
    let esPassword = validarMensaje();

    if (esNombre && esTelefono && esEmail && esMensaje) {
        alertSuccess();

        setTimeout(() => {
            form.submit()
               
            emailInput.value = "";
            emailInput.style.border = "";
    

        }, 2000);

    } else {
        alertWrong();
    }
});
*/