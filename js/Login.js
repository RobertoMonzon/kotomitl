// =========== VALIDACIÓN DE FORMULARIO DE LOGIN ===========

// ***********  Email  ***********
let emailInputLogin = document.getElementById("emailInputLogin");

function validarEmail() {
    let regexEmail = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    let email = emailInputLogin.value.trim().toLowerCase();

    let alert_email_login = document.getElementById("alert_email_login");
    let alert_email_txt_login = document.getElementById("alert_email_txt_login");

    //elementos de validación limpios
    emailInputLogin.style.border = "";
    alert_email_login.style.display = "none";
    alert_email_txt_login.innerHTML = "";

    if (regexEmail.test(email)) {
        emailInputLogin.style.border = "solid 2px green";
        return true;
    } else {
        alert_email_txt_login.insertAdjacentHTML("afterbegin", `E-mail incorrecto`);
        alert_email_login.style.display = "flex";
        emailInputLogin.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

emailInputLogin.addEventListener("change", function (element) {
    element.preventDefault();
    validarEmail();
})


// ***********  CONTRASEÑA  ***********
let passwordInput = document.getElementById("passwordInput");

function validarpassword() {
    let regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
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
        alert_password_txt.insertAdjacentHTML("afterbegin", `Password incorrecto`);
        alert_password.style.display = "flex";
        passwordInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

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

// ***********  Botón de envío  ***********
let btnEnviar = document.getElementById("btnEnviar");


btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    let esNombre = validarNombre();
    let esTelefono = validarTelefono();
    let esEmail = validarEmail();
    let esPassword = validarpassword();

    if (esNombre && esTelefono && esEmail && esMensaje) {
        alertSuccess();
        nombreInput.value = "";
        telInput.value = "";
        emailInputLogin.value = "";
        msjArea.value = "";
    } else {
        alertWrong();
    }
});