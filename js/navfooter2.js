// ============   NAVBAR & FOOTER   ====================

let footer = document.getElementById("footer");
let navbar = document.getElementById("navbar");
let nombre__usuario = document.getElementById("nombre__usuario");

window.addEventListener("load", function (event) {
    event.preventDefault();

    if (sessionStorage.getItem('estadoLogin') === 'true') {
        let nombre = this.sessionStorage.getItem('userLogin');
        nombre= capitalizeAllWords(nombre);
        navbar.insertAdjacentHTML("beforeend",
            `
        <nav class="navbar navbar-expand-lg custom-navbar">
    
                <div class="container-fluid ">
                <a class="navbar-brand " href="./index.html"><img src="./src/img/logos/KotomitlO.png" width="130rem" alt="Kotomitl"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="true"
                        aria-label="Toggle navigation" style="margin-right:1rem;">
                        <span class="" style="font-size:3rem; color:white;"><i class="bi bi-caret-down-fill"></i></span>
                    </button>    
                
    
                    <div class="collapse navbar-collapse" id="navbarsExample05">
                        <div class="nav-table mt-3 mb-3">
                            <div class="row row-cols-3 align-items-center">
                            <div class="col d-flex justify-content-center"><span style="font-size: 1.5rem; margin: 1rem;"><a
                            class="nav-link" aria-current="page" href="./index.html">Inicio</a></span></div>
                            <div class="col d-flex justify-content-center"><span style="font-size: 1.5rem; margin: 1rem;"><a
                            class="nav-link" href="./productos.html">Productos</a></span></div>
                            <div class="col d-flex justify-content-center"><span style="font-size: 1.5rem; margin: 1rem;"><a
                            class="nav-link" href="./contacto.html">Contacto</a></span></div>
                            <div class="col d-flex justify-content-center"><span style="font-size: 1.5rem; margin: 1rem;"><a
                            class="nav-link" href="./alta.html">Añadir</a></div>
                            <div class="col d-flex justify-content-center"><span style="font-size: 1.5rem; margin: 1rem;"><a
                            class="nav-link" href="./nosotros.html">Nosotros</a></div>
                            <div class="col d-flex justify-content-center"><span style="font-size: 1.5rem; margin: 1rem;">
                            
                            <div class="dropdown">
                                <button class="btn-link nav-link dropdown-toggle show" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false" style="font-size: 1rem;">
                                    <i class="bi bi-person-fill-check nav--icon"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="./infoUsuario.html">Cuenta</a></li>
                                    <li><a class="dropdown-item" href="#" onclick="cierreSesion()">Cerrar sesión</a></li>
                                </ul>
                            </div>
                            <h5 class="text-center" style="color:white;">${nombre}</h5>
                    </div>
                            </div>
                        </div>

                            
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="./index.html">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./productos.html"></i>Productos</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="./contacto.html">Contacto</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="./nosotros.html">Nosotros</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="./alta.html">Añadir</a>
                            </li>
                            
                            </ul>
                            
                            <h4 id="nombre__usuario" class="mb-0" style="transform: translateY(.2rem); color: white; font-weight:bold;">${nombre}</h4>
                        
                            <div class="iconoSuperior media align-items-center" style="margin-right:4rem">
                            
                            <ul class="d-flex list-unstyled me-auto mb-2 mb-lg-0">
                                
                                <li class="nav-item dropdown">
                                    
                                    <button class="btn btn-link nav-link dropdown-toggle d-flex align-items-center" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">
                                    <a class="nav-link" href="./registroUsuario.html">
                                    <i class="bi bi-person-fill-check nav--icon"></i>
                                    </a>
                                    </button>
                                    
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
                                        <li>
                                            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="registro" aria-pressed="false">
                                            <a class="nav-link" href="./infoUsuario.html" style="color:#353028">
                                                Cuenta
                                            </a>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="" aria-pressed="false">
                                            <a class="nav-link" href="" style="color:#353028" onclick="cierreSesion()">
                                                Cerrar sesión
                                            </a>
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        `);
    } else {
        navbar.insertAdjacentHTML("beforeend",
            `
        <nav class="navbar navbar-expand-lg custom-navbar">
    
                <div class="container-fluid ">
                <a class="navbar-brand " href="./index.html"><img src="./src/img/logos/KotomitlO.png" width="130rem" alt="Kotomitl"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="true"
                        aria-label="Toggle navigation" style="margin-right:1rem;">
                        <span class="" style="font-size:3rem; color:white;"><i class="bi bi-caret-down-fill"></i></span>
                    </button>    
                
    
                    <div class="collapse navbar-collapse" id="navbarsExample05">
                        <div class="nav-table">
                            <div class="row row-cols-3 align-items-center">
                                <div class="col d-flex justify-content-center";"><span style="font-size: 1.5rem; margin: 1rem;"><a class="nav-link" aria-current="page" href="./index.html">Inicio</a></span></div>
                                <div class="col d-flex justify-content-center";"><span style="font-size: 1.5rem; margin: 1rem;"><a class="nav-link" href="./productos.html">Productos</a></span></div>
                                <div class="col d-flex justify-content-center";"><span style="font-size: 1.5rem; margin: 1rem;"><a class="nav-link" href="./contacto.html">Contacto</a></span></div>
                                <div class="col d-flex justify-content-center";"><span style="font-size: 1.5rem; margin: 1rem;"><a class="nav-link" href="./registroUsuario.html">Registro</a></div>
                                <div class="col d-flex justify-content-center";"><span style="font-size: 1.5rem; margin: 1rem;"><a class="nav-link" href="./loginUsuario.html">Login</a></div>
                                <div class="col d-flex justify-content-center";"><span style="font-size: 1.5rem; margin: 1rem;"><a class="nav-link" href="./nosotros.html">Nosotros</a></div>
                            </div>
                        </div>

                            
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="./index.html">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./productos.html"></i>Productos</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="./contacto.html">Contacto</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="./nosotros.html">Nosotros</a>
                            </li>

                            </ul>
                            
                        <div class="iconoSuperior media" style="margin-right:4rem">
                            <h3 id="nombre__usuario"></h3>
                            <ul class="d-flex list-unstyled me-auto mb-2 mb-lg-0">
                                
                                <li class="nav-item dropdown">
                                    
                                    <button class="btn btn-link nav-link dropdown-toggle d-flex align-items-center" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">
                                    <a class="nav-link" href="./registroUsuario.html">
                                        <i class="bi bi-person-circle nav--icon"></i>
                                    </a>
                                    </button>
                                    
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
                                        <li>
                                            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="registro" aria-pressed="false">
                                            <a class="nav-link" href="./registroUsuario.html" style="color:#353028">
                                                Registro
                                            </a>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="" aria-pressed="false">
                                            <a class="nav-link" href="./loginUsuario.html" style="color:#353028">
                                                Login
                                            </a>
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        `);
    }




    footer.insertAdjacentHTML("beforeend",
        `    
        <ul class="list-unstyled d-flex justify-content-between align-items-center">
            <li>
                <a href="https://es-la.facebook.com/" target="_blank">
                    <img id="facebookLogo" src="./src/img/logos/facebookLogo.png" alt="facebookLogo">
                </a>
            </li>

            <li>
                <a href="https://twitter.com/?lang=es" target="_blank">
                    <img id="twitterLogo" src="./src/img/logos/twitterLogo.png" alt="twitterLogo">
                </a>
            </li>

            <li>
                <a href="https://www.instagram.com/" target="_blank">
                    <img id="instagramLogo" src="./src/img/logos/instagramLogo.png" alt="instagramlogo">
                </a>
            </li>
        </ul> 
    `
    );

});// window load{}

function cierreSesion() {
    sessionStorage.setItem('estadoLogin', false)
    swal("¡Hasta pronto!", " Aunque se estaba poniendo bueno...", "success");
    setTimeout(function () {
        window.location.href = "./index.html";
    }, 1000);
}

function capitalizeAllWords(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
