function signUp() {
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var registAccount = {
        name: name,
        email: email,
        password: password
    }
    var a = localStorage.setItem("Regist_Account", JSON.stringify(registAccount));
    document.getElementById("display").style.display = 'block';
    setTimeout(function () {
        location = 'form.html'
    }, 2000)

};

function login() {
    var email = document.getElementById("emailM").value;
    var password = document.getElementById("passwordM").value;
    var b = JSON.parse(localStorage.getItem("Regist_Account"));
    if (email === b.email && password === b.password) {
        document.getElementById("display1").style.display = 'block';
        document.getElementById("error2").style.display = 'none';
        setTimeout(function () {
            location = 'index.html'
        }, 2000)
    }
    else {
        document.getElementById("error2").style.display = 'block';
    }

}