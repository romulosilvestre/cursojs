
function validar(){
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    if(login === ''){
        alert("preencha o login");
        return false;
    }else if(senha === ''){
        alert("preencha a senha");
        return false;
    }else{
        return true;
    }
}
