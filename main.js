

let Carrito = JSON.parse(localStorage.getItem("carrito")) || []


const productosLibreria = [
    {
        id: 1,
        nombre: "PC Nº1",
        categoria: "Informatica",
        img: "./pages/Imagen1PC.jpg",
        serie: "I3-G12"
    },
    {
        id: 2,
        nombre: "PC Nº2",
        categoria: "Informatica",
        img: "./pages/Imagen1PC.jpg",
        serie: "I3-G13"
    },
    {
        id: 3,
        nombre: "PC Nº3",
        categoria: "Informatica",
        img:"./pages/Imagen1PC.jpg" ,
        serie: "I3-G14"
    },
    {
        id: 4,
        nombre: "PC Nº4",
        categoria: "Informatica",
        img: "./pages/Imagen1PC.jpg",
        serie: "I4-G12"
    },
    {
        id: 5,
        nombre: "PC Nº5",
        categoria: "Informatica",
        img: "./pages/Imagen1PC.jpg",
        serie: "I4-G13"
    },
    {
        id: 6,
        nombre: "PC Nº6",
        categoria: "Informatica",
        img: "./pages/Imagen1PC.jpg",
        serie: "I4-G14"
    },
    {
        id: 7,
        nombre: "PC Nº7",
        categoria: "Informatica",
        img:"./pages/Imagen1PC.jpg" ,
        serie: "I5-G12"
    },
    {
        id: 8,
        nombre: "PC Nº8",
        categoria: "Informaatica",
        img: "./pages/Imagen1PC.jpg",
        serie: "I5-G13"
    },
    {
        id: 9,
        nombre: "PC Nº9",
        categoria: "Informatica",
        img: "./pages/Imagen1PC.jpg",
        serie: "I5-G14"
    },
    {
        id: 10,
        nombre: "PC Nº10",
        categoria: "Informatica",
        img: "./pages/Imagen1PC.jpg",
        serie: "I7-G12"
    },

    {
        id: 11,
        nombre: "PC Nº11",
        categoria: "Informatica",
        img: "./pages/Imagen1PC.jpg",
        serie: "I7-G13"
    },
    {
        id: 12,
        nombre: "PC Nº12",
        categoria: "Informatica",
        img: "./pages/Imagen1PC.jpg",
        serie: "I7-G14"
    },


]



const productos = document.getElementById("productos")
const productosCarrito = document.getElementById("productosCarrito")
const total = document.getElementById("total")
const total1 = document.getElementById("total1")
const botonQueLimpia = document.getElementById("botonQueLimpia")


function botonesComprar(){
    const botones = document.getElementsByClassName("botonesCompra")
    const arrayBotones = Array.from(botones)

    arrayBotones.forEach(el => {
        el.addEventListener("click", (evento)=> {
            let nombre = evento.target.parentElement.children[0].innerText
            let serie = evento.target.parentElement.children[2].children[0].innerText

            let productoABuscar = Carrito.find(el => el.nombre == nombre)

            if(productoABuscar){
                productoABuscar.cantidad++
            }else{
                Carrito.push({
                    nombre: nombre,
                    serie: serie,
                    cantidad: 1
                })
            }

            productosCarrito.innerHTML = ""
             Carrito.forEach(el => {
                     productosCarrito.innerHTML += `
                        <div class="producto">
                        <h3>${el.nombre}</h3>
                        <p>NºSerie: ${el.serie}</p>
                        <p>Cantidad: ${el.cantidad}</p>
                        </div>
                        `
                        })

   

    total.children[0].innerText = Carrito.reduce((acc, el)=> {
        return acc + el.cantidad
    }, 0)

    localStorage.setItem("carrito", JSON.stringify(Carrito))

        })
    })
}



function botonEliminar() {
    const botones = document.getElementsByClassName("botonesEliminar")
    const arrayBotones = Array.from(botones)


    arrayBotones.forEach(el => {
        el.addEventListener("click", (evento) => {
            let nombre = evento.target.parentElement.children[0].innerText

            let productoABuscar = Carrito.find(el => el.nombre == nombre)

            if(productoABuscar.cantidad == 1){
                let index = Carrito.findIndex(el => el.nombre == productoABuscar.nombre)

                Carrito.splice(index, 1)
            }else{
                productoABuscar.cantidad = productoABuscar.cantidad - 1
            }

     


            productosCarrito.innerHTML = ""
            Carrito.forEach(el => {
                productosCarrito.innerHTML += `
                        <div class="producto">
                            <h3>${el.nombre}</h3>
                            <p>NºSerie: ${el.serie}</p>
                            <p>Cantidad: ${el.cantidad}</p>
                           
                        </div>
                `
            })
        

            total.children[0].innerText = Carrito.reduce((acc, el)=> {
                return acc + el.cantidad
            }, 0)
        
           
            localStorage.setItem("carrito", JSON.stringify(Carrito))
        

        })
        
    })
}




botonQueLimpia.addEventListener("click", () => {
    Carrito = []
    localStorage.clear()
   
    productosCarrito.innerHTML = ""
            Carrito.forEach(el => {
                productosCarrito.innerHTML += `
                        <div class="producto">
                            <h3>${el.nombre}</h3>
                            <p>Serie: ${el.serie}</p>
                            <p>Cantidad: ${el.cantidad}</p>
                            <button class="botonesEliminar">X</button>
                        </div>
                `
            })
        
            total.children[0].innerText = Carrito.reduce((acc, el)=> {
                return acc + el.cantidad
            }, 0)
        
        
            localStorage.setItem("carrito", JSON.stringify(Carrito))
        
          
})



document.addEventListener("DOMContentLoaded", () => {
    productosLibreria.forEach(el => {
        productos.innerHTML += `
            <div id="${el.id}" class="producto">
                <h3>${el.nombre}</h3>
                <div class="img">
                    <img src="${el.img}" alt="">
                </div>
                <p>NºSerie: <span>${el.serie}</span></p>
                <p>Categoría: ${el.categoria}</p>
                <button class="botonesCompra">Agregar</button>
                <button class="botonesEliminar">Eliminar</button>
            </div>
        `
    })

    botonesComprar()
    botonEliminar()
  
})