let tablainfo = document.getElementById("tablainfo");

window.addEventListener("load", function (event) {
    event.preventDefault();
    tablainfo.insertAdjacentHTML("beforeend", `  
        <tbody>
        <!-- ================= Nombre usuario ============== -->
        <tr>
            <td>
                <div>
                    <label for="nombre" class="form-label" style="color:black;">
                        <h3>Nombre:</h3>
                    </label>
                </div>
            </td>
            <th style="text-align: right;">
                <div>
                    <h3>${nombre}<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3a8761" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg></a></h3>
                </div>
            </th>
        </tr>
        <!-- ================= Apellido usuario ============== -->
        <tr>
            <td>
                <div>
                    <label for="apellido" class="form-label" style="color:black;">
                        <h3>Apellido:</h3>
                    </label>
                </div>
            </td>
            <th style="text-align: right;">
                <div>
                    <h3>${apellido}<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3a8761" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg></a></h3>
                </div>
            </th>
        </tr>
        <!-- ================= Telefono usuario ============== -->
        <tr>
            <td>
                <div>
                    <label for="telefono" class="form-label" style="color:black;">
                        <h3>Teléfono:</h3>
                    </label>
                </div>
            </td>
            <th style="text-align: right;">
                <div>
                    <h3>${telefono}<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3a8761" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg></a></h3>
                </div>
            </th>
        </tr>
        <!-- ================= Email usuario ============== -->
        <tr>
            <td>
                <div>
                    <label for="email" class="form-label" style="color:black;">
                        <h3>Correo electrónico:</h3>
                    </label>
                </div>
            </td>
            <th style="text-align: right;">
                <div>
                    <h3>${email}<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3a8761" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg></a></h3>
                </div>
            </th>
        </tr>
        <!-- ================= Password usuario ============== -->
        <tr>
            <td>
                <div>
                    <label for="password" class="form-label" style="color:black;">
                        <h3>Contraseña:</h3>
                    </label>
                </div>
            </td>
            <th style="text-align: right;">
                <div>
                    <h3>Actualizar contraseña <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3a8761" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg></a></h3>
                </div>
            </th>
        </tr>
        <!-- ================= Domicilio usuario ============== -->
        <tr>
            <td>
                <div>
                    <label for="password" class="form-label" style="color:black;">
                        <h3>Domicilio:</h3>
                    </label>
                </div>
            </td>
            <th style="text-align: right;">
                <div>
                    <h3>${domicilio}<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3a8761" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg></a></h3>
                </div>
            </th>
        </tr>
        <!-- ================= Estado usuario ============== -->
        <tr>
            <td>
                <div>
                    <label for="password" class="form-label" style="color:black;">
                        <h3>Estado:</h3>
                    </label>
                </div>
            </td>
            <th style="text-align: right;">
                <div>
                    <h3>${estado}<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3a8761" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg></a></h3>
                </div>
            </th>
        </tr>

    </tbody>
    `
    );
});// window load{}