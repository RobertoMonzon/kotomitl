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
                                <p class="card-text" style="text-align: justify;">${prod.description.slice(0, 80)} ... </p>
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
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h6 class="modal-title"><strong>${prod.title}</strong>  </h6>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>${prod.description}</p>
                                        </div>
                                        <div style="text-align:right;">
                                            <p><strong>Price:</strong> ${prod.price} USD &ensp;&ensp;</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
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

    { id: 1, title: "Camisa otomi", price: 500, description: "Preciosa camisa blanca Otomi bordada a mano!", Origen: "Otomi", image: "https://lahamacayelrebozo.com.mx/cdn/shop/products/image_e5c76d8c-8739-42c2-a405-e53f9c01a766_1800x1800.png?v=1642200281", rating: { "rate": 4.9, "count": 500 } },


    //Pantalones
    { id: 1, title: "Pantalón Artesanal", price: 450, description: "Precioso pantalón artesanal de origen zapoteco!", Origen: "zapoteco", image: "https://i.etsystatic.com/8278454/r/il/09a113/2880098562/il_570xN.2880098562_rs7g.jpg", rating: { "rate": 4.9, "count": 450 } },

    { id: 2, title: "Pantalón Artesanal", price: 480, description: "Precioso pantalón artesanal de origen veracruzano!", Origen: "veracruzano", image: "https://i.etsystatic.com/8278454/r/il/d1804b/2682649219/il_570xN.2682649219_4a2i.jpg", rating: { "rate": 4.9, "count": 480 } },

    //Guayaberas

    { id: 3, title: "Guayabera artesanal", price: 800, description: "Guayaberas para Hombre - Camisa de Manta Artesanal Mexicana Tipo Manga Corta -", Origen: "Otomi", image: "https://m.media-amazon.com/images/I/81zIR907hoL._AC_SX679_.jpg", rating: { "rate": 4.9, "count": 500 } },

    { id: 4, title: "Guayabera Yucateca", price: 400, description: "Teya Artesanal Camisa Guayabera Yucateca de Lino Modelo Colibrí Bordado Manga Larga", Origen: "Otomi", image: "https://m.media-amazon.com/images/I/61iM1M9XnPL._AC_SX679_.jpg", rating: { "rate": 4.9, "count": 500 } },

    //Camisa

    {
        id: 5, title: "Pulsera", price: 500, description: "Accesorio para hombre, hecha de material textil café trenzado, con hilo encerado color marrón como decoración.", Origen: "Mexa", image: "http://www.pulccino.mx/PCAdmin/productos/media/15257250505af0b77a8ac4c.JPG",
        rating: { "rate": 4.9, "count": 500 }
    },

    //Pulsera

    {
        id: 6, title: "Zapatos artesanales", price: 500, description: "Zapatos artesanales hechos a mano, super comodos", Origen: "Mexa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFZBkDyv69mW64aBeUqhYyJC3gfb55pd2b1vnJA-XBy91ydEkMk1Zq4rboB02kLhG0rk&usqp=CAU", rating: { "rate": 4.9, "count": 500 }
    },


    //Chamarras
    { id: 7, title: "Sudadera estilo otomi", price: 500, description: "Cómoda susadera estilo otomi, distintas tallas y colores", Origen: "Mexa", image: "https://image.spreadshirtmedia.net/image-server/v1/products/T20A2PA5098PT17X76Y21D166927473W19381H19453/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=5627,crop=list/arte-mexicano-estilo-otomi-pajaro-pavo-real-animales-sudadera-con-capucha-premium-hombre.jpg", rating: { "rate": 4.9, "count": 500 } },

    { id: 8, title: "Sudadera multicolor", price: 500, description: "Sudadera distintas tallas y colores", Origen: "Otomi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_0F9YGmx0QmUwMWQxJoO0yQ3jYjJB2hINw&usqp=CAU", rating: { "rate": 4.9, "count": 500 } },

    //Short
    { id: 56, title: "Short Beige Artesanal", price: 500, description: "Mágnifico short beige, fresco bordado a mano!", Origen: "Maya", image: "https://i.etsystatic.com/8278454/r/il/3abf35/3792936547/il_570xN.3792936547_ebk3.jpg", rating: { "rate": 4.9, "count": 380 } },
    

    { id: 34, title: "Short Azul Marino", price: 500, description: "Asombroso short azul marino, estilo playero bordado a mano!", Origen: "Maya", image: "https://www.korner.es/uploads/media/images/21005530_830_1.jpg", rating: { "rate": 4.9, "count": 390 } }

];

addItem(prod1);