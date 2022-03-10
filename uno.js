let etiquetaBoton = document.getElementById("boton")
etiquetaBoton.addEventListener("click", escuchar)
function escuchar(event) {
    event.preventDefault()
    console.log("Clicked");
    let empanada = document.getElementById("empanada").value
    let quantity = document.getElementById("quantity").value
    let name = document.getElementById("name").value
    let id = document.getElementById("id").value
    let email = document.getElementById("email").value
    console.log(empanada + ", " +quantity +", " + name+", "+id+", "+email)
}

