let fileInput = document.getElementById("file-input");
let codigoInput = document.getElementById("codigoInput");
let cantidadInput = document.getElementById("cantidadInput");
let btnMenos = document.getElementById("btnMenos");
let btnMas = document.getElementById("btnMas");
let nombreInput = document.getElementById("nombreInput");
let precioInput = document.getElementById("precioInput");
let costoInput = document.getElementById("costoInput");
let categoriaInput = document.getElementById("categoria");
let descripcion = document.getElementById("descripcion");
let btnGuardar = document.getElementById("btnGuardar");

let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

let cantidad = cantidadInput.value;
let isValid = true;
let num=0;
let cont=0;
let ls = localStorage;

fileInput.addEventListener("change", function previewImage(event, querySelector){

	//Recuperamos el input que desencadeno la acción
	const input = event.target;
	
	//Recuperamos la etiqueta img donde cargaremos la imagen
	$previa = document.querySelector(querySelector);

	// Verificamos si existe una imagen seleccionada
	if(!input.files.length) return
	
	//Recuperamos el archivo subido
	file = input.files[0];

	//Creamos la url
	objectURL = URL.createObjectURL(file);
	
	//Modificamos el atributo src de la etiqueta img
	$previa.src = objectURL;
                
});

function validarCodigoInput(){
    regexName = /^[a-zA-Z0-9]{3,}$/;
    let codigo = codigoInput.value.trim()
    if(!regexName.test(codigo)){
        return false
    }
    return true;
}

function validarCantidadInput(){
    regexCantidad = /^[0-9]$/;
    let cantidad = cantidadInput.value.trim()
    if(!regexCantidad.test(cantidad)){
        return false
    }
    return true;
}

function validaNombreInput(){
    regexName = /^[a-zA-Z" "]{3,}$/;
    let nombre = nombreInput.value.trim()
    if(!regexName.test(nombre)){
        return false
    }
    return true;
}

/*function validarPrecioInput(){
    regexPrecio = /^[0-9]$/;
    let precio = precioInput.value.trim();
    if(!regexPrecio.test(precio)){
        return false
    }
    return true;
}

function validarCostoInput(){
    regexCosto = /^[0-9]$/;
    let costo = costoInput.value.trim();
    if(!regexCosto.test(costo)){
        return false
    }
    return true;
}*/

function validarDescripcionInput(){
    regexDescripcion = /^[a-zA-Z0-9" "]{3,}$/;
    let descrip = descripcion.value.trim()
    if(!regexDescripcion.test(descrip)){
        return false
    }
    return true;
}

btnMenos.addEventListener("click", function(event){
    event.preventDefault();
    cantidad=cantidadInput.value;
    if(cantidad>0){
    cantidadInput.value = cantidad-=1;
    console.log(cantidad);
    }
})

btnMas.addEventListener("click", function(event){
    event.preventDefault();
    num=cantidadInput.value;
    num++;
    console.log(num);
    cantidadInput.value = num;
    
    
})

cantidadInput.addEventListener("keyup", function(event){
    event.preventDefault();
    cantidad=cantidadInput.value;
    console.log(cantidad);
})

btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
    alertValidaciones.style.display="none";
    alertValidaciones.insertAdjacentHTML("afterbegin","");

    codigoInput.style.border="";
    cantidadInput.style.border="";
    nombreInput.style.border="";
    precioInput.style.border="";
    costoInput.style.border="";
    categoria.style.border="";
    descripcion.style.border="";

    codigoInput.value= codigoInput.value.trim();
    cantidadInput.value= cantidadInput.value.trim();
    nombreInput.value= nombreInput.value.trim();
    precioInput.value= precioInput.value.trim();
    costoInput.value= costoInput.value.trim();
    categoria.value= categoria.value.trim();
    descripcion.value= descripcion.value.trim();

    if(!validarCodigoInput()){
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`El <strong>codigo</strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block"
        codigoInput.style.border="solid 0.5px red";
        isValid = false;
        codigoInput.value = "";
        codigoInput.focus();
    }

    if(!validarCantidadInput()){
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`La <strocantidad</strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block"
        cantidadInput.style.border="solid 0.5px red";
        isValid = false;
        cantidadInput.value = "";
        cantidadInput.focus();
    }

    if(!validaNombreInput()){
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`El nombre</strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block"
        nombreInput.style.border="solid 0.5px red";
        isValid = false;
        nombreInput.value = "";
        nombreInput.focus();
    }

    /*if(!validarPrecioInput()){
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`El <strong>precio</strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block"
        precioInput.style.border="solid 0.5px red";
        isValid = false;
        precioInput.value = "";
        precioInput.focus();
    }

    if(!validarCostoInput()){
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`El <strong>costo</strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block"
        costoInput.style.border="solid 0.5px red";
        isValid = false;
        costoInput.value = "";
        costoInput.focus();
    }*/

    if(!validarDescripcionInput()){
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`El <strong>descripcion</strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block"
        descripcion.style.border="solid 0.5px red";
        isValid = false;
        descripcion.value = "";
        descripcion.focus();
    }
    console.log("si");
    if (isValid) {
        console.log("si1");
        cont++;
        let producto = `{codigo: ${codigoInput.value}, cantidad: ${cantidadInput.value}, nombre: ${nombreInput.value}, precio: ${precioInput.value}, costo: ${costoInput.value}, categoria: ${categoriaInput.value}, descripcion: ${descripcion.value}}`
        ls.setItem(cont, JSON.stringify(producto));
        console.log("si2");
    }

});

