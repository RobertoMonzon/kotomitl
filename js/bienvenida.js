window.addEventListener("load", function (event) {
    event.preventDefault();
    setTimeout(bienvenida(), 2000);
})

function bienvenida() {
    if (sessionStorage.getItem('estadoLogin') !== null) {
        // Obtener una variable del sessionStorage
        const valorGuardado = sessionStorage.getItem('estadoLogin');
        let nombreGuardado = sessionStorage.getItem('userLogin');
        const saludo = sessionStorage.getItem('welcome');

        nombreGuardado = nombreGuardado.toLowerCase().split(' ').map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1)).join(' ');

        if (valorGuardado == "true" && saludo == "true") {
            swal("¡Hola " + nombreGuardado + "!", "Bienvenid@", "success");
            sessionStorage.setItem('welcome', false);
        }
    }
}

