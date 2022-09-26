//Productos
//Plantas de exterior
let plantasExterior = "1"
let stockExterior = 50
let precioExterior = 230

//Plantas de interior
let plantasInterior = "2"
let stockInterior = 40
let precioInterior = 180

//Otros productos
let otrosProductos = "3"
let stockOtrosProductos = 45
let precioOtrosProductos = 50

//Variables de precio
let precioIva = 1.16
let precioTotal = 0


//Mensaje de bienvenida
alert("¡Bienvenido!")

alert("Estos son nuestros productos: \n1- Plantas de exterior\n2- Plantas de interior\n3- Otros productos (macetas, abono y calendarios)")

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


let opcion = prompt("Ingrese la sección del que producto quiere comprar: \n1- Plantas de exterior\n2- Plantas de interior\n3- Otro producto\n- Escriba ESC para salir -")

while(opcion.toLowerCase() != "esc"){

    if(opcion == 1){
        let cantidadProductoExterior = parseInt(prompt("Ingrese cuantas plantas de exterior quiere comprar: "))
        calculoStock(cantidadProductoExterior, stockExterior, precioExterior)
    }
    else if(opcion == 2){
        let cantidadProductoInterior = parseInt(prompt("Ingrese cuantas plantas de interior quiere comprar: "))
        calculoStock(cantidadProductoInterior, stockInterior, precioInterior)
    }
    else if(opcion == 3 ){
        let cantidadOtroProducto = parseInt(prompt("Ingrese que cantidad de otros productos quiere comprar: "))
        calculoStock(cantidadOtroProducto, stockOtrosProductos, precioOtrosProductos)
    }
    else{
        alert("No tenemos ese producto a la venta")
    }
    opcion = prompt("Ingrese la sección del que producto quiere comprar: \n1- Plantas de exterior\n2- Plantas de interior\n3- Otro producto\n- Escriba ESC para salir -")
}

if(precioTotal != 0){
    alert("El precio total es: " + "$" + precioTotal + " (IVA incluido)")
}

//Mensaje de despedida
alert("Gracias por tu visita, lo esperamos pronto.")