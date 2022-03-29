let buttonTag = document.getElementById("boton")
buttonTag.addEventListener("click", escuchar)
function escuchar(event) {
    event.preventDefault()
    console.log("Clicked")
    let tribuna = document.getElementById("tribuna").value
    let cantidad = document.getElementById("cantidad").value
    let number = document.getElementById("number").value
    let name = document.getElementById("name").value
    let lastName = document.getElementById("lastName").value
    console.log(tribuna + ", " + cantidad + ", " + number + ", " + name + ", " + lastName);

    let sur = 144000
    let norte = 144000
    let occidental = 444000
    let oriental = 215000


    if (tribuna == "sur") {
        let resultado = sur * cantidad
        alert("Usted abonó: " + cantidad)
        alert("Usted debe: " + resultado)
    }
    else if (tribuna == "norte") {
        let resultado = norte * cantidad
        alert("Usted abonó: " + cantidad)
        alert("Usted debe: " + resultado)
    }
    else if (tribuna == "occidental") {
        let deuda = occidental * cantidad
        alert("Usted abonó: " + cantidad)
        alert("Usted debe: " + deuda)
    }
    else if (tribuna == "oriental") {
        let resultado = oriental * cantidad
        alert("Usted abonó: " + cantidad)
        alert("Usted debe: " + resultado)
    }

}
