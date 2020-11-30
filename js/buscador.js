//const endpoint = '../discos.json';
$("#boton__busqueda").click(function(e){
    e.preventDefault()
    $.ajax({
        url: "../discos.json",
        dataType: "json",
        type:"get",
        success: function(response){
            /* response.forEach(item => {
                console.log(item)                
            }); */
            
            for (let i = 0; i < response.length; i++) {
                const item = response[i];
                const lista = document.getElementById("boton__busqueda");
                lista.insertAdjacentHTML("afterend", 
                `
                <div class="card" style="width: 18rem;">
                    <img loading="lazy" src="${item.portada}" class="card-img-top" alt="Portada Álbum 'The Miracle'">
                    <div class="card-body">
                        <h5 class="card-title">${item.titulo}</h5>
                        <p class="card-text">Publicación: ${item.publicacion} || Sello: ${item.sello}</p>
                        <p class="card-price">${item.precio}</p>
                        <a href="https://open.spotify.com/album/3h6SV9wHJtNL1YswZUJs8V" class="btn btn-primary" target="_blank">Escuchar Álbum</a>
                        <button class="btn btn-primary addCarrito showCarrito">Comprar Álbum</button>                           
                    </div>
                </div>
                ` )                
                console.log(item)                
            }
//            console.log(response)
        }
    });
}); 


/*
for (let i = 0; i < response.length; i++) {
                const item = response[i];
                
                function mostrar(){

                }
                console.log(item)
                
            }


const discos = [{
    "id": "1",
    "titulo":"Queen",
    "publicacion": "13 de julio 1973",
    "precio": "$1300",
    "portada":"https://www.elquintobeatle.com/wp-content/uploads/2015/07/queen-queen-1.jpg",
    "sello":"Parlophone",
    "sku":"txcysdga"
},
{
    "id": "2",
    "titulo":"Queen II",
    "publicacion": "8 de marzo 1974",
    "precio": "$2000",
    "portada":"https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.fxRK-N2T/SharedImage-20939.jpg?t=60a9ea0fa63bbec7faec",
    "sello":"Parlophone",
    "sku":"yiggtyoih"
},
{
    "id": "3",
    "titulo":"Sheer Heart Attack",
    "publicacion": "8 de noviembre 1974",
    "precio": "$2150",
    "portada":"https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.fn2k-N2T/SharedImage-15930.jpg?t=6ec592dcacac5d551f81",
    "sello":"Parlophone",
    "sku":"ssqwtaohi"
},
{
    "id": "4",
    "titulo":"A Night At The Opera",
    "publicacion": "21 de noviembre 1975",
    "precio": "$2000",
    "portada":"https://img.discogs.com/EkzMhk6a9H86kG5Gb0kw2m8nVNY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2127698-1473017624-8664.jpeg.jpg",
    "sello":"Parlophone",
    "sku":"hsrfhftbvv"
},
{
    "id": "5",
    "titulo":"A Day At The Race",
    "publicacion": "10 de diciembre 1976",
    "precio": "$2150",
    "portada":"https://www.music-bazaar.com/album-images/vol17/800/800547/2656232-big/A-Day-At-The-Races-Limited-Edition-cover.jpg",
    "sello":"Parlophone",
    "sku":"powctsfrn"
},
{
    "id": "6",
    "titulo":"News Of The World",
    "publicacion": "28 de octubre 1977",
    "precio": "$1950",
    "portada":"https://img.discogs.com/Jiwtt1dIc_1gFTSFBafv7kgXEK4=/fit-in/600x606/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-475599-1454715265-7842.jpeg.jpg",
    "sello":"Parlophone",
    "sku":"awqxyagcv"
},
{
    "id": "7",
    "titulo":"Jazz",
    "publicacion": "10 de noviembre 1978",
    "precio": "$2000",
    "portada":"https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.fdcCMS6U/SharedImage-53604.jpg?t=efbe08dbd4e46ac03bce",
    "sello":"Parlophone",
    "sku":"ugnkxnfai"
},
{
    "id": "8",
    "titulo":"The Game",
    "publicacion": "30 de junio 1980",
    "precio": "$1900",
    "portada":"https://1.bp.blogspot.com/-2uQv9uvERO4/V6n8RNb6gDI/AAAAAAAAP9w/B_2ghb7kuPor4OWQSOd2BA4ssoF7aPhAwCLcB/s1600/The-Game-Deluxe-Edition-cover.jpg0",
    "sello":"Parlophone",
    "sku":"4gfsklktx3"
},
{
    "id": "9",
    "titulo":"Hot Space",
    "publicacion": "21 de mayo 1982",
    "precio": "$1750",
    "portada":"https://www.olorarock.com/wp-content/uploads/2018/11/SharedImage-53607.jpg",
    "sello":"Parlophone",
    "sku":"8934jxdks"
},
{
    "id": "10",
    "titulo":"The Works",
    "publicacion": "27 de febrero 1984",
    "precio": "$2000",
    "portada":"https://www.latercera.com/resizer/C7idbqUO5w4hI55_4rK5ndSxMO0=/800x0/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/P2SZ6VXJTJDMVNHYXNK2GGTXGM.jpg",
    "sello":"Parlophone",
    "sku":"qolx97bvjn"
},
{
    "id": "11",
    "titulo":"A Kind Of Magic",
    "publicacion": "2 de junio 1986",
    "precio": "$2200",
    "portada":"https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.fMDX9N2T/SharedImage-10040.jpg?t=90be7c56eefe8270208c",
    "sello":"EMI",
    "sku":"8vkqalqwh1"
},
{
    "id": "12",
    "titulo":"The Miracle",
    "publicacion": "22 de mayo 1989",
    "precio": "$1900",
    "portada":"https://img.discogs.com/7nwQ6sWtVDR5K1stlV_o0h3U2tk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4521889-1367255239-4663.jpeg.jpg",
    "sello":"EMI",
    "sku":"i9vm0671xd"
},
{
    "id": "13",
    "titulo":"Innuendo",
    "publicacion": "4 de febrero 1991",
    "precio": "$3000",
    "portada":"https://www.elquintobeatle.com/wp-content/uploads/2015/02/queen-innuendo-1.jpg",
    "sello":"EMI",
    "sku":"7jw9cnyqhs"
},
{
    "id": "14",
    "titulo":"Made in Heaven",
    "publicacion": "6 de noviembre 1995",
    "precio": "$5000",
    "portada":"https://m.media-amazon.com/images/I/61zWioxHfwL._SS500_.jpg",
    "sello":"EMI",
    "sku":"7vfjolqoksy"
}
]




function buscarDisco(){
    event.preventDefault();
    let botonBusqueda = document.getElementById("buscador__discos").value;
    //let nombresDiscos = discoIndividual => discoIndividual.titulo != botonBusqueda.value;
    //let discosFiltrados = discos.filter(nombresDiscos);
    //console.log(discosFiltrados); 
    let procesoFiltrado = item =>{return item.titulo !== botonBusqueda}
    let discosFiltro = discos.find(procesoFiltrado)
    console.log(discosFiltro);
    ;
}  */

/* function buscarDisco(){
    event.preventDefault();
    let botonBusqueda = document.getElementById("buscador__discos").value;
    let discosFiltrados = discos.filter( function(disco){
        if(disco != botonBusqueda.value ){
            discos.hide();
        }else{
            discos.show();
        }
    });
    console.log(discosFiltrados);
} */