//Variables de precio
let precioIva = 1.16
let precioTotal = 0


//Productos
function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.restartStock = function(cantidad){
        this.stock -= cantidad
    }
}

let productoA = new Producto("plantasExterior", 230, 50)
let productoB = new Producto("plantasInterior", 180, 40)
let productoC = new Producto("otrosProductos", 50, 45)
let productoD = new Producto("abonoPlanta", 300, 30)

let listaProductos = [productoA, productoB, productoC, productoD]

let listaNombres = []

for(const prod of listaProductos){
    if(prod.stock > 0){
        listaNombres.push(prod.nombre)
    }
}

//Mensaje de bienvenida
alert("¡Bienvenido!")

alert("Estos son nuestros productos: \n - " + listaNombres.join("\n - "))

//ciclo de compra
function calculoPrecio(cantidad, precio) {
    precioTotal += ((cantidad * precio) * precioIva)
}
function calculoStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
    }
    else {
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
}


let opcion = prompt("Ingrese la sección del que producto quiere comprar: \n1- Plantas de exterior\n2- Plantas de interior\n3- Otro producto\n4- Abono\n- Escriba ESC para salir -")

while(opcion.toLowerCase() != "esc"){

    if(opcion == 1){
        let cantidadProductoExterior = parseInt(prompt("Ingrese cuantas plantas de exterior quiere comprar: "))
        calculoStock(cantidadProductoExterior, productoA.stock, productoA.precio)
        productoA.restartStock(cantidadProductoExterior)
    }
    else if(opcion == 2){
        let cantidadProductoInterior = parseInt(prompt("Ingrese cuantas plantas de interior quiere comprar: "))
        calculoStock(cantidadProductoInterior, productoB.stock, productoB.precio)
        productoB.restartStock(cantidadProductoInterior)
    }
    else if(opcion == 3 ){
        let cantidadOtroProducto = parseInt(prompt("Ingrese que cantidad de otros productos quiere comprar: "))
        calculoStock(cantidadOtroProducto, productoC.stock, productoC.precio)
        productoC.restartStock(cantidadOtroProducto)
    }
    else if(opcion == 4 ){
        let cantidadOtroProducto = parseInt(prompt("Ingrese que cantidad de bolsas de abono que quiere comprar: "))
        calculoStock(cantidadOtroProducto, productoD.stock, productoD.precio)
        productoD.restartStock(cantidadOtroProducto)
    }
    else{
        alert("No tenemos ese producto a la venta")
    }
    opcion = prompt("Ingrese la sección del que producto quiere comprar: \n1- Plantas de exterior\n2- Plantas de interior\n3- Otro producto\n4- Abono\n- Escriba ESC para salir -")
}

if(precioTotal != 0){
    alert("El precio total es: " + "$" + precioTotal + " (IVA incluido)")
}

//Mensaje de despedida
alert("Gracias por tu visita, lo esperamos pronto.")