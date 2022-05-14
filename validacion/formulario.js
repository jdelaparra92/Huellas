


function validacion() {
var nombre, apellido, email;
nombre = document.getElementById('nombre').value;
apellido = document.getElementById('apellido').value;
email = document.getElementById('email').value;

if (nombre === "") {
  alert("el campo Nombre esta vacio");
  return false;
}
else if (apellido === "") {
  alert("el campo apellido esta vacio");
  return false;
}
else if (email === "") {
  alert("el campo mail esta vacio");
  return false;
}


else if (nombre.length>18) {
  alert("el Nombre es muy largo");
  return false;
}
else if (apellido.length>35) {
  alert("el Apellido es muy largo");
  return false;
}



}
