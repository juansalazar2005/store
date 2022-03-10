var getData = function () {
    var product = document.getElementById("product").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    console.log(product + " " + address + " " + email);
    if (product == "postre") alert("Desserts have 10.000 off!");
    else (product == "torta", alert("Cakes have 10.000 off!"));
}


