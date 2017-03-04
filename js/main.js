

function translate(){
  var tittle = document.getElementById('form-signin-heading');
  var email = document.getElementById('inputEmail');
  var password = document.getElementById('inputPassword');
  var remember = document.getElementsByTagName('span')[0];
  var button = document.getElementsByClassName('btn')[0];

  tittle.innerHTML = "Por favor inicia seión";
  email.placeholder = "Correo electrónico"
  password.placeholder = "Contraseña"
  remember.innerHTML = "Recordar datos"
  button.innerHTML = "Iniciar sesión"
}
translate();

function imprimir(){
  var records = document.getElementById("record");
  records.innerHTML= "El "+ document.getElementById('inputEmail').placeholder + " ingresado es <br>"+ document.getElementById('inputEmail').value+ "<br>"+
                    " la clave ingresada es <br>"+ document.getElementById('inputPassword').value;

}
