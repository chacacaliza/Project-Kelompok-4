function rumah(){
    var rumahku = document.getElementById ('alamat').value;
    if(rumahku.length == a ||rumahku.length == z){
        document.getElementById ('alamat').value = rumah+"";
        document.getElementById ('alamat').max = 1;
    }
}

function phone(){
    var hunbungi = document.getElementById ('alasan').value;
    if(hunbungi.length == 2){
        document.getElementById ('alasan').value = phone+"";
        document.getElementById ('alasan').max = 1;
    }
}
function punya(){
    var punya = document.getElementById ('akun').value;
    if(punya.length == 4 ||punya.length == 9 ||punya.length == 15){
        document.getElementById ('akun').value = alasan+"";
        document.getElementById ('akun').max = 1;
    }
}