// =========== VALIDACIÓN DE FORMULARIO DE REGISTRO ===========
// Obtén los elementos del formulario
const form = document.getElementById('form');
/*const nombreInput = document.getElementById('nombreInput');
const apellidoInput = document.getElementById('apellidoInput');
const telInput = document.getElementById('telInput');
const emailInput = document.getElementById('emailInput');
const emailInputVal = document.getElementById('emailInputVal');
const passwordInput = document.getElementById('passwordInput');
const passwordInputVal = document.getElementById('passwordInputVal');
*/
// Funciones de validación

// contador para sumar dígitos o caracteres repetidos

function repetidos(elemento, repeticiones) {
    let sum = 0;
    for (i = 0; i < elemento.length; i++) {
        if (elemento.charAt(i) == elemento.charAt(i + 1))
            sum++;
    }
    return repeticiones>=sum;
}

//   ***********  nombre  ***********
let nombreInput = document.getElementById("nombreInput");

function validarNombre() {
    let regexName = /^[a-zA-Z," ",á,é,í,ó,ú,Á,É,Í,Ó,Ú,ü,Ü,ñ,Ñ]{3,50}$/;
    let name = nombreInput.value.trim().toUpperCase();

    let alert_nombre = document.getElementById("alert_nombre");
    let alert_nombre_txt = document.getElementById("alert_nombre_txt");

    //elementos de validación limpios
    nombreInput.style.border = "";
    alert_nombre.style.display = "none";
    alert_nombre_txt.innerHTML = "";

    if (regexName.test(name) && repetidos(name,2)) {
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

//   ***********  Validación de apellido  ***********
let apellidoInput = document.getElementById("apellidoInput");

function validarApellido() {
    let regexName = /^[a-zA-Z," ",á,é,í,ó,ú,Á,É,Í,Ó,Ú,ü,Ü,ñ,Ñ,']{3,50}$/;
    let name = apellidoInput.value.trim().toUpperCase();

    let alert_apellido = document.getElementById("alert_apellido");
    let alert_apellido_txt = document.getElementById("alert_apellido_txt");

    //elementos de validación limpios
    apellidoInput.style.border = "";
    alert_apellido.style.display = "none";
    alert_apellido_txt.innerHTML = "";

    if (regexName.test(name) && repetidos(name,2)) {
        apellidoInput.style.border = "solid 2px green";
        return true
    } else {
        alert_apellido_txt.insertAdjacentHTML("afterbegin", `Apellido incorrecto`);
        alert_apellido.style.display = "flex";
        apellidoInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

apellidoInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarApellido();
})
// ***********  Validación de teléfono  ***********
let telInput = document.getElementById("telInput");

function validarTelefono() {
    let regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let phone = telInput.value.trim();

    let alert_telefono = document.getElementById("alert_telefono");
    let alert_telefono_txt = document.getElementById("alert_telefono_txt");

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

// ***********  Email  ***********
let emailInput = document.getElementById("emailInput");

function validarEmail() {
    let regexEmail = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    let email = emailInput.value.trim().toLowerCase();

    let alert_email = document.getElementById("alert_email");
    let alert_email_txt = document.getElementById("alert_email_txt");

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
// ***********  Validación de Email  ***********
let emailInputVal = document.getElementById("emailInputVal");

function validarEmail2() {
    let email2 = emailInputVal.value.trim().toLowerCase();
    let email1 = emailInput.value.trim().toLowerCase();

    let alert_emailVal = document.getElementById("alert_emailVal");
    let alert_emailVal_txt = document.getElementById("alert_emailVal_txt");

    //elementos de validación limpios
    emailInputVal.style.border = "";
    alert_emailVal.style.display = "none";
    alert_emailVal_txt.innerHTML = "";

    if (email1 === email2) {
        emailInputVal.style.border = "solid 2px green";
        return true;
    } else {
        alert_emailVal_txt.insertAdjacentHTML("afterbegin", `No coincide e-mail`);
        alert_emailVal.style.display = "flex";
        emailInputVal.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

emailInputVal.addEventListener("change", function (element) {
    element.preventDefault();
    validarEmail2();
})

// ***********  CONTRASEÑA  ***********
let passwordInput = document.getElementById("passwordInput");

function validarpassword() {
    let regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&-_/]{8,15}/;
    let password = passwordInput.value.trim();

    let alert_password = document.getElementById("alert_password");
    let alert_password_txt = document.getElementById("alert_password_txt");

    //elementos de validación limpios
    passwordInput.style.border = "";
    alert_password.style.display = "none";
    alert_password_txt.innerHTML = "";

    if (regexpassword.test(password)) {
        passwordInput.style.border = "solid 2px green";
        return true;
    } else {
        alert_password_txt.insertAdjacentHTML("afterbegin", `Contraseña incorrecta`);
        alert_password.style.display = "flex";
        passwordInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}
// ***********  Validación de Contraseña  ***********
let passwordInputVal = document.getElementById("passwordInputVal");

function validarpassword2() {
    let Contraseña2 = passwordInputVal.value.trim();
    let Contraseña1 = passwordInput.value.trim();

    let alert_passwordVal = document.getElementById("alert_passwordVal");
    let alert_passwordVal_txt = document.getElementById("alert_passwordVal_txt");

    //elementos de validación limpios
    passwordInputVal.style.border = "";
    alert_passwordVal.style.display = "none";
    alert_passwordVal_txt.innerHTML = "";

    if (Contraseña1 === Contraseña2) {
        passwordInputVal.style.border = "solid 2px green";
        return true;
    } else {
        alert_passwordVal_txt.insertAdjacentHTML("afterbegin", `No concide con la contraseña`);
        alert_passwordVal.style.display = "flex";
        passwordInputVal.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

passwordInputVal.addEventListener("change", function (element) {
    element.preventDefault();
    validarpassword2();
})

passwordInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarpassword();
})
// ***********  Alerta de error  ***********
function alertWrong() {
    swal("Información inválida", "Por favor revisa nuevamente el formulario", "error");
}

// ***********  Alerta de éxito  ***********
function alertSuccess() {
    swal("Mensaje enviado", "Nos contactáremos muy pronto contigo", "success");
}

// ***********  Alerta de error  ***********
function alertWrong() {
    swal("Información inválida :(", "Por favor, revisa nuevamente", "error");
}

// ***********  Alerta de éxito  ***********
function alertSuccess() {
    swal("¡Registro exitoso!", "Ya puedes iniciar sesión", "success");
}

// Se obtienen los registros almacenados en el localStorage
function validaEmailNuevo() {
    let storedRecordJSON = localStorage.getItem('listaUsuarios');
    let storedRecord = JSON.parse(storedRecordJSON);
    let contador = 0;

    if (storedRecord != null) {
        for (let i = 0; i < storedRecord.length; i++) {

            if (storedRecord[i].email == emailInput.value.trim().toLowerCase()) {
                contador++;
            }
        }
    }

    return (contador == 0);
}


// ***********  Integración de validaciones  ***********
let listaUsuarios = new Array(); // para almacenar elementos de la tabla

// Escucha el evento click en el botón de envío
document.getElementById('btnEnviar').addEventListener('click', function () {
    // Realiza las validaciones
    let esNombre = validarNombre();
    let esApellido = validarApellido();
    let esTelefono = validarTelefono();
    let esEmail = validarEmail();
    let esEmailVal = validarEmail2();
    let esPassword = validarpassword();
    let esPasswordVal = validarpassword2();
    let esEmailNuevo = validaEmailNuevo();

    // Si todas las validaciones son exitosas, guarda el registro en el localStorage
    if (esNombre && esApellido && esTelefono && esEmail && esEmailVal && esPassword && esPasswordVal) {
        if (esEmailNuevo) {
            const registro = `{
                "nombre": "${nombreInput.value.trim().toUpperCase()}",
                "apellido": "${apellidoInput.value.trim().toUpperCase()}",
                "telefono": "${telInput.value}",
                "email": "${emailInput.value.trim().toLowerCase()}",
                "password": "${passwordInput.value}"
            }`;

            listaUsuarios.push(JSON.parse(registro));
            localStorage.setItem('registroUsuario', JSON.stringify(listaUsuarios));

            // Limpia los campos del formulario
            nombreInput.value="";
            nombreInput.style.border = "";
            alert_nombre.style.display = "none";
            alert_nombre_txt.innerHTML = "";
            
            apellidoInput.value="";
            apellidoInput.style.border = "";
            alert_apellido.style.display = "none";
            alert_apellido_txt.innerHTML = "";

            telInput.value = '';
            telInput.style.border = "";
            alert_telefono.style.display = "none";
            alert_telefono_txt.innerHTML = "";

            emailInput.value = '';
            emailInput.style.border = "";
            alert_email.style.display = "none";
            alert_email_txt.innerHTML = "";

            emailInputVal.value = '';
            emailInputVal.style.border = "";
            alert_emailVal.style.display = "none";
            alert_emailVal_txt.innerHTML = "";

            passwordInput.value = '';
            passwordInput.style.border = "";
            alert_password.style.display = "none";
            alert_password_txt.innerHTML = "";

            passwordInputVal.value = '';
            passwordInputVal.style.border = "";
            alert_passwordVal.style.display = "none";
            alert_passwordVal_txt.innerHTML = "";

            // Mensaje de éxito
            swal({ title: "¡Registro exitoso!", text: "Ya puedes iniciar sesión.", icon: "success" })

        } else {
            swal({ title: "¡Correo ya registrado!", text: "Intenta nuevamente con otro e-mail", icon: "error" })
        }
    } else {
        alertWrong();
    }
});

window.addEventListener("load", function (event) {
    event.preventDefault();
    if (this.localStorage.getItem("listaUsuarios") != null) {
        // Obtener el arreglo del localStorage
        var listaUsuariosJSON = localStorage.getItem('listaUsuarios');

        // Convertir la cadena JSON nuevamente a un arreglo
        listaUsuarios = JSON.parse(listaUsuariosJSON);
    }
})
