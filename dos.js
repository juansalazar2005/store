let buttonTag = document.getElementById("boton")
buttonTag.addEventListener("click", escuchar) 
function escuchar(event) {
    event.preventDefault()
    console.log("Clicked")
    let tribuna = document.getElementById("tribuna").value
    let payment = document.getElementById("payment").value
    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    console.log(tribuna + ", " +payment +", " + id+", "+name+", "+lastName+", "+email);
}