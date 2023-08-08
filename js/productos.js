function addItem(prods) {

    const mainProds = document.getElementById("main__prods");
    prods.forEach(prod => {
        mainProds.insertAdjacentHTML("beforeend",
            `
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
                            <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h6 class="modal-title"><strong>${prod.title}</strong>  </h6>
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
      <div class="col" style="width: 50%;">
        <img src="${prod.image}" class="rounded mx-auto d-block" alt="..." style="width: 300px; height: 450px;">
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
    `
);

});
}


prod1 = [

{ id: 1, title: "Camisa Yucateca manga corta", price: 500, description: "Preciosa camisa blanca de manga corta yucateca bordada a mano!", Origen: "Otomi", image: "./src/img/ropa-kotomitl/camisa1-blanca.jpg", image2: "./src/img/ropa-kotomitl/camisa1-azul.jpg", image3: "./src/img/ropa-kotomitl/camisa1-negra.jpg",Desc1:"100% de lino",Desc2:"Fabricada a mano",Desc3:"Fabricada en taller familiar",rating: { "rate": 4.9, "count": 500 } },

{ id: 2, title: "Camisa Yucateca manga larga", price: 500, description: "Preciosa camisa blanca de manga larga yucateca bordada a mano!", Origen: "Otomi", image: "./src/img/ropa-kotomitl/camisa2-blanca.jpg", image2: "./src/img/ropa-kotomitl/camisa2-azul.jpg", image3: "./src/img/ropa-kotomitl/camisa2-negra.jpg",Desc1:"100% de lino",Desc2:"Fabricada a mano",Desc3:"Fabricada en taller familiar",rating: { "rate": 4.9, "count": 500 } },

{ id: 3, title: "Poncho mexicano", price: 500, description: "Precioso poncho mexicano bordado a mano!", Origen: "Otomi", image: "./src/img/ropa-kotomitl/poncho2-blanco.jpg", image2: "./src/img/ropa-kotomitl/poncho1-azul.jpg", image3: "./src/img/ropa-kotomitl/poncho1-negro.jpg",Desc1:"100% de lino",Desc2:"Fabricada a mano",Desc3:"Fabricado en taller familiar",rating: { "rate": 4.9, "count": 500 } },

{ id: 4, title: "Short artesanal", price: 500, description: "Precioso short artesanal bordado a mano!", Origen: "Otomi", image: "./src/img/ropa-kotomitl/short1-blanca.jpg", image2: "./src/img/ropa-kotomitl/short1-azul.jpg", image3: "./src/img/ropa-kotomitl/short1-negra.jpg",Desc1:"100% de lino",Desc2:"Fabricada a mano",Desc3:"Fabricada en taller familiar",rating: { "rate": 4.9, "count": 500 } },

{ id: 5, title: "Traje de baño artesanal", price: 500, description: "Precioso traje de baño artesanal bordado a mano!", Origen: "Otomi", image: "./src/img/ropa-kotomitl/short2-blanca.jpg", image2: "./src/img/ropa-kotomitl/short2-azul.jpg", image3: "./src/img/ropa-kotomitl/short2-negra.jpg",Desc1:"100% de lino",Desc2:"Fabricada a mano",Desc3:"Fabricado en taller familiar",rating: { "rate": 4.9, "count": 500 } },

{ id: 6, title: "Zapato de piel", price: 500, description: "Preciosos zapatos de piel fabricados artesanalmente!", Origen: "Otomi", image: "./src/img/ropa-kotomitl/zapato1-blanca.jpg", image2: "./src/img/ropa-kotomitl/zapato1-azul.jpg", image3: "./src/img/ropa-kotomitl/zapato1-negro.jpg",Desc1:"100% de lino",Desc2:"Fabricada a mano",Desc3:"Fabricados en taller familiar",rating: { "rate": 4.9, "count": 500 } },

{ id: 7, title: "Camisa Yucateca", price: 500, description: "Preciosa camisa yucateca bordada a mano!", Origen: "Otomi", image: "./src/img/ropa-kotomitl/pantalon1-blanca.jpg", image2: "./src/img/ropa-kotomitl/pantalon2-azul.jpg", image3: "./src/img/ropa-kotomitl/pantalon2-negra.jpg",Desc1:"100% de lino",Desc2:"Fabricada a mano",Desc3:"Fabricada en taller familiar",rating: { "rate": 4.9, "count": 500 } },

{ id: 8, title: "Sandalias de piel", price: 500, description: "Preciosa camisa blanca yucateca bordada a mano!", Origen: "Otomi", image: "./src/img/ropa-kotomitl/sandalias1-blanco.jpg", image2: "./src/img/ropa-kotomitl/sandalias1-azul.jpg", image3: "./src/img/ropa-kotomitl/sandalias1-negro.jpg",Desc1:"100% de lino",Desc2:"Fabricada a mano",Desc3:"Fabricada en taller familiar",rating: { "rate": 4.9, "count": 500 } }


];

map(prod1);