
/* const ubicacion = document.querySelector("#datosPropiedad")
const agregar = document.querySelector("#agregar")
agregar.addEventListener("click",()=>{
alert("hola")
    

})

// opcion 1  => Esta es la mas usada!

const evento1 = document.querySelector("#evento1")
evento1.addEventListener("click",() =>{
    console.log ("Evento1")
})

// opcion 2  => Esta se usa poco menos que la anterior
const evento2 = document.querySelector("#evento2")
evento2.onclick = () => {
    console.log ("Evento 2")
}


// cree el boton yo solo! vamo arriba!

const evento3 = document.querySelector("#evento3")

evento3.addEventListener("click", ()=>{
    console.log ("Hello world")
})
*/



const propiedades =[]

class propiedad {
    constructor(ubicacion, dormitorios, baños){
        this.ubicacion = ubicacion
        this.dormitorios = dormitorios
        this.baños = baños
    }
}



const datosPropiedad = document.querySelector ("#datosPropiedad")

datosPropiedad.addEventListener("submit", (e)=>{
    e.preventDefault()
    const datos = e.target.children
    const nuevaPropiedad = new propiedad (datos["ubicacion"].value, datos["dormitorios"].value, datos["baños"].value)       
    propiedades.push(nuevaPropiedad)
    localStorage.setItem("nuevaPropiedad", JSON.stringify(propiedades))
    datosPropiedad.reset()
    verPropiedad(nuevaPropiedad)
    
})



const verPropiedad = (nuevaPropiedad) =>{
    const tarjetaPropiedad = document.createElement("div")
    tarjetaPropiedad.className = "propiedad"
    tarjetaPropiedad.innerHTML = `<h3>${nuevaPropiedad.ubicacion}</h3>
                                    <p>Dormitorios: ${nuevaPropiedad.dormitorios}</p>
                                    <p>Baños: ${nuevaPropiedad.baños}</p>
                                    <button>Editar</button>
                                    <button>Eliminar</button>`
    todasPropiedades.appendChild(tarjetaPropiedad)
}

// recorro el array de las propiedades y en cada vuelta le voy 
//agregando una propiedad

const todasPropiedades = document.querySelector("#todasPropiedades")
propiedades.forEach((propiedad) => {
    verPropiedad(nuevaPropiedad)

})           

