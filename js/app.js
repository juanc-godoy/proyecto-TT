console.log("hola mundo");

const listaProductos = document.querySelector("#listaProductos");
const listaCarrito= document.querySelector("#listaCarrito")

let botonesAgregar= document.querySelectorAll(".botonAgregar")
let carrito=[]


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

function mostrarCarrito() {
	listaCarrito.innerHTML= ``
	carrito= JSON.parse(localStorage.getItem("carrito"))

	if (carrito) {
		for (item of carrito) {
			const div= document.createElement("div")
			div.classList.add("carrito-item")
			div.innerHTML= `
				<img class="img-mini" src="${item.image}" alt="bah">
				<p>${item.price}</p>
				<p>Cantidad: ${item.cantidad}</p>
				<p>Subtotal: ${item.price*item.cantidad}</p>
				<button class="eliminar btn" id=>Eliminar</button>
			`
			listaCarrito.append(div)
		}
	}
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
	mostrarCarrito()
	
	
	
	
	/* actualizarCarrito() */
}



/* Empieza el programa */


mostrarProductos();
actualizarBotonesAgregar();
mostrarCarrito()

/* 	fetchProducts().then(productos => {
		for (prod of productos) {
			  const div= document.createElement("div")
			  div.classList.add("producto")
			  div.innerHTML= `
			  <div class="producto-img">
			  <img src="${prod.image||"bah"}" alt="">
		  </div>
			  <div class="producto-info">
			  <h2 class="info-item">${prod.title||"bah"}</h2>
			<p class="info-item">U$S ${prod.price||"bah"}</p>
			<p class="info-item">Cód.Prod: ${prod.id||"bah"}</p>
				  <p class="info-item">STOCK: ${prod.count||"bah"}</p>
				  <button class="info-item"id=btn-add-car>Agregar al carrito</button>
		  </div>
		  `
		  listaProductos.append(div)
		  }
	  });   */
	  
	  
	  
/* CODIGO ANTES DE PRUEBA
console.log("hola mundo")

const listaProductos= document.querySelector("#listaProductos")
let url="https://fakestoreapi.com/products/"
let productos=[]

for (let i=1; i<=20; i++) {
	fetch(url+i)
		.then((response) => response.json())
		.then (data => {
			let producto={
				image : data.image,
				title : data.title,
				id : data.id,
				price : data.price,
				category : data.category,
				description : data.description
			}
			productos.push(producto)})
	
		}
 
console.log("tipo de prod=", typeof(productos))


console.log(productos)
console.log(productos.length)

for (obj of productos) {
	console.log(obj.title)
	console.log("hola")
}
CODIGO ANTES DE PRUEBA */
/* function mostrarProductos() {
	const div= document.createElement("div")
	div.classList.add("producto")
	div.innerHTML= `
	<div class="producto-img">
        <img src="${prod.image||"bah"}" alt="">
    </div>
	<div class="producto-info">
    	<h2 class="info-item">${prod.title||"bah"}</h2>
      	<p class="info-item">U$S ${prod.price||"bah"}</p>
      	<p class="info-item">Cód.Prod: ${prod.id||"bah"}</p>
				<p class="info-item">STOCK: ${prod.rating.count||"bah"}</p>
		<button class="info-item btn"id=agr-car>Agregar al carrito</button>
	</div>
	`
	listaProductos.append(div)
}
for (let i=0; i<=19; i++){

} */

/* AGREGAR AL CARRITO */
/* let carrito=document.querySelector("#carrito")

function agregarAlCarrito(item,lista) {
	let prod={
		"image" : item.image,
		"title" : item.title,
		"id" : item.id,
		"price" : item.price,
		"category" : item.category,
		"count" : item.count,
		"description" : item.description
	}
	lista.append(prod)
} */

/* {
"id":1,
"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price":109.95,
"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing",
"image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
"rating":{"rate":3.9,"count":120}} 
*/