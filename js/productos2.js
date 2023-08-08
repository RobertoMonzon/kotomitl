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
                        <div class="card card__team h-100">
                            <div style="text-align: center;">
                                <img src="${prod.image}"
                                    style="width: 150px; height: 150px; margin-top: 1rem;"
                                    class="img-fluid rounded" alt="${prod.title}">
                            </div>
                            <div class="card-body">
                                <div class="title__card">
                                    <span>${prod.title.slice(0, 30)}</span>
                                </div>
                                <div class="subtitle__card">
                                    <span>${prod.Origen}</span>
                                </div>
                                <p class="card-text" style="text-align: justify;">${prod.description} ... </p>
                            </div>
                            
                            <div style="text-align:right; margin-top:0;">
                            <button type="button" class="btn btn-warning btn-producto" data-bs-toggle="modal" data-bs-target="#exampleModal${prod.id}">
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
                                    <h6 class="modal-title"><strong>${prod.title}</strong></h6>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <div class="container-fluid text-center" id="singleprod">
    <div class="row" style="width: 100%;">
      <div class="col" style="width: 15%;">
        <ul class="list-group">
            <li class="list-group-item"><img src="${prod.image}" class="rounded mx-auto d-block" alt="..." style="width: 75px; height: 150px;"></li>
            <li class="list-group-item"><img src="${prod.image2}" class="rounded mx-auto d-block" alt="..." style="width: 75px; height: 150px;"></li>
            <li class="list-group-item"><img src="${prod.image3}" class="rounded mx-auto d-block" alt="..." style="width: 75px; height: 150px;"></li>

          </ul>
      </div>
      <div class="col" style="width: 50%;" id="imagen-principal">
        <img src="${prod.image}" class="rounded mx-auto d-block" alt="..." " style=" width: 300px; height: 450px;">
      </div>
      <div class="col" style="width: 35%;">
        <!--Nombre del producto-->
        <h5 id="nombre_producto">Precio: $ ${prod.price}</h5>
        <div class="container text-center">
            <div class="row">
              <div class="col">
                <p class="codigo">Codigo:</p>
              </div>
              <div class="col">
                <p class="codigo">${prod.id}</p>
              </div>
            </div>
          </div>
        
        <!--Talla-->
        <div class="container text-center">
            <div class="row">
              <div class="col">
                <p class="codigo">Talla</p>
              </div>
              <div class="col">
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Elige una talla
                    </button>
                    <ul class="dropdown-menu" id="menutallas">
                      <li>Chica</li>
                      <li>Mediana</li>
                      <li>Grande</li>
                      <li>Extra Grande</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        <!--Color-->
        <p class="codigo">Color</p>
        <div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                <label class="form-check-label" for="inlineCheckbox1"><div class="col-1 red"></div></label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                <label class="form-check-label" for="inlineCheckbox2"><div class="col-1 green"></div></label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                <label class="form-check-label" for="inlineCheckbox2"> <div class="col-1" style="background-color: blue;
                width: 10px;
                height: 10px;"></div></label>
              </div>
        </div>

          <!--Descripcion-->
          <div class="descripciones-modal">
            <p>Descripción</p>
            <ul>
                <li>${prod.Desc1}</li>
                <li>${prod.Desc2}</li>
                <li>${prod.Desc3}</li>
                <li>${prod.Origen}</li>
                <p>${prod.description}</p>
            </ul>
          </div>
          <!--Botones-->
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btnmodal btn-secondary">Comprar</button>
            <button type="button" class="btn btnmodal btn-secondary">Carrito</button>
        </div>

        

      </div>
    </div>
  </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btnmodal btn-secondary"
                                        data-bs-dismiss="modal">Cerrar</button>
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



filt_cat.addEventListener("click", function(event){
  showProducts(prod1);
  
});

filt_mas.addEventListener("click", function(event){
  showProducts(prod1.filter(prod => prod.gen == "mas"));
  
});

filt_fem.addEventListener("click", function(event){
  showProducts(prod1.filter(prod => prod.gen == "fem"));
});

filt_inf.addEventListener("click", function(event){
	showProducts(prod1.filter(prod => prod.gen == "inf"));
});

// botones2

filt_cat2.addEventListener("click", function(event){
  showProducts(prod1);
  
});

filt_mas2.addEventListener("click", function(event){
  showProducts(prod1.filter(prod => prod.gen == "mas"));
  
});

filt_fem2.addEventListener("click", function(event){
  showProducts(prod1.filter(prod => prod.gen == "fem"));
});

filt_inf2.addEventListener("click", function(event){
	showProducts(prod1.filter(prod => prod.gen == "inf"));
});











prod1 = [

  { id: 1111, 
    title: "Camisa yucateca infantil", 
    price: 200, 
    description: "Camisa yucateca para niño", 
    Origen: "maya", 
    image: "./src/img/ropa-kotomitl/camisita1-blanco.jpg", 
    image2: "./src/img/ropa-kotomitl/camisita1-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/camisita1-negro.jpg",
    Desc1:"100% de lino",
    Desc2:"Fabricada a mano",
    Desc3:"Fabricada en taller familiar ",
    gen:"inf"},

  { id: 1122, 
    title: "Camisa Yucateca manga corta", 
    price: 540, 
    description: "Preciosa camisa yucateca bordada manga corta a mano!", 
    Origen: "yucateco", 
    image: "./src/img/ropa-kotomitl/camisa1-blanca.jpg", 
    image2: "./src/img/ropa-kotomitl/camisa1-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/camisa1-negra.jpg",
    Desc1:"100% de lino",
    Desc2:"Fabricada a mano",
    Desc3:"Fabricada en taller familiar",
    gen:"mas" },
  
  { id: 1133, 
    title: "Camisa Yucateca manga larga", 
    price: 560, 
    description: "Preciosa camisa yucateca bordada a mano!", 
    Origen: "yucateco", 
    image: "./src/img/ropa-kotomitl/camisa2-blanca.jpg", 
    image2: "./src/img/ropa-kotomitl/camisa2-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/camisa2-negra.jpg",
    Desc1:"100% de lino",
    Desc2:"Fabricada a mano",
    Desc3:"Fabricada en taller familiar",
    gen:"mas" },

  
  { id: 1155, 
    title: "Blusa floreada de lino", 
    price: 360, 
    description: "Preciosa blusa bordada a mano!", 
    Origen: "yucateco", 
    image: "./src/img/ropa-kotomitl/blusa2-blanco.jpg", 
    image2: "./src/img/ropa-kotomitl/blusa2-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/blusa2-negro.jpg",
    Desc1:"100% de lino",
    Desc2:"Fabricada a mano",
    Desc3:"Fabricada en taller familiar",
    gen:"fem" },

{ id: 1166, 
    title: "Blusa floreada de algodón", 
    price: 340, 
    description: "Preciosa blusa de algodon bordada a mano!", 
    Origen: "yucateco", 
    image:  "./src/img/ropa-kotomitl/blusa1-blanco.jpg", 
    image2: "./src/img/ropa-kotomitl/blusa1-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/blusa1-negro.jpg",
    Desc1:"100% de algodo",
    Desc2:"Fabricada a mano",
    Desc3:"Fabricada en taller familiar",
    gen:"fem" },


  { id: 1177, 
    title: "Short infantil", 
    price: 300, 
    description: "short infantile de diferentes estampados", 
    Origen: "maya", 
    image: "./src/img/ropa-kotomitl/shorsito1-blanco.jpg", 
    image2: "./src/img/ropa-kotomitl/shorsito1-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/shorsito1-negro.jpg",
    Desc1:"100% de algodón",
    Desc2:"Diferentes estampados",
    Desc3:"nuevos modelos constantemente ",
    gen:"inf"},


  
  
  { id: 1188, 
    title: "Short artesanal", 
    price: 450, 
    description: "incredible short con patron artesanal",
    Origen:"otomi", 
    image: "./src/img/ropa-kotomitl/short1-blanca.jpg", 
    image2: "./src/img/ropa-kotomitl/short1-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/short1-negra.jpg",
    Desc1:"100% de algodon",
    Desc2:"Diferentes estampados",
    Desc3:"Diseño hecho a mano ",
    gen:"mas"},
  
  { id: 1199, 
    title: "Traje de baño artesanal", 
    price: 700, 
    description: "incredible traje de baño masculino", 
    Origen: "Otomi", 
    image: "./src/img/ropa-kotomitl/short2-blanca.jpg", 
    image2: "./src/img/ropa-kotomitl/short2-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/short2-negra.jpg",
    Desc1:"100% de algodon",
    Desc2:"mismo patron en diferentes colores",
    Desc3:"cuenta con resorte para ajustar a la cintura",
    gen:"mas"},
  

  { id: 2000, 
    title: "Pantalón de lino", 
    price: 900, 
    description: "Elegante pantalón de lino para toda ocación", 
    Origen: "yucateco",      
    image: "/src/img/ropa-kotomitl/pantalon1-blanca.jpg", 
    image2: "./src/img/ropa-kotomitl/pantalon2-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/pantalon2-negra.jpg",
    Desc1:"100% de lino",
    Desc2:"modelos unicos",
    Desc3:"elastico",
    gen:"mas"},
  

  // Mujer
  

  { id: 2222, 
    title: "Vestido floreado", 
    price: 1000, 
    description: "Bellisimo vestido estilo mexicano", 
    Origen: "maya", 
    image: "./src/img/ropa-kotomitl/vestido1-blanco.jpg", 
    image2: "./src/img/ropa-kotomitl/vestido1-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/vestido1-negro.jpg",
    Desc1:"100% de algodón",
    Desc2:"Coloreado de manera artesanal",
    Desc3:"Ideal para el calor",
    gen:"fem"},

  
  
  { id: 2233, 
    title: "Vestido elegante mexicano", 
    price: 1150, 
    description: "incredible vestido con patrones artesanales",
    Origen:"otomi", 
    image: "./src/img/ropa-kotomitl/vestido2-blanco.jpg", 
    image2: "./src/img/ropa-kotomitl/vestido2-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/vestido2-negro.jpg",
    Desc1:"100% de algodon",
    Desc2:"Diferentes estampados",
    Desc3:"ideal para fiestas ",
    gen:"fem"},
  
  { id: 2244, 
    title: "Vestido del lino", 
    price: 1050, 
    description: "incredible vestido con patrones estilo maya", 
    Origen: "Maya", 
    image: "./src/img/ropa-kotomitl/vestido3-blanco.jpg", 
    image2: "./src/img/ropa-kotomitl/vestido3-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/vestido3-negro.jpg",
    Desc1:"100% de lino",
    Desc2:"ideal para la playa",
    Desc3:"cocido a mano",
    gen:"fem"},

  { id: 2255, 
    title: "vestido infantil", 
    price: 300, 
    description: "Comodo vestido de algodon", 
    Origen: "maya", 
    image: "./src/img/ropa-kotomitl/vestidi1-blanco.jpg", 
    image2: "./src/img/ropa-kotomitl/vestidito1-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/vestidito1-negro.jpg",
    Desc1:"100% de algodon",
    Desc2:"Fabricada a mano",
    Desc3:"nuevos modelos constantemente ",
    gen:"inf"},
  
  
  { id: 2266, 
    title: "Sandalias de piel", 
    price: 400, 
    description: "Comodas sandalias de piel", 
    Origen: "maya", 
    image: "./src/img/ropa-kotomitl/sandalias1-blanco-copia.jpg", 
    image2: "./src/img/ropa-kotomitl/sandalias1-azul-copia.jpg", 
    image3: "./src/img/ropa-kotomitl/sandalias1-negro-copia.jpg",
    Desc1:"100% de piel",
    Desc2:"Fabricada a mano",
    Desc3:"nuevos modelos constantemente ",
    gen:"fem"},

{ id: 2277, 
    title: "Sandalias de piel", 
    price: 400, 
    description: "Comodas sandalias de piel", 
    Origen: "maya", 
    image: "./src/img/ropa-kotomitl/sandalias1-blanco.jpg", 
    image2: "./src/img/ropa-kotomitl/sandalias1-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/sandalias1-negro.jpg",
    Desc1:"100% de piel",
    Desc2:"Fabricada a mano",
    Desc3:"nuevos modelos constantemente ",
    gen:"mas"},

  { id: 2288, 
    title: "Zapato de piel", 
    price: 1500, 
    description: "Zapatos de piel para toda occasion ", 
    Origen: "mazahua",
    image: "./src/img/ropa-kotomitl/zapato1-blanca.jpg", 
    image2: "./src/img/ropa-kotomitl/zapato1-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/zapato1-negro.jpg",
    Desc1:"100% de piel",
    Desc2:"Piel curtida de forma artesanal",
    Desc3:"plantilla ortopedica",
    gen:"mas"},

  { id: 2299, 
    title: "Sandalias infantiles", 
    price: 400, 
    description: "Comodas sandalias de piel", 
    Origen: "maya", 
    image: "./src/img/ropa-kotomitl/chanclita1-blanco.jpg", 
    image2: "./src/img/ropa-kotomitl/chanclita1-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/chanclita1-negro.jpg",
    Desc1:"100% de piel",
    Desc2:"Fabricada a mano",
    Desc3:"nuevos modelos constantemente ",
    gen:"inf"},

  { id: 3000, 
    title: "Chal", 
    price: 1500, 
    description: "Elegante chal con patrones mexicanos", 
    Origen: "tlaxcalteca",      
    image: "/src/img/ropa-kotomitl/chal1-blanco.jpg", 
    image2: "./src/img/ropa-kotomitl/chal1-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/chal1-negro.jpg",
    Desc1:"100% de algodo",
    Desc2:"modelos unicos",
    Desc3:"calido",
    gen:"fem"},

  { id: 3311, 
    title: "Bufanda", 
    price: 1100, 
    description: "Hermosa bufanda con patrones artesanales ", 
    Origen: "mazahua",
    image: "./src/img/ropa-kotomitl/bufanda1-blanco.jpg", 
    image2: "./src/img/ropa-kotomitl/bufanda1-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/bufanda1-negro.jpg",
    Desc1:"100% de piel",
    Desc2:"Piel curtida de forma artesanal",
    Desc3:"plantilla ortopedica",
    gen:"fem"},




  { id: 3322, 
    title: "Gorra huicho", 
    price: 200, 
    description: "gorra con patron huichol", 
    Origen: "huichol", 
    image: "./src/img/ropa-kotomitl/gorra1-blanco.jpg", 
    image2: "./src/img/ropa-kotomitl/gorra1-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/gorra1-negro.jpg",
    Desc1:"100% de algodo",
    Desc2:"Adornada a mano",
    Desc3:"nuevos modelos constantemente ",
    gen:"inf"},

  { id: 3333, 
    title: "Poncho mexicano", 
    price: 600, 
    description: "Bellisimo poncho estilo mexicano", 
    Origen: "nahua", 
    image: "./src/img/ropa-kotomitl/poncho2-blanco.jpg", 
    image2: "./src/img/ropa-kotomitl/poncho1-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/poncho1-negro.jpg",
    Desc1:"100% de algodón",
    Desc2:"Coloreado de manera artesanal",
    Desc3:"Imperneable",
    gen:"mas"},

  { id: 3344, 
    title: "pulsera de piel", 
    price: 200, 
    description: "Comodas sandalias de piel", 
    Origen: "maya", 
    image: "./src/img/ropa-kotomitl/pulsera1-blanco.jpg", 
    image2: "./src/img/ropa-kotomitl/pulsera1-azul.jpg", 
    image3: "./src/img/ropa-kotomitl/pulsera1-negro.jpg",
    Desc1:"100% de piel",
    Desc2:"Fabricada a mano",
    Desc3:"variedad de colores ",
    gen:"inf"}    

  
          
  
  ];

  

showProducts(prod1);
