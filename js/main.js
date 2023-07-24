let nameInput = document.getElementById("nameInput");
let telInput = document.getElementById("telInput");
let emailInput = document.getElementById("emailInput");
let asuntoInput = document.getElementById("asuntoInput");
let msjArea = document.getElementById("msjArea");
let btnEnviar = document.getElementById("btnEnviar");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");
let isValid = true;

function validarTelInput(){
    if(telInput.value.length<10){
        return false;
    }

    if(isNaN(telInput.value)){
        return false;
    }

    if(parseFloat(telInput.value)<=0){
        return false;
    }
    return true;
}

function validarNameInput(){
    if(nameInput.value.length==0){
        return false;
    }

    if(!isNaN(nameInput.value)){
        return false;
    }

    return true;
}

function validarAsuntoInput(){
    if(asuntoInput.value.length==0){
        return false;
    }

    if(!isNaN(asuntoInput.value)){
        return false;
    }

    return true;
}

function validarMsjArea(){
    if(msjArea.value.length==0){
        return false;
    }

    if(!isNaN(msjArea.value)){
        return false;
    }
    return true;
}

function validaEmail(){
    regexEmail = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    let email = emailInput.value.trim()
    if(!regexEmail.test(email)){
        return false
    }

    return true;
}

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    isValid = true;
    alertValidaciones.style.display="none";
    nameInput.style.border="";
    telInput.style.border="";
    emailInput.style.border="";
    asuntoInput.style.border="";
    msjArea.style.border="";

    nameInput.value = nameInput.value.trim();
    telInput.value = telInput.value.trim();
    emailInput.value = emailInput.value.trim();
    asuntoInput.value = asuntoInput.value.trim();
    msjArea.value = msjArea.value.trim();

    if(!validarTelInput()){
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`El <strong>Numero de telefono</strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block"
        telInput.style.border="solid 0.5px red";
        isValid = false;
        telInput.value = "";
        telInput.focus();
    }

    if(!validarNameInput()){
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`El <strong>Nombre</strong> no es correcta.<br/>`);
        alertValidaciones.style.display="block"
        nameInput.style.border="solid 0.5px red";
        isValid = false;
        nameInput.value="";
        nameInput.focus();
    }

    if(!validaEmail()){
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`El <strong>e-mail</strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block"
        emailInput.style.border="solid 0.5px red";
        isValid = false;
        emailInput.value="";
        emailInput.focus();
    }

    if(!validarAsuntoInput()){
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`El <strong>Asunto</strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block"
        asuntoInput.style.border="solid 0.5px red";
        isValid = false;
        asuntoInput.value="";
        asuntoInput.focus();
    }

    if(!validarMsjArea()){
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`El <strong>Mensaje</strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block"
        msjArea.style.border="solid 0.5px red";
        isValid = false;
        msjArea.value="";
        msjArea.focus();
    }

    //Esto es para mandar el email, aun no esta listo OJO...
    if(isValid){
        emailjs.sendForm('<service_vuqu1sh>','template_frgobld', '#myForm')
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
	}, function(err) {
	   console.log('FAILED...', err);
	});
    }
    //Aqui termina el envio del email
});