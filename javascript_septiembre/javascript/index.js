// validar email
// email = document.querySelector('#form input[type=email]');
const email = document.querySelector('#email');
const validacionEmail = document.querySelector('#validacion-email');

email.onkeyup = function(){
  if (/\S+@\S+\.\S+/.test(email.value)){
    validacionEmail .innerText = '';
    email.classList.remove('invalid');
    email.classList.add('valid');
  }else{
    const texto = "Email invalido";
    validacionEmail .innerText = texto;
    email.classList.remove('valid');
    email.classList.add('invalid');
  }
}

// validar password
const password = document.querySelector('#password');
const validacionPassword = document.querySelector('#validacion-password');

password.onkeyup = function(){
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (regex.test(password.value)){
    validacionPassword .innerText = '';
    password.classList.remove('invalid');
    password.classList.add('valid');
  }else{
    const texto = "Debe contener al menos una mayuscula, una minuscula un numero y ocho caracteres";
    validacionPassword .innerText = texto;
    password.classList.remove('valid');
    password.classList.add('invalid');
  }
}

// mostrar password
const mostrarPassword = document.querySelector("#mostrar-password input");

mostrarPassword.onchange = function(){
  if (password.type === "password"){
    password.type = "text";
  }else{
    password.type = "password";
  }
}

// enviar formulario cuando no hay errores
const form = document.querySelector('#form form');
let emailValido = false;
let passwordValido = false;

form.onsubmit = function(e){
  e.preventDefault();

  if (password.classList.contains("valid")){
    passwordValido = true;
  }else{
    password.classList.add("invalid");
  }

  if (email.classList.contains("valid")){
    emailValido = true;
  }else{
    email.classList.add("invalid");
  }

  if (emailValido && passwordValido){
    form.submit();
  }
}