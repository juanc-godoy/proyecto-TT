console.log("hola mundo");

const listaProductos = document.querySelector("#listaProductos");
let botonesAgregar= document.querySelectorAll(".botonAgregar")


async function fetchProductos() {
	try{
		const fakeApi= await fetch("https://fakestoreapi.com/products");
		const data= await fakeApi.json();
		return data
	} catch {
		console.log("hubo un error")
	}
}

async function mostrarProductos() {
	const productos= await fetchProductos()
	for (prod of productos) {
		const div= document.createElement("div")
		div.classList.add("producto")
		div.innerHTML= `
		<div class="producto-img-contenedor">
			<img class="producto-img" src="${prod.image}" alt="bah">
		</div>
		<div class="producto-info">
			<h2 class="info-item" id="infoNombre">${prod.title||"bah"}</h2>
	  		<p class="info-item">U$S ${prod.price||"bah"}</p>
			<button class="botonAgregar btn" id="${prod.id}">Agregar</button>
		</div>
		`
		listaProductos.append(div)
	}
	actualizarBotonesAgregar();
}

function actualizarBotonesAgregar() {
	botonesAgregar= document.querySelectorAll(".botonAgregar");

	botonesAgregar.forEach(boton => {
		boton.addEventListener("click", agregarAlCarrito)
	});
}

async function agregarAlCarrito(e) {
	const idBoton= parseInt(e.currentTarget.id);
	const productos= await fetchProductos();
	const productoAgregado= await productos.find(producto => producto.id===idBoton);
	carrito= JSON.parse(localStorage.getItem("carrito"))||[]
	if (carrito.some(producto => producto.id===idBoton)){
		const index= carrito.findIndex(producto => producto.id === idBoton);
		carrito[index].cantidad++;
	} else{
		productoAgregado.cantidad= 1;
		carrito.push(productoAgregado);
	}
	localStorage.setItem("carrito", JSON.stringify(carrito))
	/* actualizarCarrito() */
}

/* INICIO*/

mostrarProductos();
actualizarBotonesAgregar();