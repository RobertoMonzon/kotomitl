// ============   NAVBAR & FOOTER   ====================

let footer = document.getElementById("footer");
let navbar = document.getElementById("navbar");

window.addEventListener("load", function (event) {
    event.preventDefault();

    navbar.insertAdjacentHTML("beforeend",
    `
    <nav class="navbar navbar-expand-lg custom-navbar" aria-label="Fifth navbar example">

            <div class="container-fluid ">
                <a class="navbar-brand " href="./index.html"><img src="./src/img/logos/komitl.png" width="220px" alt="Kotomitl"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="true"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample05">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="./index.html">Inicio</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                aria-expanded="false">Productos</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="./hombre.html">Hombres</a></li>
                                <li><a class="dropdown-item" href="./hombre.html">Mujeres</a></li>
                                <li><a class="dropdown-item" href="./hombre.html">Niños</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./nosotros.html">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./contacto.html">Contacto</a>
                        </li>
                        <li class="nav-item especial">
                            <a class="nav-link" href="./perfil.html">Perfil</a>
                        </li>
                        <li class="nav-item especial">
                            <a class="nav-link" href="./carrito.html">Carrito</a>
                        </li>
                        <li class="nav-item especial">
                            <a class="nav-link" href="./favoritos.html">Favoritos</a>
                        </li>
                        <li class="nav-item especial">
                            <input type="text" class="form-control" id="nameInput" placeholder="Buscar... " value=""
                                required>
                            <!-- <a class="nav-link" href="#"><img src="./src/img/logos/iconoBusqueda.png"
                                    alt="iconoBusqueda" width="40px" height="40px"></a> -->
                        </li>
                    </ul>
                    <div class="iconoSuperior media">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#"><img src="./src/img/logos/iconoBusqueda.png"
                                        alt="iconoBusqueda" width="40px" height="40px"></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./perfil.html"><img src="./src/img/logos/IconoUsuario.png"
                                        alt="IconoUsuario" width="40px" height="40px"></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./favoritos"><img src="./src/img/logos/corazonLogo.png"
                                        alt="corazonLogo" width="40px" height="40px"></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./carrito"><img src="./src/img/logos/IconoCarrito.png"
                                        alt="IconoCarrito" width="40px" height="40px"></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><strong>0/MXN</strong></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    `);
    
    footer.insertAdjacentHTML("beforeend",
    `
    <footer class="footerFinal col-md-5 offset-md-5">
        <ul class="footerFinal col-md-4 justify-content-center list-unstyled d-flex">
            <li class="footerFinal ms-3"><a class="footerFinal text-body" href="#"><img class="footerFinal"
                    id="facebookLogo" src="./src/img/logos/facebookLogo.png" alt="facebookLogo"></a>
            <li class="footerFinal ms-3"><a class="footerFinal text-body" href="#"><img class="footerFinal"
                    id="twitterLogo" src="./src/img/logos/twitterLogo.png" alt="twitterLogo"></a></li>
            <li class="footerFinal ms-3"><a class="footerFinal text-body" href="#"><img class="footerFinal"
                    id="instagramLogo" src="./src/img/logos/instagramLogo.png" alt="instagramlogo"></a></li>
        </ul>
    </footer> 
    `
    );

});// window load{}
