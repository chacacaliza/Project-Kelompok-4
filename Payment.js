//Function to give formatted Card Enter
function cardEntry() {
    document.getElementById("number").addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    });
}


//Function to Validate Name Entry
function checkName(a) {
    let regex = /^[A-Z]/;
    return regex.test(a);
}

function checkAddress(a) {
    let regex = /^[A-Z]/;
    return regex.test(a);
}

cardEntry();

let cardnums = [1234, 2345, 3456, 4567];
let mes1 = '';
let k = '';
let card = '';

function CheckCardType() {
    let a = document.getElementById("number").value;
    if (a.length == 4) {
        mes1 = a;
        for (let i = 0; i < 4; i++) {
            if (mes1 == cardnums[i]) {
                k = i;
                document.getElementById("address").disabled = false;
                document.getElementById("name").disabled = false;
                if (k == 0) {
                    document.getElementById("img").innerHTML = "<img src='./images/ovo.png'>";
                    card = "Ovo";
                } else if (k == 1) {
                    document.getElementById("img").innerHTML = "<img src='./images/dana.png'>"
                    card = "Dana";
                } else if (k == 2) {
                    document.getElementById("img").innerHTML = "<img src='./images/cod.jpg'>"
                    card = "COD";
                } else if (k == 3) {
                    document.getElementById("img").innerHTML = "<img src='./images/bni.png'>"
                    card = "BNI Card";
                }
                break;

            } else if (mes1 != cardnums[i]) {
                document.getElementById("name").disabled = false;
                document.getElementById("address").disabled = false;
                document.getElementById("img").innerHTML = "<li class=fa>&#xf06a</li>";
            }
        }
    }
}

function Confirmation() {
    one = document.getElementById("number").value;
    two = document.getElementById("name").value;
    three = document.getElementById("address").value;


    document.getElementById("cardnumber").innerHTML = one;
    document.getElementById("cardname").innerHTML = two;
    document.getElementById("cardaddress").innerHTML = three;
}