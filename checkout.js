function checkOut() {
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var checkOutAccount = {
        name: name,
        email: email,
        address: address,
        city: city
    }
    var a = localStorage.setItem("Checkout_Account", JSON.stringify(checkOutAccount));
    document.getElementById("display").style.display = 'block';
    setTimeout(function () {
        location = 'payment.html'
    }, 2000)

};