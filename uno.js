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
    console.log(empanada + ", " + quantity + ", " + name + ", " + id + ", " + email)

    let carne = 3000
    let pollo = 3200
    let papa = 3200
    let paisa = 3500
    let ranchera = 3500

    if (empanada == "carne") {
        console.log("estoy en 1")
        let ressult = quantity * carne
        alert("Su total es de: " + ressult)
    }
    else if (empanada == "paisa") {
        console.log("estoy en 2")
        let ressult = quantity * paisa
        alert("Su total es de: " + ressult)
    }
    else if (empanada == "ranchera") {
        console.log("estoy en 3")
        let ressult = quantity * ranchera
        alert("Su total es de: " + ressult)
    }
    else if (empanada == "Seleccionar empanada") {
        console.log("estoy en 4")
        alert("Seleccione artículos para comprar!")
    }
    else if (empanada == "pollo" || "papa") {
        let ressult = quantity * pollo
        alert("Su total es de: " + ressult)
    }

}

