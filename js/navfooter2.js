// ============   NAVBAR & FOOTER   ====================

let footer = document.getElementById("footer");
let navbar = document.getElementById("navbar");

window.addEventListener("load", function (event) {
    event.preventDefault();

    if (sessionStorage.getItem('estadoLogin')==='true'){

        navbar.insertAdjacentHTML("beforeend",
        `
        <nav class="navbar navbar-expand-lg custom-navbar">
    
                <div class="container-fluid ">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="true"
                        aria-label="Toggle navigation" style="margin-right:1rem;">
                        <span class="navbar-toggler-icon" style="font-size:2rem;"></span>
                    </button>    
                <a class="navbar-brand " href="./index.html"><img src="./src/img/logos/kotomitl2.png" width="80rem" alt="Kotomitl"></a>
    
                    <div class="collapse navbar-collapse" id="navbarsExample05">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="./index.html">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./productos.html">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./nosotros.html">Nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./contacto.html">Contacto</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./alta.html">Añadir</a>
                            </li>
                            
                            <li class="nav-item especial">
                                <a class="nav-link" href="#">Mi cuenta</a>
                            </li>
                        
                            <li class="nav-item especial">
                                <a class="nav-link" href="#" onclick="cierreSesion()">Cerrar sesión</a>
                            </li>
    
                        </ul>
                        <div class="iconoSuperior media" style="margin-right:4rem">
                            <ul class="d-flex list-unstyled me-auto mb-2 mb-lg-0">
                                
                                <!-- Busqueda-->
                                
                                <!--<li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <i class="bi bi-search nav--icon"></i>
                                    </a>
                                </li>
                                -->
    
                                
                                <li class="nav-item dropdown">
                                    
                                    <button class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">
                                    <a class="nav-link" href="./registroUsuario.html">
                                        <i class="bi bi-person-circle nav--icon"></i>
                                    </a>
                                    </button>
                                    
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
                                        <li>
                                            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="registro" aria-pressed="false">
                                            <a class="nav-link" href="#" style="color:#353028">
                                                Cuenta
                                            </a>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="" aria-pressed="false">
                                            <a class="nav-link" href="#" style="color:#353028" onclick="cierreSesion()">
                                                Cerrar sesión
                                            </a>
                                            </button>
                                        </li>
                                    </ul>
                                </li>
    
                                <!-- Alta -->
                                <!--
                                <li class="nav-item">
                                    <a class="nav-link" href="./alta.html">
                                        <i class="bi bi-heart-fill nav--icon"></i>
                                    </a>
                                </li>
                                -->
    
                                <!-- Carrito-->
                                <!--
                                <li class="nav-item">
                                    <a class="nav-link" href="./carrito.html">
                                        <i class="bi bi-cart-fill nav--icon"></i>
                                    </a>
                                </li>
                                -->
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        `);
    }else{
        navbar.insertAdjacentHTML("beforeend",
        `
        <nav class="navbar navbar-expand-lg custom-navbar">
    
                <div class="container-fluid ">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="true"
                        aria-label="Toggle navigation" style="margin-right:1rem;">
                        <span class="navbar-toggler-icon" style="font-size:2rem;"></span>
                    </button>    
                <a class="navbar-brand " href="./index.html"><img src="./src/img/logos/kotomitl2.png" width="80rem" alt="Kotomitl"></a>
    
                    <div class="collapse navbar-collapse" id="navbarsExample05">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="./index.html">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./productos.html">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./nosotros.html">Nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./contacto.html">Contacto</a>
                            </li>
                            
                            <li class="nav-item especial">
                                <a class="nav-link" href="./registroUsuario.html">Registro</a>
                            </li>
                            
                            <li class="nav-item especial">
                                <a class="nav-link" href="./loginUsuario.html">Login</a>
                            </li>
    
                        </ul>
                        <div class="iconoSuperior media" style="margin-right:4rem">
                            <ul class="d-flex list-unstyled me-auto mb-2 mb-lg-0">
                                
                                <!-- Busqueda-->
                                
                                <!--<li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <i class="bi bi-search nav--icon"></i>
                                    </a>
                                </li>
                                -->
    
                                
                                <li class="nav-item dropdown">
                                    
                                    <button class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">
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
    
                                <!-- Alta -->
                                <!--
                                <li class="nav-item">
                                    <a class="nav-link" href="./alta.html">
                                        <i class="bi bi-heart-fill nav--icon"></i>
                                    </a>
                                </li>
                                -->
    
                                <!-- Carrito-->
                                <!--
                                <li class="nav-item">
                                    <a class="nav-link" href="./carrito.html">
                                        <i class="bi bi-cart-fill nav--icon"></i>
                                    </a>
                                </li>
                                -->
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        `);
    }


    
    
    footer.insertAdjacentHTML("beforeend",
    `
        <ul class="list-unstyled d-flex">
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

function cierreSesion(){
    sessionStorage.setItem('estadoLogin',false)
    swal("¡Hasta pronto¡","Cierre de sesión exitoso", "success");
    setTimeout(function () {
        window.location.href = "https://robertomonzon.github.io/kotomitl/index.html";
    }, 1000);
}
