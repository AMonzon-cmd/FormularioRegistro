function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validacion(){
    var nombre, apellido, email, password1, password2;

    nombre=document.getElementById("nombre").value;
    apellido=document.getElementById("apellido").value;
    email=document.getElementById("email").value;
    password1=document.getElementById("password1").value;
    password2=document.getElementById("password2").value;
    checkTerminos = document.getElementById("terminos");

    if((nombre != '' && apellido != '' && email != '' && password1 != '' && password2 != '') && 
        (password1 === password2) && (password1.length >= 6) &&
        (checkTerminos.checked)
        ){
        showAlertSuccess();
    }else{
        showAlertError();
    }
}