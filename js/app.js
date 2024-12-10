console.log("hola mundo")

const listaProductos= document.querySelector("#listaProductos")
let url="https://fakestoreapi.com/products/"

for (let i=1; i<=20; i++) {
	fetch(url+i)
		.then((response) => response.json())
		.then (data => mostrarProductos(data))
}

function mostrarProductos(prod) {
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
		<button class="info-item btn"id=agr-car>Agregar al carrito</button>
	</div>
	`
	listaProductos.append(div)
}
