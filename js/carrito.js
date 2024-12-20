function eliminarProducto(e) {
    const idBoton= parseInt(e.currentTarget.id);
    carrito= JSON.parse(localStorage.getItem("carrito"))
	const index= carrito.findIndex(item => item.id === idBoton);
    if (index!==-1) {
        const itemEliminado=carrito[index]
        console.log(itemEliminado.cantidad)
        if (itemEliminado.cantidad>1){
            carrito[index].cantidad--;
        }
	    else {
            console.log("hola")
            carrito.splice(index,1)
        }
    }
	localStorage.setItem("carrito", JSON.stringify(carrito))
	mostrarCarrito()
    console.log(carrito[index].cantidad)
}

function actualizarBotonesEliminar() {
    botonesEliminar=document.querySelectorAll(".botonEliminar")
    
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarProducto)
    });
}

function mostrarCarrito() {
	listaCarrito.innerHTML= ``
	carrito= JSON.parse(localStorage.getItem("carrito"))
    if (carrito) {
		for (item of carrito) {
			const div= document.createElement("div")
			div.classList.add("carrito-item")
			div.innerHTML= `
				<div class ="item-img-cont">
                    <img class="img-mini" src="${item.image}" alt="bah">
				</div>
                <p>Precio<br>US$${item.price}</p>
				<p>Cantidad<br>${item.cantidad}</p>
				<p>Subtotal<br>${item.price*item.cantidad}</p>
				<button class="botonEliminar" id=${item.id}>Eliminar</button>
			`
			listaCarrito.append(div)
		}
	}
    actualizarBotonesEliminar()
    /* if (carrito.lenght>0) {
        accionesCarrito()
    }
    function accionesCarrito() {
        const div= document.createElement("div")
		div.classList.add("acciones")
		div.innerHTML= `
			<button id="vaciarCarrito">Vaciar Carrito</button>
            <button id="comprarCarrito">Finalizar Compra</button>
            <div id="totalCompra"> </div>
        `
    }

    */
}

/* INICIO */
console.log("Hola")
const listaCarrito= document.querySelector("#listaCarrito")
let botonesEliminar= document.querySelectorAll(".botonEliminar")
mostrarCarrito()
actualizarBotonesEliminar()
