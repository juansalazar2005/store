let etiquetaBoton = document.getElementById("button")
etiquetaBoton.addEventListener("click", escuchar)
function escuchar(event) {
    event.preventDefault()
    console.log("Clicked")
    let estrato = document.getElementById("estrato").value
    let documento = document.getElementById("id").value
    let deuda = document.getElementById("debtValue").value
    let email = document.getElementById("email").value
    console.log("Estrato: " + estrato + ", documento: " + documento + ", deuda: " + deuda + ", email: "+ email)
    
    if (estrato == 1) {
        let dcto = deuda * (40/100)
        alert("Usted ha sido beneficiado con un descuento del 40%")
        alert("Su total es de: " +  (deuda - dcto))
    } else if (estrato == 2) {
        let dcto = deuda * (30/100)
        alert("Usted ha sido beneficiado con un descuento del 30%")
        alert("Su total es de: " +  (deuda - dcto))
    } else if (estrato == 3) {
        let dcto = deuda * (20/100)
        alert("Usted ha sido beneficiado con un descuento del 20%")
        alert("Su total es de: " +  (deuda - dcto))
    } else {
        alert("Su total es de: " + deuda)
    }
}   