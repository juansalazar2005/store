let buttonTag = document.getElementById("boton")
buttonTag.addEventListener("click", escuchar) 
function escuchar(event) {
    event.preventDefault()
    console.log("Clicked")
    let product = document.getElementById("product").value
    let address = document.getElementById("address").value
    let email = document.getElementById("email").value
    console.log(product + ", " +address +", " +email);
}