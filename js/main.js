// =========== VALIDACIÓN DE FORMULARIO DE CONTACTO ===========
let nombreInput = document.getElementById("nombreInput");
let alert_nombre = document.getElementById("alert_nombre");
let alert_nombre_txt = document.getElementById("alert_nombre_txt");

let telInput = document.getElementById("telInput");
let alert_telefono = document.getElementById("alert_telefono");
let alert_telefono_txt = document.getElementById("alert_telefono_txt");

let emailInput = document.getElementById("emailInput");
let alert_email = document.getElementById("alert_email");
let alert_email_txt = document.getElementById("alert_email_txt");

let msjArea = document.getElementById("msjArea");
let alert_mensaje = document.getElementById("alert_mensaje");
let alert_mensaje_txt = document.getElementById("alert_mensaje_txt");

let btnEnviar = document.getElementById("btnEnviar");
let form = document.getElementById('form');

//   ***********  Validación de nombre  ***********

function validarNombre() {
    let regexName = /^[a-zA-Z," ",á,é,í,ó,ú,Á,É,Í,Ó,Ú,ü,Ü]{3,}$/;
    let name = nombreInput.value.trim().toUpperCase();

    //elementos de validación limpios 
    nombreInput.style.border = "";
    alert_nombre.style.display = "none";
    alert_nombre_txt.innerHTML = "";

    if (regexName.test(name)) {
        nombreInput.style.border = "solid 2px green";
        return true
    } else {
        alert_nombre_txt.insertAdjacentHTML("afterbegin", `Nombre incorrecto`);
        alert_nombre.style.display = "flex";
        nombreInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

nombreInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarNombre();
})

// ***********  Validación de teléfono  ***********

function validarTelefono() {
    let regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let phone = telInput.value.trim();

    //elementos de validación limpios
    telInput.style.border = "";
    alert_telefono.style.display = "none";
    alert_telefono_txt.innerHTML = "";

    // contador para sumar dígitos repetidos
    let sum = 0;

    //determina si los dígitos se repiten consecutivamente, lo cual más adelante sirve como control de errores.
    for (i = 0; i < phone.length; i++) {
        if (phone.charAt(i) == phone.charAt(i + 1)) {
            sum++;
        }
    }
    //valida el cumplimiento del regex y que no supere 5 dígitos repetidos
    if (regexPhone.test(phone) && !(sum > 5)) {
        telInput.style.border = "solid 2px green";
        return true
    } else {
        alert_telefono_txt.insertAdjacentHTML("afterbegin", `Teléfono incorrecto`);
        alert_telefono.style.display = "flex";
        telInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

telInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarTelefono();
})

// ***********  Validación de email  ***********

function validarEmail() {
    let regexEmail = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    let email = emailInput.value.trim().toLowerCase();

    //elementos de validación limpios
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
})

// ***********  Validación de mensaje  ***********

function validarMensaje() {
    let mensaje = msjArea.value.trim().length;

    //elementos de validación limpios
    msjArea.style.border = "";
    alert_mensaje.style.display = "none";
    alert_mensaje_txt.innerHTML = "";

    if (mensaje > 10) {
        msjArea.style.border = "solid 2px green";
        return true;
    } else {
        alert_mensaje_txt.insertAdjacentHTML("afterbegin", `Mensaje incorrecto`);
        alert_mensaje.style.display = "flex";
        msjArea.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

msjArea.addEventListener("change", function (element) {
    element.preventDefault();
    validarMensaje();
})

// ***********  Alerta de error  ***********
function alertWrong() {
    swal("Información inválida", "Por favor revisa nuevamente el formulario", "error");
}

// ***********  Alerta de éxito  ***********
function alertSuccess() {
    swal("Mensaje enviado", "Nos contactáremos muy pronto contigo", "success");
}

// ***********  Botón de envío  ***********

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    let esNombre = validarNombre();
    let esTelefono = validarTelefono();
    let esEmail = validarEmail();
    let esMensaje = validarMensaje();

    if (esNombre && esTelefono && esEmail && esMensaje) {
        alertSuccess();

        setTimeout(() => {
            form.submit()
            nombreInput.value = "";
            nombreInput.style.border = ""
    
            telInput.value = "";
            telInput.style.border = "";
    
            emailInput.value = "";
            emailInput.style.border = "";
    
            msjArea.value = "";
            msjArea.style.border = "";
        }, 2000);

    } else {
        alertWrong();
    }
});