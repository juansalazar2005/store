let buttonTag = document.getElementById("boton")
buttonTag.addEventListener("click", escuchar) 
function escuchar(event) {
    event.preventDefault()
    console.log("Clicked")
    let tribuna = document.getElementById("tribuna").value
    let payment = document.getElementById("payment").value
    let number = document.getElementById("number").value
    let name = document.getElementById("name").value
    let lastName = document.getElementById("lastName").value
    console.log(tribuna + ", " +payment +", " + number+", "+name+", "+lastName);

    let sur = 144000
    let norte = 144000
    let occidental = 444000
    let oriental = 215000

    if (tribuna == "norte") {
        let deuda = norte - payment
        alert("Usted abonó: " + payment)
        if (deuda == 0){
            alert("Pago realizado")
        } else {
            alert("Deuda: " + deuda)
        };
    } else if (tribuna == "sur") {
        let deuda = sur - payment
        alert("Usted abonó: " + payment)
        if (deuda == 0) {
            alert("Pago realizado")
        } else {
            alert("Deuda: " + deuda)
        }
        
    } else if (tribuna == "occidental") {
        let deuda = occidental - payment
        alert("Usted abonó: " + payment)
        if (deuda == 0){
            alert("Pago realizado")
        } else {
            alert("Deuda: " + deuda)
        };
    } else if (tribuna == "oriental") {
        let deuda = oriental - payment
        alert("Usted abonó: " + payment)
        if (deuda == 0) {
            alert("Pago realizado")
        } else {
            alert("Deuda: " + deuda)
        }
    }
}