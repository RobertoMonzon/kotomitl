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

let alertValidacionesBueno = document.getElementById("alertValidacionesBueno");
let alertValidacionesTextoBueno = document.getElementById("alertValidacionesTextoBueno");

let cantidad = cantidadInput.value;
let isValid = true;
let num = 0;
let cont = 0;
let ls = localStorage;
let urlPrevia;
let imgExist = false;

function validarCodigoInput() {
    regexName = /^[a-zA-Z0-9]{3,}$/;
    let codigo = codigoInput.value.trim()
    if (!regexName.test(codigo)) {
        return false
    }
    return true;
}

function validarCantidadInput() {
    regexCantidad = /^[0-9]$/;
    let cantidad = cantidadInput.value.trim()
    if (!regexCantidad.test(cantidad)) {
        return false
    }
    return true;
}

function validaNombreInput() {
    regexName = /^[a-zA-Z" "]{3,}$/;
    let nombre = nombreInput.value.trim()
    if (!regexName.test(nombre)) {
        return false
    }
    return true;
}

function validarPrecioInput() {
    //regexPrecio = /^[0-9]$/;
    let precio = precioInput.value.trim();
    if (!precio.length > 0) {
        return false
    }
    return true;
}

function validarCostoInput() {
    //regexCosto = /^[0-9]$/;
    let costo = costoInput.value.trim();
    if (!costo > 0) {
        return false
    }
    return true;
}

function validarDescripcionInput() {
    regexDescripcion = /^[a-zA-Z0-9" "]{3,}$/;
    let descrip = descripcion.value.trim()
    if (!regexDescripcion.test(descrip)) {
        return false
    }
    return true;
}

function validarCategoriaInput() {
    if (!(categoriaInput.value>0)) {
        return false
    }
    return true;
}

btnMenos.addEventListener("click", function (event) {
    event.preventDefault();
    cantidad = cantidadInput.value;
    if (cantidad > 0) {
        cantidadInput.value = cantidad -= 1;
        console.log(cantidad);
    }
})

btnMas.addEventListener("click", function (event) {
    event.preventDefault();
    num = cantidadInput.value;
    num++;
    console.log(num);
    cantidadInput.value = num;


})

cantidadInput.addEventListener("keyup", function (event) {
    event.preventDefault();
    cantidad = cantidadInput.value;
    console.log(cantidad);
})

function imagePreview(event, querySelector){

    //Recuperamos el input que desencadeno la acción
    const input = event.target;

    //Recuperamos la etiqueta img donde cargaremos la imagen
    $previa = document.querySelector(querySelector);

    // Verificamos si existe una imagen seleccionada
    if (!input.files.length) return
    

    //Recuperamos el archivo subido
    file = input.files[0];

    //Creamos la url
    objectURL = URL.createObjectURL(file);

    //Modificamos el atributo src de la etiqueta img
    $previa.src = objectURL;

    urlPrevia = objectURL;

    imgExist=true;
    console.log(urlPrevia);
}

function restauraImagen(){
    //Recuperamos la etiqueta img donde cargaremos la imagen
    $previa = document.getElementById("previa");

    //Creamos la url
    objectURL = "src/img/camara.png";

    //Modificamos el atributo src de la etiqueta img
    $previa.src = objectURL;

    imgExist=true;
    
}

btnGuardar.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidaciones.style.display = "none";
    alertValidacionesTexto.innerHTML = "";

    codigoInput.style.border = "";
    cantidadInput.style.border = "";
    nombreInput.style.border = "";
    precioInput.style.border = "";
    costoInput.style.border = "";
    categoria.style.border = "";
    descripcion.style.border = "";

    codigoInput.value = codigoInput.value.trim();
    cantidadInput.value = cantidadInput.value.trim();
    nombreInput.value = nombreInput.value.trim();
    precioInput.value = precioInput.value.trim();
    costoInput.value = costoInput.value.trim();
    categoria.value = categoria.value.trim();
    descripcion.value = descripcion.value.trim();

    if (!validarCodigoInput()) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `El <strong>codigo</strong> no es correcto.<br/>`);
        alertValidaciones.style.display = "block"
        codigoInput.style.border = "solid 0.5px red";
        isValid = false;
        codigoInput.value = "";
        codigoInput.focus();
    }

    if (!validarCantidadInput()) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `La <strocantidad</strong> no es correcto.<br/>`);
        alertValidaciones.style.display = "block"
        cantidadInput.style.border = "solid 0.5px red";
        isValid = false;
        cantidadInput.value = "";
        cantidadInput.focus();
    }

    if (!validaNombreInput()) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `El nombre</strong> no es correcto.<br/>`);
        alertValidaciones.style.display = "block"
        nombreInput.style.border = "solid 0.5px red";
        isValid = false;
        nombreInput.value = "";
        nombreInput.focus();
    }

    if (!validarPrecioInput()) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `El <strong>precio</strong> no es correcto.<br/>`);
        alertValidaciones.style.display = "block"
        precioInput.style.border = "solid 0.5px red";
        isValid = false;
        precioInput.value = "";
        precioInput.focus();
    }

    if (!validarCostoInput()) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `El <strong>costo</strong> no es correcto.<br/>`);
        alertValidaciones.style.display = "block"
        costoInput.style.border = "solid 0.5px red";
        isValid = false;
        costoInput.value = "";
        costoInput.focus();
    }

    if (!validarDescripcionInput()) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `El <strong>descripcion</strong> no es correcto.<br/>`);
        alertValidaciones.style.display = "block"
        descripcion.style.border = "solid 0.5px red";
        isValid = false;
        descripcion.value = "";
        descripcion.focus();
    }

    if (!validarCategoriaInput()) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `Seleccione una <strong>categoria </strong> valida.<br/>`);
        alertValidaciones.style.display = "block"
        categoriaInput.style.border = "solid 0.5px red";
        isValid = false;
        categoriaInput.value = "0";
        categoriaInput.focus();
    }

    if (!imgExist) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `Seleccione una <strong>imagen </strong> valida.<br/>`);
        alertValidaciones.style.display = "block"
        isValid = false;
    }

    console.log("si");
    if (isValid) {
        console.log("si1");
        cont++;
        let producto = `{codigo: ${codigoInput.value}, imagen: ${urlPrevia}, cantidad: ${cantidadInput.value}, nombre: ${nombreInput.value}, precio: ${precioInput.value}, costo: ${costoInput.value}, categoria: ${categoriaInput.value}, descripcion: ${descripcion.value}}`
        ls.setItem(cont, JSON.stringify(producto));
        console.log("si2");
        alertValidacionesTextoBueno.insertAdjacentHTML("afterbegin", `El producto se agregó correctamente.`);
        alertValidacionesBueno.style.display = "block";

        codigoInput.value="";
        cantidadInput.value="0";
        nombreInput.value="";
        costoInput.value="";
        precioInput.value="";
        categoriaInput.value="0";
        descripcion.value="";
        restauraImagen();
    }

});



