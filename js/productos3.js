let filt_mas = document.getElementById("filt_mas");
let filt_fem = document.getElementById("filt_fem");
let filt_inf = document.getElementById("filt_inf");
let filt_cat = document.getElementById("filt_cat");

let btnazul = document.getElementById("btnazul");
let btnblanco = document.getElementById("btnblanco");
let btnnegro = document.getElementById("btnnegro");

let filt_mas2 = document.getElementById("filt_mas2");
let filt_fem2 = document.getElementById("filt_fem2");
let filt_inf2 = document.getElementById("filt_inf2");
let filt_Scat2 = document.getElementById("filt_cat2");

let min = document.getElementById("min");
let max = document.getElementById("max");
let filt_precio= document.getElementById("filt_precio");


function showProducts(prods) {

  const mainProds = document.getElementById("main__prods");
  mainProds.innerHTML = prods.map(prod => `
    
                    <!-- productos-->
                    <div class="col" style="margin-bottom: 1rem;">
                        <div class="card card_producto card__team h-100">
                            <div style="text-align: center;" class="img_producto">
                                <img src="${prod.imagen1}"
                                    style="width: auto; height: 150px; margin-top: 1rem;"
                                    class="img-fluid rounded" alt="${prod.nombre}">
                            </div>
                            <div class="card-body">
                                <div class="title__card">
                                    <span>${prod.nombre}</span>
                                </div>
                                <div class="subtitle__card">
                                    <span>${prod.origen}</span>
                                </div>
                                <div class="subtitle__card">
                                    <span>$ ${prod.precio}</span>
                                </div>
                                <p class="card-text" style="text-align: justify;">${prod.descripcion.slice(0, 50)} ... </p>
                            </div>
                            
                            <div style="text-align:center; margin: 0 auto 1.5rem auto;">
                            <button type="button" id="btn-producto" class="btn btn-warning btn-producto" data-bs-toggle="modal" data-bs-target="#exampleModal${prod.id}">
                            Ver más 
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                            </button>

                            </div>
                            <div class="modal fade" id="exampleModal${prod.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">

                            <div class="container-fluid">
                            <div class="modal-dialog modal-xl">
                            <div class="modal-content" id="modal-contenido">
                                <div class="modal-header">
                                    <h6 class="modal-title"><strong>${prod.nombre}</strong></h6>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <div class="container-fluid text-center" id="singleprod">
                                <div class="row" style="width: 100%;">
                                  <div class="col my-auto" style="width: 30%;" id="col1">
                                    <ul class="list-group" id=miniaturas>
                                        <li class="list-group-item" style="width: 70%;"><img src="${prod.imagen1}" onclick="cambiarimagen(this)" class="rounded mx-auto d-block img-pequena" alt="..."></li>
                                        <li class="list-group-item" style="width: 70%"><img src="${prod.imagen2}"  onclick="cambiarimagen(this)" class="rounded mx-auto d-block img-pequena" alt="..."></li>
                                        <li class="list-group-item" style="width: 70%"><img src="${prod.imagen3}" onclick="cambiarimagen(this)" class="rounded mx-auto d-block img-pequena" alt="..." ></li>
                            
                                      </ul>
                                  </div>
                                  <div class="col" style="width: 50%;align-items: center;" id="main-image">
                                    <img src="${prod.imagen1}"  id="img-grande" class="rounded mx-auto d-block" alt="..." " style=" max-width: 95%; max-height: 95%;">
                                  </div>
                                  <div class="col" style="width: 40%;">
                                    <!--Nombre del producto-->
                                    <h5 id="nombre_producto">Precio: $ ${prod.precio}</h5>
                                    <div class="container text-center">
                                        
                                      </div>
                                    
                                    <!--Talla-->
                                    <div class="container text-center">
                                        <div class="row">
                                          <div class="col">

                                          <fieldset id="tallas">
                                          <h4 id="titulo-tallas">Tallas</h4>
                                          <div class="form-check form-check-inline formtallas talla-conjunto">
                                            <input id="tCh" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                                            <label class="form-check-label label-tallas" for="inlineRadio1">C</label>
                                          </div>
                                          <div class="form-check form-check-inline formtallas talla-conjunto">
                                            <input id="tM" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                            <label class="form-check-label label-tallas" for="inlineRadio2">M</label>
                                          </div>
                                          <div class="form-check form-check-inline formtallas talla-conjunto">
                                            <input id="tG" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
                                            <label class="form-check-label label-tallas" for="inlineRadio3">G</label>
                                          </div>
                                          <div class="form-check form-check-inline formtallas talla-conjunto">
                                            <input id="tXg" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4">
                                            <label class="form-check-label label-tallas" for="inlineRadio4">X</label>
                                          </div>
                                      <fieldset>
                                            
                                          </div>
                                        </div>
                                      </div>
              
                            
                                      <!--Descripcion-->
                                      <div class="descripciones-modal mt-5">
                                        <p class="codigo">Descripción</p>
                                        <p id="desc-prod">${prod.descripcion}</p>
                                        <ul id="lista-desc">
                                        
                                        
                                            <li>${prod.materiales}</li>
                                            <li>${prod.sugerencia}</li>
                                            <li>${prod.adicional}</li>
                                            
                                        </ul>
                                      </div>
                                      <!--Botones-->
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btnmodal btn-success" id="comprar">Comprar</button>
                                        <button type="button" class="btn btnmodal btn-warning" id="carrito">Carrito</button>
                                    </div>
                            
                                    
                            
                                  </div>
                                </div>
                              </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btnmodal btn-outline-danger"
                                        data-bs-dismiss="modal" id="cerrar">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                            </div>

                            
    `
  ).join('');

}


filt_cat.addEventListener("click", function (event) {
  showProducts(prod1);
});

filt_mas.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.publico == "mas"));

});

filt_fem.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.publico == "fem"));
});

filt_inf.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.publico == "inf"));
});


btnazul.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.color == "azul"));

});

btnblanco.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.color == "blanco"));
});

btnnegro.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.color == "negro"));
});


filt_precio.addEventListener("click", function (event) {
  if (min.value.length == 0 && max.value.length.keyup() == 0){
    return showProducts(prod1);
  }else{
  showProducts(prod1.filter(prod => (prod.precio >= min.value && prod.precio <= max.value)));
  }
});


prenda_buscada = document.getElementById('filtro_nombre');
palabra_busqueda = prenda_buscada.value.toLowerCase();

prenda_buscada.addEventListener("keyup", function (event) {
  if (prenda_buscada.value.length == 0){
    return showProducts(prod1);
  }else{
    showProducts(prod1.filter(prod => prod.tipo === prenda_buscada.value.trim().toLowerCase()));
  }
});




filt_cat2.addEventListener("click", function (event) {
  showProducts(prod1);

});

filt_mas2.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.publico == "mas"));

});

filt_fem2.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.publico == "fem"));
});

filt_inf2.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.publico == "inf"));
});




prod1 = [

  {
    id:1,
    nombre:"Rebozo azul",
    publico:"fem",
    descripcion:"Exquisito rebozo artesanal tejido con cariño a mano por hábiles artesanos",
    precio:400,
    origen:"Náhuatl",
    color:"azul",
    cantidad:"100",
    talla:"1",
    materiales:"algodón",
    sugerencia:"perfecta para un dia frio",
    adicional:"elaboración artesanal",
    tipo:"rebozo",
    imagen1:"./src/img/ropa/rebozo-azul-1.jpg",
    imagen2:"./src/img/ropa/rebozo-azul-2.jpg",
    imagen3:"./src/img/ropa/rebozo-azul-3.jpg"
  },

  {
    id:2,
    nombre:"Rebozo blanco",
    publico:"fem",
    descripcion:"Exquisito rebozo artesanal tejido con cariño a mano por hábiles artesanos",
    precio:380,
    origen:"Náhuatl",
    color:"blanco",
    cantidad:"100",
    talla:"1",
    materiales:"algodón",
    sugerencia:"perfecta para un dia frio",
    adicional:"elaboración artesanal",
    tipo:"rebozo",
    imagen1:"./src/img/ropa/rebozo-blanco-1.jpg",
    imagen2:"./src/img/ropa/rebozo-blanco-2.jpg",
    imagen3:"./src/img/ropa/rebozo-blanco-3.jpg"
  },

  {
    id: 3,
    nombre:"Rebozo negro",
    publico:"fem",
    descripcion:"Exquisito rebozo artesanal tejido con cariño a mano por hábiles artesanos",
    precio:400,
    origen:"Náhuatl",
    color:"negro",
    cantidad:"100",
    talla:"1",
    materiales:"algodón",
    sugerencia:"perfecta para un dia frio",
    adicional:"elaboración artesanal",
    tipo:"rebozo",
    imagen1:"./src/img/ropa/rebozo-negro-1.jpg",
    imagen2:"./src/img/ropa/rebozo-negro-2.jpg",
    imagen3:"./src/img/ropa/rebozo-negro-3.jpg"
  },


  {
    id: 4,
    nombre:"Vestido azul sin mangas",
    publico:"fem",
    descripcion:"El vestido artesanal sin mangas está confeccionado con telas de la más alta calidad, seleccionadas cuidadosamente para proporcionar un tacto suave y una caída elegante.",
    precio: 1500,
    origen:"Otomi",
    color:"azul",
    cantidad:"40",
    talla:"2",
    materiales:"algodón",
    sugerencia:"lavar",
    adicional:"elegante vestido para fiestas",
    tipo:"vestido",
    imagen1:"./src/img/ropa/vestido-azul-1-1.jpg",
    imagen2:"./src/img/ropa/vestido-azul-1-2.jpg",
    imagen3:"./src/img/ropa/vestido-azul-1-3.jpg"
  },

  {
    id: 5,
    nombre:"Vestido blanco sin mangas",
    publico:"fem",
    descripcion:"El vestido artesanal sin mangas está confeccionado con telas de la más alta calidad, seleccionadas cuidadosamente para proporcionar un tacto suave y una caída elegante.",
    precio: 1300,
    origen:"Otomi",
    color:"blanco",
    cantidad:"40",
    talla:"2",
    materiales:"algodón",
    sugerencia:"lavar",
    adicional:"elegante vestido para fiestas",
    tipo:"vestido",
    imagen1:"./src/img/ropa/vestido-blanco-1-1.jpg",
    imagen2:"./src/img/ropa/vestido-blanco-1-2.jpg",
    imagen3:"./src/img/ropa/vestido-blanco-1-3.jpg"
  },


  {
    id: 6,
    nombre:"Vestido negro sin mangas",
    publico:"fem",
    descripcion:"El vestido artesanal sin mangas está confeccionado con telas de la más alta calidad, seleccionadas cuidadosamente para proporcionar un tacto suave y una caída elegante.",
    precio: 1500,
    origen:"Otomi",
    color:"negro",
    cantidad:"40",
    talla:"2",
    materiales:"algodón",
    sugerencia:"lavar",
    adicional:"elegante vestido para fiestas",
    tipo:"vestido",
    imagen1:"./src/img/ropa/vestido-negro-1-1.jpg",
    imagen2:"./src/img/ropa/vestido-negro-1-2.jpg",
    imagen3:"./src/img/ropa/vestido-negro-1-3.jpg"
  },




  {
    id: 7,
    nombre:"Vestido azul hombros descubiertos",
    publico:"fem",
    descripcion:"El vestido artesanal con hombros descubiertos está confeccionado con telas de la más alta calidad, seleccionadas cuidadosamente para proporcionar un tacto suave y una caída elegante.",
    precio: 1700,
    origen:"Otomi",
    color:"azul",
    cantidad:"40",
    talla:"2",
    materiales:"algodón",
    sugerencia:"lavar",
    adicional:"elegante vestido para fiestas",
    tipo:"vestido",
    imagen1:"./src/img/ropa/vestido-azul-2-1.jpg",
    imagen2:"./src/img/ropa/vestido-azul-2-2.jpg",
    imagen3:"./src/img/ropa/vestido-azul-2-3.jpg"
  },

  {
    id: 8,
    nombre:"Vestido blanco hombros descubiertos",
    publico:"fem",
    descripcion:"El vestido artesanal con hombros descubiertos está confeccionado con telas de la más alta calidad, seleccionadas cuidadosamente para proporcionar un tacto suave y una caída elegante.",
    precio: 1500,
    origen:"Otomi",
    color:"blanco",
    cantidad:"40",
    talla:"2",
    materiales:"algodón",
    sugerencia:"lavar",
    adicional:"elegante vestido para fiestas",
    tipo:"vestido",
    imagen1:"./src/img/ropa/vestido-blanco-2-1.jpg",
    imagen2:"./src/img/ropa/vestido-blanco-2-2.jpg",
    imagen3:"./src/img/ropa/vestido-blanco-2-3.jpg"
  },


  {
    id: 9,
    nombre:"Vestido negro hombros descubiertos",
    publico:"fem",
    descripcion:"El vestido artesanal con hombros descubiertos está confeccionado con telas de la más alta calidad, seleccionadas cuidadosamente para proporcionar un tacto suave y una caída elegante.",
    precio: 1700,
    origen:"Otomi",
    color:"negro",
    cantidad:"40",
    talla:"2",
    materiales:"algodón",
    sugerencia:"lavar",
    adicional:"elegante vestido para fiestas",
    tipo:"vestido",
    imagen1:"./src/img/ropa/vestido-negro-2-1.jpg",
    imagen2:"./src/img/ropa/vestido-negro-2-2.jpg",
    imagen3:"./src/img/ropa/vestido-negro-2-3.jpg"
  },


  // Mujer


  {
    id: 11,
    nombre:"Vestido azul",
    publico:"fem",
    descripcion:"El vestido floreado artesanal está confeccionado con telas de alta calidad, seleccionadas con esmero para ofrecer un ajuste cómodo y una sensación suave contra la piel.",
    precio: 1200,
    origen:"Otomi",
    color:"azul",
    cantidad:"40",
    talla:"2",
    materiales:"algodón",
    sugerencia:"lavar",
    adicional:"elegante vestido para fiestas",
    tipo:"vestido",
    imagen1:"./src/img/ropa/vestido-azul-3-1.jpg",
    imagen2:"./src/img/ropa/vestido-azul-3-2.jpg",
    imagen3:"./src/img/ropa/vestido-azul-3-3.jpg"
  },

  {
    id: 12,
    nombre:"Vestido blanco",
    publico:"fem",
    descripcion:"El vestido floreado artesanal está confeccionado con telas de alta calidad, seleccionadas con esmero para ofrecer un ajuste cómodo y una sensación suave contra la piel.",
    precio: 1000,
    origen:"Otomi",
    color:"blanco",
    cantidad:"40",
    talla:"2",
    materiales:"algodón",
    sugerencia:"lavar",
    adicional:"elegante vestido para fiestas",
    tipo:"vestido",
    imagen1:"./src/img/ropa/vestido-blanco-3-1.jpg",
    imagen2:"./src/img/ropa/vestido-blanco-3-2.jpg",
    imagen3:"./src/img/ropa/vestido-blanco-3-3.jpg"
  },


  {
    id: 14,
    nombre:"Vestido negro",
    publico:"fem",
    descripcion:"El vestido floreado artesanal está confeccionado con telas de alta calidad, seleccionadas con esmero para ofrecer un ajuste cómodo y una sensación suave contra la piel.",
    precio: 1200,
    origen:"Otomi",
    color:"negro",
    cantidad:"40",
    talla:"2",
    materiales:"algodón",
    sugerencia:"lavar",
    adicional:"elegante vestido para fiestas",
    tipo:"vestido",
    imagen1:"./src/img/ropa/vestido-negro-3-1.jpg",
    imagen2:"./src/img/ropa/vestido-negro-3-2.jpg",
    imagen3:"./src/img/ropa/vestido-negro-3-3.jpg"
  },

  {
    id: 15,
    nombre:"Vestido infantil azul",
    publico:"inf",
    descripcion:"La comodidad y la seguridad de los más pequeños son una prioridad en este vestido artesanal.",
    precio: 500,
    origen:"Otomi",
    color:"azul",
    cantidad:"40",
    talla:"2",
    materiales:"algodón",
    sugerencia:"lavar",
    adicional:"elegante vestido para fiestas",
    tipo:"vestido",
    imagen1:"./src/img/ropa/vestido-infantil-azul-1.jpg",
    imagen2:"./src/img/ropa/vestido-infantil-azul-2.jpg",
    imagen3:"./src/img/ropa/vestido-infantil-azul-3.jpg"
  },

  {
    id: 16,
    nombre:"Vestido infantil blanco",
    publico:"inf",
    descripcion:"La comodidad y la seguridad de los más pequeños son una prioridad en este vestido artesanal.",
    precio: 400,
    origen:"Otomi",
    color:"blanco",
    cantidad:"40",
    talla:"2",
    materiales:"algodón",
    sugerencia:"lavar",
    adicional:"elegante vestido para fiestas",
    tipo:"vestido",
    imagen1:"./src/img/ropa/vestido-infantil-blanco-1.jpg",
    imagen2:"./src/img/ropa/vestido-infantil-blanco-2.jpg",
    imagen3:"./src/img/ropa/vestido-infantil-blanco-3.jpg"
  },
  {
    id: 17,
    nombre:"Vestido infantil negro",
    publico:"inf",
    descripcion:"La comodidad y la seguridad de los más pequeños son una prioridad en este vestido artesanal.",
    precio: 500,
    origen:"Otomi",
    color:"negro",
    cantidad:"40",
    talla:"2",
    materiales:"algodón",
    sugerencia:"lavar",
    adicional:"elegante vestido para fiestas",
    tipo:"vestido",
    imagen1:"./src/img/ropa/vestido-infantil-negro-1.jpg",
    imagen2:"./src/img/ropa/vestido-infantil-negro-2.jpg",
    imagen3:"./src/img/ropa/vestido-infantil-negro-3.jpg"
  },

  {
    id: 18,
    nombre: "Bufanda blanca",
    publico: "fem",
    descripcion: "Bufanda artesanal azul, tejida con pasión y tradición mexicana.",
    precio: 345,
    origen: "maya",
    color: "blanco",
    cantidad: 25,
    talla: "2",
    materiales: "Fibras naturales y orgánicas de la región",
    sugerencia: "Ideal para abrigarte con autenticidad en días fríos.",
    adicional: "Elaborada a mano por artesanos locales.",
    tipo:"bufanda",
    imagen1:"./src/img/ropa/bufanda-blanca-1.jpg",
    imagen2:"./src/img/ropa/bufanda-blanca-2.jpg",
    imagen3:"./src/img/ropa/bufanda-blanca-3.jpg"
  },
  {
    id: 19,
    nombre: "Bufanda Azul",
    publico: "fem",
    descripcion: "Bufanda artesanal azul, tejida con pasión y tradición mexicana.",
    precio: 400,
    origen: "maya",
    color: "azul",
    cantidad: 25,
    talla: "2",
    materiales: "Fibras naturales y orgánicas de la región",
    sugerencia: "Ideal para abrigarte con autenticidad en días fríos.",
    adicional: "Elaborada a mano por artesanos locales.",
    tipo:"bufanda",
    imagen1: "./src/img/ropa/bufanda-azul-1.jpg",
    imagen2: "./src/img/ropa/bufanda-azul-2.jpg",
    imagen3: "./src/img/ropa/bufanda-azul-3.jpg"
  },
  {
    id: 20,
    nombre: "Bufanda Negra",
    publico: "fem",
    descripcion: "Bufanda artesanal azul, tejida con pasión y tradición mexicana.",
    precio: 400,
    origen: "maya",
    color: "azul",
    cantidad: 25,
    talla: "2",
    materiales: "Fibras naturales y orgánicas de la región",
    sugerencia: "Ideal para abrigarte con autenticidad en días fríos.",
    adicional: "Elaborada a mano por artesanos locales.",
    tipo:"bufanda",
    imagen1: "./src/img/ropa/bufanda-negra-1.jpg",
    imagen2: "./src/img/ropa/bufanda-negra-2.jpg",
    imagen3: "./src/img/ropa/bufanda-negra-3.jpg"
  },
  {
    id: 21,
    nombre: "Camisa Blanca Artesanal",
    publico: "mas",
    descripcion: "Camisa blanca de diseño artesanal, una obra maestra de la tradición mexicana.",
    precio: 375,
    origen: "jacalteco",
    color: "blanco",
    cantidad: 25,
    talla: "2",
    materiales: "Algodón orgánico cultivado localmente",
    sugerencia: "Ideal para días frescos y ocasiones especiales.",
    adicional: "Creada a mano por talentosos artesanos de la región.",
    tipo:"camisa",
    imagen1: "./src/img/ropa/camisa-hombre-blanca-1-1.jpg",
    imagen2: "./src/img/ropa/camisa-hombre-blanca-1-2.jpg",
    imagen3: "./src/img/ropa/camisa-hombre-blanca-1-3.jpg"
  },
  {
    id: 22,
    nombre: "Camisa Azul Artesanal",
    publico: "mas",
    descripcion: "Camisa azul de diseño artesanal, una obra maestra de la tradición mexicana.",
    precio: 425,
    origen: "jacalteco",
    color: "azul",
    cantidad: 25,
    talla: "2",
    materiales: "Algodón orgánico cultivado localmente",
    sugerencia: "Ideal para días frescos y ocasiones especiales.",
    adicional: "Creada a mano por talentosos artesanos de la región.",
    tipo:"camisa",
    imagen1: "./src/img/ropa/camisa-hombre-azul-1-1.jpg",
    imagen2: "./src/img/ropa/camisa-hombre-azul-1-2.jpg",
    imagen3: "./src/img/ropa/camisa-hombre-azul-1-3.jpg"
  },
  {
    id: 23,
    nombre: "Camisa Negra Artesanal",
    publico: "mas",
    descripcion: "Camisa negra de diseño artesanal, una obra maestra de la tradición mexicana.",
    precio: 425,
    origen: "jacalteco",
    color: "negro",
    cantidad: 25,
    talla: "2",
    materiales: "Algodón orgánico cultivado localmente",
    sugerencia: "Ideal para días frescos y ocasiones especiales.",
    adicional: "Creada a mano por talentosos artesanos de la región.",
    tipo:"camisa",
    imagen1: "./src/img/ropa/camisa-hombre-negro-1-1.jpg",
    imagen2: "./src/img/ropa/camisa-hombre-negro-1-2.jpg",
    imagen3: "./src/img/ropa/camisa-hombre-negro-1-3.jpg"
  },
  {
    id: 24,
    nombre: "Camisa Hombre azul Manga larga",
    publico: "mas",
    descripcion: "Elegante camisa azul de manga larga para hombre, confeccionada a mano con pasión artesanal.",
    precio: 650,
    origen: "mazahua",
    color: "azul",
    cantidad: 25,
    talla: "2",
    materiales: "Algodón tejido a mano",
    sugerencia: "Perfecta para eventos formales y ocasiones especiales.",
    adicional: "Elaborada por artesanos locales, cada detalle es un tributo a la dedicación.",
    tipo:"camisa",
    imagen1: "./src/img/ropa/camisa-hombre-azul-2-1.jpg",
    imagen2: "./src/img/ropa/camisa-hombre-azul-2-2.jpg",
    imagen3: "./src/img/ropa/camisa-hombre-azul-2-3.jpg"
  },
  {
    id: 25,
    nombre: "Camisa Hombre Negra Manga larga",
    publico: "mas",
    descripcion: "Elegante camisa negra de manga larga para hombre, confeccionada a mano con pasión artesanal.",
    precio: 750,
    origen: "mazahua",
    color: "negro",
    cantidad: 25,
    talla: "2",
    materiales: "Algodón tejido a mano",
    sugerencia: "Perfecta para eventos formales y ocasiones especiales.",
    adicional: "Elaborada por artesanos locales, cada detalle es un tributo a la dedicación.",
    tipo:"camisa",
    imagen1: "./src/img/ropa/camisa-hombre-negro-2-1.jpg",
    imagen2: "./src/img/ropa/camisa-hombre-negro-2-2.jpg",
    imagen3: "./src/img/ropa/camisa-hombre-negro-2-3.jpg"
  },
  {
    id: 26,
    nombre: "Camisa Hombre Blanca Manga larga",
    publico: "mas",
    descripcion: "Elegante camisa blanca de manga larga para hombre, confeccionada a mano con pasión artesanal.",
    precio: 650,
    origen: "mazahua",
    color: "blanco",
    cantidad: 25,
    talla: "2",
    materiales: "Algodón tejido a mano",
    sugerencia: "Perfecta para eventos formales y ocasiones especiales.",
    adicional: "Elaborada por artesanos locales, cada detalle es un tributo a la dedicación.",
    tipo:"camisa",
    imagen1: "./src/img/ropa/camisa-hombre-blanca-2-1.jpg",
    imagen2: "./src/img/ropa/camisa-hombre-blanca-2-2.jpg",
    imagen3: "./src/img/ropa/camisa-hombre-blanca-2-3.jpg"
  },
  {
    id: 27,
    nombre: "Camisa bordada Hombre azul",
    publico: "mas",
    descripcion: "Camisa azul bordada a mano para hombre, un símbolo de la dedicación artesanal y la elegancia mexicana.",
    precio: 550,
    origen: "totonaca",
    color: "azul",
    cantidad: 25,
    talla: "2",
    materiales: "Algodón de alta calidad con bordados hechos a mano",
    sugerencia: "Ideal para días casuales con un toque distintivo.",
    adicional: "Cada puntada es un tributo a la habilidad de los artesanos locales.",
    tipo:"camisa",
    imagen1: "./src/img/ropa/camisa-hombre-azul-3-1.jpg",
    imagen2: "./src/img/ropa/camisa-hombre-azul-3-2.jpg",
    imagen3: "./src/img/ropa/camisa-hombre-azul-3-3.jpg"
  },
  {
    id: 28,
    nombre: "Camisa bordada Hombre Blanca",
    publico: "mas",
    descripcion: "Camisa blanca bordada a mano para hombre, un símbolo de la dedicación artesanal y la elegancia mexicana.",
    precio: 450,
    origen: "totonaca",
    color: "blanco",
    cantidad: 25,
    talla: "2",
    materiales: "Algodón de alta calidad con bordados hechos a mano",
    sugerencia: "Ideal para días casuales con un toque distintivo.",
    adicional: "Cada puntada es un tributo a la habilidad de los artesanos locales.",
    tipo:"camisa",
    imagen1: "./src/img/ropa/camisa-hombre-blanca-3-1.jpg",
    imagen2: "./src/img/ropa/camisa-hombre-blanca-3-2.jpg",
    imagen3: "./src/img/ropa/camisa-hombre-blanca-3-3.jpg"
  },
  {
    id: 29,
    nombre: "Camisa bordada Hombre Negra",
    publico: "mas",
    descripcion: "Camisa negra bordada a mano para hombre, un símbolo de la dedicación artesanal y la elegancia mexicana.",
    precio: 550,
    origen: "totonaca",
    color: "negro",
    cantidad: 25,
    talla: "2",
    materiales: "Algodón de alta calidad con bordados hechos a mano",
    sugerencia: "Ideal para días casuales con un toque distintivo.",
    adicional: "Cada puntada es un tributo a la habilidad de los artesanos locales.",
    tipo:"camisa",
    imagen1: "./src/img/ropa/camisa-hombre-negro-3-1.jpg",
    imagen2: "./src/img/ropa/camisa-hombre-negro-3-2.jpg",
    imagen3: "./src/img/ropa/camisa-hombre-negro-3-3.jpg"
  },
  {
    id: 30,
    nombre: "Camisa infantil azul",
    publico: "inf",
    descripcion: "Camisa azul para niños, confeccionada a mano con amor y tradición mexicana.",
    precio: 350,
    origen: "nahua",
    color: "azul",
    cantidad: 25,
    talla: "2",
    materiales: "Algodón suave y natural",
    sugerencia: "Perfecta para días llenos de diversión y aventuras.",
    adicional: "Cada puntada refleja la habilidad y dedicación de nuestros artesanos locales.",
    tipo:"camisa",
    imagen1: "./src/img/ropa/camisa-infantil-azul-1.jpg",
    imagen2: "./src/img/ropa/camisa-infantil-azul-2.jpg",
    imagen3: "./src/img/ropa/camisa-infantil-azul-3.jpg"
  },
  {
    id: 31,
    nombre: "Camisa infantil blanco",
    publico: "inf",
    descripcion: "Camisa blanca para niños, confeccionada a mano con amor y tradición mexicana.",
    precio: 300,
    origen: "nahua",
    color: "blanco",
    cantidad: 25,
    talla: "2",
    materiales: "Algodón suave y natural",
    sugerencia: "Perfecta para días llenos de diversión y aventuras.",
    adicional: "Cada puntada refleja la habilidad y dedicación de nuestros artesanos locales.",
    tipo:"camisa",
    imagen1: "./src/img/ropa/camisa-infantil-blanca-1.jpg",
    imagen2: "./src/img/ropa/camisa-infantil-blanca-2.jpg",
    imagen3: "./src/img/ropa/camisa-infantil-blanca-3.jpg"
  },
  {
    id: 32,
    nombre: "Camisa infantil negro",
    publico: "inf",
    descripcion: "Camisa Negro para niños, confeccionada a mano con amor y tradición mexicana.",
    precio: 350,
    origen: "nahua",
    color: "negro",
    cantidad: 25,
    talla: "2",
    materiales: "Algodón suave y natural",
    sugerencia: "Perfecta para días llenos de diversión y aventuras.",
    adicional: "Cada puntada refleja la habilidad y dedicación de nuestros artesanos locales.",
    tipo:"camisa",
    imagen1: "./src/img/ropa/camisa-infantil-negra-1.jpg",
    imagen2: "./src/img/ropa/camisa-infantil-negra-2.jpg",
    imagen3: "./src/img/ropa/camisa-infantil-negra-3.jpg"
  }
  


];

function mostrarArreglo() {
  // Obtener el arreglo del localStorage
  var listaProductosJSON = localStorage.getItem('listaProductos');

  // Convertir la cadena JSON nuevamente a un arreglo
  var listaProductos = JSON.parse(listaProductosJSON);

  // Agrega los productos a un arreglo para que este sea un arreglo de objetos
  var productos = [];

  for (i = 0; i < listaProductos.length; i++) {
    productos.push(listaProductos[i]);
  }

  // localStorage.clear();

  return productos;
}


window.addEventListener("load", function (event) {
  event.preventDefault();
  if (this.localStorage.getItem("listaProductos") != null) {
    prodsCargados = mostrarArreglo();

    prod1 = prod1.concat(prodsCargados);

    showProducts(prod1);
  } else {
    showProducts(prod1);
  }
  let img_producto = document.querySelectorAll('.img_producto');
  console.log(img_producto);

  let modal = function (modalClick) {
    const modalToggle = new bootstrap.Modal(document.querySelector(document.querySelectorAll('.btn-producto')[modalClick].getAttribute("data-bs-target")));
    modalToggle.toggle();
  };//Function click

  img_producto.forEach((imagen, i) => {
    imagen.addEventListener('click', () => {
      modal(i);
    })
  });

})




