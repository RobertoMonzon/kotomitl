let filt_mas = document.getElementById("filt_mas");
let filt_fem = document.getElementById("filt_fem");
let filt_inf = document.getElementById("filt_inf");
let filt_cat = document.getElementById("filt_cat");

let filt_mas2 = document.getElementById("filt_mas2");
let filt_fem2 = document.getElementById("filt_fem2");
let filt_inf2 = document.getElementById("filt_inf2");
let filt_Scat2 = document.getElementById("filt_cat2");


function showProducts(prods) {

  const mainProds = document.getElementById("main__prods");
  mainProds.innerHTML = prods.map(prod => `
    
  <!-- productos-->
                    <div class="col" style="margin-bottom: 1rem;">
                        <div class="card card_producto card__team h-100">
                            <div style="text-align: center;" class="img_producto">
                                <img src="${prod.image}"
                                    style="width: auto; height: 150px; margin-top: 1rem;"
                                    class="img-fluid rounded" alt="${prod.title}">
                            </div>
                            <div class="card-body">
                                <div class="title__card">
                                    <span>${prod.title}</span>
                                </div>
                                <div class="subtitle__card">
                                    <span>${prod.Origen}</span>
                                </div>
                                <div class="subtitle__card">
                                    <span>$ ${prod.price}</span>
                                </div>
                                <p class="card-text" style="text-align: justify;">${prod.description.slice(0, 75)}...</p>
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
                            
                            <div class="modal-dialog modal-xl modal-dialog-centered mx-auto">
                            <div class="modal-content" id="modal-contenido">
                                <div class="modal-header">
                                    <h6 class="modal-title" style="margin-left:1rem;"><strong>${prod.title}</strong></h6>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <div class="container-fluid text-center" id="singleprod">
                                <div class="row" style="width: 100%;">
                                  <div class="col my-auto" style="width: 30%;" id="col1">
                                    <ul class="list-group" id=miniaturas>
                                        <li class="list-group-item" style="width: 70%;"><img src="${prod.image}" onclick="cambiarimagen(this)" class="rounded mx-auto d-block img-pequena" alt="..."></li>
                                        <li class="list-group-item" style="width: 70%"><img src="${prod.image2}"  onclick="cambiarimagen(this)" class="rounded mx-auto d-block img-pequena" alt="..."></li>
                                        <li class="list-group-item" style="width: 70%"><img src="${prod.image3}" onclick="cambiarimagen(this)" class="rounded mx-auto d-block img-pequena" alt="..." ></li>
                            
                                      </ul>
                                  </div>
                                  <div class="col" style="width: 50%;align-items: center;" id="main-image">
                                    <img src="${prod.image}"  id="img-grande" class="rounded mx-auto d-block" alt="..." " style=" max-width: 95%; max-height: 95%;">
                                  </div>
                                  <div class="col" style="width: 40%;">
                                    <!--title del producto-->
                                    <h5 id="title_producto">Precio: $ ${prod.price}</h5>
                                    <div class="container text-center">
                                        
                                      </div>
                                    

              
                                      <!--Talla-->
<div class="container text-center">
  <h4 id="titulo-tallas">Tallas</h4>
  <div class="d-flex justify-content-center">
        <div class="form-check form-check-inline formtallas talla-conjunto">    
          <span class="form-check-label label-tallas" for="inlineRadio1">C</span>
          <input id="tCh" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
            value="option1">
        </div>
        <div class="form-check form-check-inline formtallas talla-conjunto">
          <span class="form-check-label label-tallas" for="inlineRadio2">M</span>
          <input id="tM" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
            value="option2">
        </div>
        <div class="form-check form-check-inline formtallas talla-conjunto">
          <span class="form-check-label label-tallas" for="inlineRadio3">G</span>
          <input id="tG" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
            value="option3">
        </div>
        <div class="form-check form-check-inline formtallas talla-conjunto">
          <span class="form-check-label label-tallas" for="inlineRadio4">EG</span>
          <input id="tXg" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4"
            value="option4">
        </div>
  </div>
</div>
                            
                                      <!--description-->
                                      <div class="descriptiones-modal mt-5">
                                        <p class="codigo">Descripción</p>
                                        <p id="desc-prod">${prod.description}</p>
                                        
                                        <p class="codigo">Detalles</p>
                                        <br>
                                        <br>
                                        <ul id="lista-desc" style="text-align:left;">
                                            <li>${prod.Desc1}</li>
                                            <li>${prod.Desc2}</li>
                                            <li>${prod.Desc3}</li>
                                            
                                        </ul>
                                      </div>
                                      <!--Botones-->
                                    
                                      
                                    
                            
                                  </div>
                                </div>
                              </div>
                                <div class="modal-footer">

                                
                                <button type="button" class="btn btnmodal btn-success" id="comprar">Comprar</button>
                                <button type="button" class="btn btnmodal btn-warning" id="carrito">Carrito</button>
                                

                                    <button type="button" class="btn btnmodal btn-outline-danger" data-bs-dismiss="modal" id="cerrar">Cerrar</button>
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
  showProducts(prod1.filter(prod => prod.gen == "mas"));

});

filt_fem.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.gen == "fem"));
});

filt_inf.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.gen == "inf"));
});

// botones2

filt_cat2.addEventListener("click", function (event) {
  showProducts(prod1);

});

filt_mas2.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.gen == "mas"));

});

filt_fem2.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.gen == "fem"));
});

filt_inf2.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.gen == "inf"));
});


prod1 = [

  {
    id:1,
    title:"Rebozo azul",
    gen:"fem",
    description:"Exquisito rebozo artesanal tejido con cariño a mano por hábiles artesanos",
    price:400,
    Origen:"Náhuatl",
    color:"azul",
    cantidad:"100",
    talla:"1",
    Desc1:"100 % Algodón",
    Desc2:"Perfecta para un dia frio",
    Desc3:"Elaboración artesanal",
    tipo:"rebozo",
    image:"./src/img/ropa/rebozo-azul-1.jpg",
    image2:"./src/img/ropa/rebozo-azul-2.jpg",
    image3:"./src/img/ropa/rebozo-azul-3.jpg"
  },

  {
    id:2,
    title:"Rebozo blanco",
    gen:"fem",
    description:"Exquisito rebozo artesanal tejido con cariño a mano por hábiles artesanos",
    price:380,
    Origen:"Náhuatl",
    color:"blanco",
    cantidad:"100",
    talla:"1",
    Desc1:"100 % Algodón",
    Desc2:"Perfecta para un dia frio",
    Desc3:"Elaboración artesanal",
    tipo:"rebozo",
    image:"./src/img/ropa/rebozo-blanco-1.jpg",
    image2:"./src/img/ropa/rebozo-blanco-2.jpg",
    image3:"./src/img/ropa/rebozo-blanco-3.jpg"
  },

  {
    id: 3,
    title:"Rebozo negro",
    gen:"fem",
    description:"Exquisito rebozo artesanal tejido con cariño a mano por hábiles artesanos",
    price:400,
    Origen:"Náhuatl",
    color:"negro",
    cantidad:"100",
    talla:"1",
    Desc1:"100 % Algodón",
    Desc2:"Perfecta para un dia frio",
    Desc3:"Elaboración artesanal",
    tipo:"rebozo",
    image:"./src/img/ropa/rebozo-negro-1.jpg",
    image2:"./src/img/ropa/rebozo-negro-2.jpg",
    image3:"./src/img/ropa/rebozo-negro-3.jpg"
  },


  {
    id: 4,
    title:"Vestido azul sin mangas",
    gen:"fem",
    description:"El vestido artesanal sin mangas está confeccionado con telas de la más alta calidad, seleccionadas cuidadosamente para proporcionar un tacto suave y una caída elegante.",
    price: 1500,
    Origen:"Otomi",
    color:"azul",
    cantidad:"40",
    talla:"2",
    Desc1:"100 % Algodón",
    Desc2:"lavar",
    Desc3:"elegante vestido para fiestas",
    tipo:"vestido",
    image:"./src/img/ropa/vestido-azul-1-1.jpg",
    image2:"./src/img/ropa/vestido-azul-1-2.jpg",
    image3:"./src/img/ropa/vestido-azul-1-3.jpg"
  },

  {
    id: 5,
    title:"Vestido blanco sin mangas",
    gen:"fem",
    description:"El vestido artesanal sin mangas está confeccionado con telas de la más alta calidad, seleccionadas cuidadosamente para proporcionar un tacto suave y una caída elegante.",
    price: 1300,
    Origen:"Otomi",
    color:"blanco",
    cantidad:"40",
    talla:"2",
    Desc1:"100 % Algodón",
    Desc2:"lavar",
    Desc3:"elegante vestido para fiestas",
    tipo:"vestido",
    image:"./src/img/ropa/vestido-blanco-1-1.jpg",
    image2:"./src/img/ropa/vestido-blanco-1-2.jpg",
    image3:"./src/img/ropa/vestido-blanco-1-3.jpg"
  },


  {
    id: 6,
    title:"Vestido negro sin mangas",
    gen:"fem",
    description:"El vestido artesanal sin mangas está confeccionado con telas de la más alta calidad, seleccionadas cuidadosamente para proporcionar un tacto suave y una caída elegante.",
    price: 1500,
    Origen:"Otomi",
    color:"negro",
    cantidad:"40",
    talla:"2",
    Desc1:"100 % Algodón",
    Desc2:"lavar",
    Desc3:"elegante vestido para fiestas",
    tipo:"vestido",
    image:"./src/img/ropa/vestido-negro-1-1.jpg",
    image2:"./src/img/ropa/vestido-negro-1-2.jpg",
    image3:"./src/img/ropa/vestido-negro-1-3.jpg"
  },




  {
    id: 7,
    title:"Vestido azul hombros descubiertos",
    gen:"fem",
    description:"El vestido artesanal con hombros descubiertos está confeccionado con telas de la más alta calidad, seleccionadas cuidadosamente para proporcionar un tacto suave y una caída elegante.",
    price: 1700,
    Origen:"Otomi",
    color:"azul",
    cantidad:"40",
    talla:"2",
    Desc1:"100 % Algodón",
    Desc2:"lavar",
    Desc3:"elegante vestido para fiestas",
    tipo:"vestido",
    image:"./src/img/ropa/vestido-azul-2-1.jpg",
    image2:"./src/img/ropa/vestido-azul-2-2.jpg",
    image3:"./src/img/ropa/vestido-azul-2-3.jpg"
  },

  {
    id: 8,
    title:"Vestido blanco hombros descubiertos",
    gen:"fem",
    description:"El vestido artesanal con hombros descubiertos está confeccionado con telas de la más alta calidad, seleccionadas cuidadosamente para proporcionar un tacto suave y una caída elegante.",
    price: 1500,
    Origen:"Otomi",
    color:"blanco",
    cantidad:"40",
    talla:"2",
    Desc1:"100 % Algodón",
    Desc2:"lavar",
    Desc3:"elegante vestido para fiestas",
    tipo:"vestido",
    image:"./src/img/ropa/vestido-blanco-2-1.jpg",
    image2:"./src/img/ropa/vestido-blanco-2-2.jpg",
    image3:"./src/img/ropa/vestido-blanco-2-3.jpg"
  },


  {
    id: 9,
    title:"Vestido negro hombros descubiertos",
    gen:"fem",
    description:"El vestido artesanal con hombros descubiertos está confeccionado con telas de la más alta calidad, seleccionadas cuidadosamente para proporcionar un tacto suave y una caída elegante.",
    price: 1700,
    Origen:"Otomi",
    color:"negro",
    cantidad:"40",
    talla:"2",
    Desc1:"100 % Algodón",
    Desc2:"lavar",
    Desc3:"elegante vestido para fiestas",
    tipo:"vestido",
    image:"./src/img/ropa/vestido-negro-2-1.jpg",
    image2:"./src/img/ropa/vestido-negro-2-2.jpg",
    image3:"./src/img/ropa/vestido-negro-2-3.jpg"
  },


  // Mujer


  {
    id: 11,
    title:"Vestido azul",
    gen:"fem",
    description:"El vestido floreado artesanal está confeccionado con telas de alta calidad, seleccionadas con esmero para ofrecer un ajuste cómodo y una sensación suave contra la piel.",
    price: 1200,
    Origen:"Otomi",
    color:"azul",
    cantidad:"40",
    talla:"2",
    Desc1:"100 % Algodón",
    Desc2:"lavar",
    Desc3:"elegante vestido para fiestas",
    tipo:"vestido",
    image:"./src/img/ropa/vestido-azul-3-1.jpg",
    image2:"./src/img/ropa/vestido-azul-3-2.jpg",
    image3:"./src/img/ropa/vestido-azul-3-3.jpg"
  },

  {
    id: 12,
    title:"Vestido blanco",
    gen:"fem",
    description:"El vestido floreado artesanal está confeccionado con telas de alta calidad, seleccionadas con esmero para ofrecer un ajuste cómodo y una sensación suave contra la piel.",
    price: 1000,
    Origen:"Otomi",
    color:"blanco",
    cantidad:"40",
    talla:"2",
    Desc1:"100 % Algodón",
    Desc2:"lavar",
    Desc3:"elegante vestido para fiestas",
    tipo:"vestido",
    image:"./src/img/ropa/vestido-blanco-3-1.jpg",
    image2:"./src/img/ropa/vestido-blanco-3-2.jpg",
    image3:"./src/img/ropa/vestido-blanco-3-3.jpg"
  },


  {
    id: 14,
    title:"Vestido negro",
    gen:"fem",
    description:"El vestido floreado artesanal está confeccionado con telas de alta calidad, seleccionadas con esmero para ofrecer un ajuste cómodo y una sensación suave contra la piel.",
    price: 1200,
    Origen:"Otomi",
    color:"negro",
    cantidad:"40",
    talla:"2",
    Desc1:"100 % Algodón",
    Desc2:"lavar",
    Desc3:"elegante vestido para fiestas",
    tipo:"vestido",
    image:"./src/img/ropa/vestido-negro-3-1.jpg",
    image2:"./src/img/ropa/vestido-negro-3-2.jpg",
    image3:"./src/img/ropa/vestido-negro-3-3.jpg"
  },

  {
    id: 15,
    title:"Vestido infantil azul",
    gen:"inf",
    description:"La comodidad y la seguridad de los más pequeños son una prioridad en este vestido artesanal.",
    price: 500,
    Origen:"Otomi",
    color:"azul",
    cantidad:"40",
    talla:"2",
    Desc1:"100 % Algodón",
    Desc2:"lavar",
    Desc3:"elegante vestido para fiestas",
    tipo:"vestido",
    image:"./src/img/ropa/vestido-infantil-azul-1.jpg",
    image2:"./src/img/ropa/vestido-infantil-azul-2.jpg",
    image3:"./src/img/ropa/vestido-infantil-azul-3.jpg"
  },

  {
    id: 16,
    title:"Vestido infantil blanco",
    gen:"inf",
    description:"La comodidad y la seguridad de los más pequeños son una prioridad en este vestido artesanal.",
    price: 400,
    Origen:"Otomi",
    color:"blanco",
    cantidad:"40",
    talla:"2",
    Desc1:"100 % Algodón",
    Desc2:"lavar",
    Desc3:"elegante vestido para fiestas",
    tipo:"vestido",
    image:"./src/img/ropa/vestido-infantil-blanco-1.jpg",
    image2:"./src/img/ropa/vestido-infantil-blanco-2.jpg",
    image3:"./src/img/ropa/vestido-infantil-blanco-3.jpg"
  },
  {
    id: 17,
    title:"Vestido infantil negro",
    gen:"inf",
    description:"La comodidad y la seguridad de los más pequeños son una prioridad en este vestido artesanal.",
    price: 500,
    Origen:"Otomi",
    color:"negro",
    cantidad:"40",
    talla:"2",
    Desc1:"100 % Algodón",
    Desc2:"lavar",
    Desc3:"elegante vestido para fiestas",
    tipo:"vestido",
    image:"./src/img/ropa/vestido-infantil-negro-1.jpg",
    image2:"./src/img/ropa/vestido-infantil-negro-2.jpg",
    image3:"./src/img/ropa/vestido-infantil-negro-3.jpg"
  },

  {
    id: 18,
    title: "Bufanda blanca",
    gen: "fem",
    description: "Bufanda artesanal azul, tejida con pasión y tradición mexicana.",
    price: 345,
    Origen: "maya",
    color: "blanco",
    cantidad: 25,
    talla: "2",
    Desc1: "Fibras naturales y orgánicas de la región",
    Desc2: "Ideal para abrigarte con autenticidad en días fríos.",
    Desc3: "Elaborada a mano por artesanos locales.",
    tipo:"bufanda",
    image:"./src/img/ropa/bufanda-blanca-1.jpg",
    image2:"./src/img/ropa/bufanda-blanca-2.jpg",
    image3:"./src/img/ropa/bufanda-blanca-3.jpg"
  },
  {
    id: 19,
    title: "Bufanda Azul",
    gen: "fem",
    description: "Bufanda artesanal azul, tejida con pasión y tradición mexicana.",
    price: 400,
    Origen: "maya",
    color: "azul",
    cantidad: 25,
    talla: "2",
    Desc1: "Fibras naturales y orgánicas de la región",
    Desc2: "Ideal para abrigarte con autenticidad en días fríos.",
    Desc3: "Elaborada a mano por artesanos locales.",
    tipo:"bufanda",
    image: "./src/img/ropa/bufanda-azul-1.jpg",
    image2: "./src/img/ropa/bufanda-azul-2.jpg",
    image3: "./src/img/ropa/bufanda-azul-3.jpg"
  },
  {
    id: 20,
    title: "Bufanda Negra",
    gen: "fem",
    description: "Bufanda artesanal azul, tejida con pasión y tradición mexicana.",
    price: 400,
    Origen: "maya",
    color: "azul",
    cantidad: 25,
    talla: "2",
    Desc1: "Fibras naturales y orgánicas de la región",
    Desc2: "Ideal para abrigarte con autenticidad en días fríos.",
    Desc3: "Elaborada a mano por artesanos locales.",
    tipo:"bufanda",
    image: "./src/img/ropa/bufanda-negra-1.jpg",
    image2: "./src/img/ropa/bufanda-negra-2.jpg",
    image3: "./src/img/ropa/bufanda-negra-3.jpg"
  },
  {
    id: 21,
    title: "Camisa Blanca Artesanal",
    gen: "mas",
    description: "Camisa blanca de diseño artesanal, una obra maestra de la tradición mexicana.",
    price: 375,
    Origen: "jacalteco",
    color: "blanco",
    cantidad: 25,
    talla: "2",
    Desc1: "100 % Algodón orgánico cultivado localmente",
    Desc2: "Ideal para días frescos y ocasiones especiales.",
    Desc3: "Creada a mano por talentosos artesanos de la región.",
    tipo:"camisa",
    image: "./src/img/ropa/camisa-hombre-blanca-1-1.jpg",
    image2: "./src/img/ropa/camisa-hombre-blanca-1-2.jpg",
    image3: "./src/img/ropa/camisa-hombre-blanca-1-3.jpg"
  },
  {
    id: 22,
    title: "Camisa Azul Artesanal",
    gen: "mas",
    description: "Camisa azul de diseño artesanal, una obra maestra de la tradición mexicana.",
    price: 425,
    Origen: "jacalteco",
    color: "azul",
    cantidad: 25,
    talla: "2",
    Desc1: "100 % Algodón orgánico cultivado localmente",
    Desc2: "Ideal para días frescos y ocasiones especiales.",
    Desc3: "Creada a mano por talentosos artesanos de la región.",
    tipo:"camisa",
    image: "./src/img/ropa/camisa-hombre-azul-1-1.jpg",
    image2: "./src/img/ropa/camisa-hombre-azul-1-2.jpg",
    image3: "./src/img/ropa/camisa-hombre-azul-1-3.jpg"
  },
  {
    id: 23,
    title: "Camisa Negra Artesanal",
    gen: "mas",
    description: "Camisa negra de diseño artesanal, una obra maestra de la tradición mexicana.",
    price: 425,
    Origen: "jacalteco",
    color: "negro",
    cantidad: 25,
    talla: "2",
    Desc1: "100 % Algodón orgánico cultivado localmente",
    Desc2: "Ideal para días frescos y ocasiones especiales.",
    Desc3: "Creada a mano por talentosos artesanos de la región.",
    tipo:"camisa",
    image: "./src/img/ropa/camisa-hombre-negro-1-1.jpg",
    image2: "./src/img/ropa/camisa-hombre-negro-1-2.jpg",
    image3: "./src/img/ropa/camisa-hombre-negro-1-3.jpg"
  },
  {
    id: 24,
    title: "Camisa Hombre azul Manga larga",
    gen: "mas",
    description: "Elegante camisa azul de manga larga para hombre, confeccionada a mano con pasión artesanal.",
    price: 650,
    Origen: "mazahua",
    color: "azul",
    cantidad: 25,
    talla: "2",
    Desc1: "100 % Algodón tejido a mano",
    Desc2: "Perfecta para eventos formales y ocasiones especiales.",
    Desc3: "Elaborada por artesanos locales, cada detalle es un tributo a la dedicación.",
    tipo:"camisa",
    image: "./src/img/ropa/camisa-hombre-azul-2-1.jpg",
    image2: "./src/img/ropa/camisa-hombre-azul-2-2.jpg",
    image3: "./src/img/ropa/camisa-hombre-azul-2-3.jpg"
  },
  {
    id: 25,
    title: "Camisa Hombre Negra Manga larga",
    gen: "mas",
    description: "Elegante camisa negra de manga larga para hombre, confeccionada a mano con pasión artesanal.",
    price: 750,
    Origen: "mazahua",
    color: "negro",
    cantidad: 25,
    talla: "2",
    Desc1: "100 % Algodón tejido a mano",
    Desc2: "Perfecta para eventos formales y ocasiones especiales.",
    Desc3: "Elaborada por artesanos locales, cada detalle es un tributo a la dedicación.",
    tipo:"camisa",
    image: "./src/img/ropa/camisa-hombre-negro-2-1.jpg",
    image2: "./src/img/ropa/camisa-hombre-negro-2-2.jpg",
    image3: "./src/img/ropa/camisa-hombre-negro-2-3.jpg"
  },
  {
    id: 26,
    title: "Camisa Hombre Blanca Manga larga",
    gen: "mas",
    description: "Elegante camisa blanca de manga larga para hombre, confeccionada a mano con pasión artesanal.",
    price: 650,
    Origen: "mazahua",
    color: "blanco",
    cantidad: 25,
    talla: "2",
    Desc1: "100 % Algodón tejido a mano",
    Desc2: "Perfecta para eventos formales y ocasiones especiales.",
    Desc3: "Elaborada por artesanos locales, cada detalle es un tributo a la dedicación.",
    tipo:"camisa",
    image: "./src/img/ropa/camisa-hombre-blanca-2-1.jpg",
    image2: "./src/img/ropa/camisa-hombre-blanca-2-2.jpg",
    image3: "./src/img/ropa/camisa-hombre-blanca-2-3.jpg"
  },
  {
    id: 27,
    title: "Camisa bordada Hombre azul",
    gen: "mas",
    description: "Camisa azul bordada a mano para hombre, un símbolo de la dedicación artesanal y la elegancia mexicana.",
    price: 550,
    Origen: "totonaca",
    color: "azul",
    cantidad: 25,
    talla: "2",
    Desc1: "100 % Algodón de alta calidad con bordados hechos a mano",
    Desc2: "Ideal para días casuales con un toque distintivo.",
    Desc3: "Cada puntada es un tributo a la habilidad de los artesanos locales.",
    tipo:"camisa",
    image: "./src/img/ropa/camisa-hombre-azul-3-1.jpg",
    image2: "./src/img/ropa/camisa-hombre-azul-3-2.jpg",
    image3: "./src/img/ropa/camisa-hombre-azul-3-3.jpg"
  },
  {
    id: 28,
    title: "Camisa bordada Hombre Blanca",
    gen: "mas",
    description: "Camisa blanca bordada a mano para hombre, un símbolo de la dedicación artesanal y la elegancia mexicana.",
    price: 450,
    Origen: "totonaca",
    color: "blanco",
    cantidad: 25,
    talla: "2",
    Desc1: "100 % Algodón de alta calidad con bordados hechos a mano",
    Desc2: "Ideal para días casuales con un toque distintivo.",
    Desc3: "Cada puntada es un tributo a la habilidad de los artesanos locales.",
    tipo:"camisa",
    image: "./src/img/ropa/camisa-hombre-blanca-3-1.jpg",
    image2: "./src/img/ropa/camisa-hombre-blanca-3-2.jpg",
    image3: "./src/img/ropa/camisa-hombre-blanca-3-3.jpg"
  },
  {
    id: 29,
    title: "Camisa bordada Hombre Negra",
    gen: "mas",
    description: "Camisa negra bordada a mano para hombre, un símbolo de la dedicación artesanal y la elegancia mexicana.",
    price: 550,
    Origen: "totonaca",
    color: "negro",
    cantidad: 25,
    talla: "2",
    Desc1: "100 % Algodón de alta calidad con bordados hechos a mano",
    Desc2: "Ideal para días casuales con un toque distintivo.",
    Desc3: "Cada puntada es un tributo a la habilidad de los artesanos locales.",
    tipo:"camisa",
    image: "./src/img/ropa/camisa-hombre-negro-3-1.jpg",
    image2: "./src/img/ropa/camisa-hombre-negro-3-2.jpg",
    image3: "./src/img/ropa/camisa-hombre-negro-3-3.jpg"
  },
  {
    id: 30,
    title: "Camisa infantil azul",
    gen: "inf",
    description: "Camisa azul para niños, confeccionada a mano con amor y tradición mexicana.",
    price: 350,
    Origen: "nahua",
    color: "azul",
    cantidad: 25,
    talla: "2",
    Desc1: "100 % Algodón suave y natural",
    Desc2: "Perfecta para días llenos de diversión y aventuras.",
    Desc3: "Cada puntada refleja la habilidad y dedicación de nuestros artesanos locales.",
    tipo:"camisa",
    image: "./src/img/ropa/camisa-infantil-azul-1.jpg",
    image2: "./src/img/ropa/camisa-infantil-azul-2.jpg",
    image3: "./src/img/ropa/camisa-infantil-azul-3.jpg"
  },
  {
    id: 31,
    title: "Camisa infantil blanco",
    gen: "inf",
    description: "Camisa blanca para niños, confeccionada a mano con amor y tradición mexicana.",
    price: 300,
    Origen: "nahua",
    color: "blanco",
    cantidad: 25,
    talla: "2",
    Desc1: "100 % Algodón suave y natural",
    Desc2: "Perfecta para días llenos de diversión y aventuras.",
    Desc3: "Cada puntada refleja la habilidad y dedicación de nuestros artesanos locales.",
    tipo:"camisa",
    image: "./src/img/ropa/camisa-infantil-blanca-1.jpg",
    image2: "./src/img/ropa/camisa-infantil-blanca-2.jpg",
    image3: "./src/img/ropa/camisa-infantil-blanca-3.jpg"
  },
  {
    id: 32,
    title: "Camisa infantil negro",
    gen: "inf",
    description: "Camisa Negro para niños, confeccionada a mano con amor y tradición mexicana.",
    price: 350,
    Origen: "nahua",
    color: "negro",
    cantidad: 25,
    talla: "2",
    Desc1: "100 % Algodón suave y natural",
    Desc2: "Perfecta para días llenos de diversión y aventuras.",
    Desc3: "Cada puntada refleja la habilidad y dedicación de nuestros artesanos locales.",
    tipo:"camisa",
    image: "./src/img/ropa/camisa-infantil-negra-1.jpg",
    image2: "./src/img/ropa/camisa-infantil-negra-2.jpg",
    image3: "./src/img/ropa/camisa-infantil-negra-3.jpg"
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




