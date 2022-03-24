let empanada = 2500
let hamburguesa = 10000
let pizza = 17000
let hotDog = 8000
let salpicon = 8000
let ensalada = 10000
let helado = 7000
let gaseosa = 3500
let postre = 18000
let torta = 25000
let buttonTag = document.getElementById("boton")
buttonTag.addEventListener("click", escuchar)
function escuchar(event) {
    event.preventDefault()
    console.log("Clicked")

    let product = document.getElementById("product").value
    let cantidad = document.getElementById("cantidad").value
    console.log(product + ", " + cantidad);


    if (product == "postre") {
        let resultado = postre * cantidad - 10000
        alert("Tiene $10000 de descuento")
        alert("Su total es de: " + resultado)
    } 
    else if (product == "torta") {
        let resultado = torta * cantidad - 10000
        alert("Tiene un descuento de $10000")
        alert("Su total es de: " + resultado)
    } 
    else if (product == "empanada") {
        let resultado = empanada * cantidad
        alert("Su total es de: " + resultado)
    } 
    else if (product == "hamburguesa") {
        let resultado = hamburguesa * cantidad
        alert("Su total es de: " + resultado)
    } 
    else if (product == "pizza") {
        let resultado = pizza * cantidad
        alert("Su total es de: " + resultado)
    } 
    else if (product == "hotDog") {
        let resultado = hotDog * cantidad
        alert("Su total es de: " + resultado)
    } 
    else if (product == "salpicon") {
        let resultado = salpicon * cantidad
        alert("Su total es de: " + resultado)
    } 
    else if (product == "ensalada") {
        let resultado = ensalada * cantidad
        alert("Su total es de: " + resultado)
    } 
    else if (product == "helado") {
        let resultado = helado * cantidad
        alert("Su total es de: " + resultado)
    } 
    else if (product == "gaseosa") {
        let resultado = gaseosa * cantidad
        alert("Su total es de: " + resultado)
    }





}


