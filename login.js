let form = document.getElementById("myform");

let mail = document.getElementById("exampleInputEmail1");
let paramail = document.getElementById("paramail");

let password = document.getElementById("exampleInputPassword1");
let parapassword = document.getElementById("parapassword");

form.addEventListener("submit", login);

function login(eo) {
  eo.preventDefault();

  let expEmail = mail.value.indexOf("@");

  if (mail.value !== "" && expEmail !== -1) {
    mail.classList.add("is-valid");
    mail.classList.remove("is-invalid");
    paramail.classList.remove("d-block");
  } else {
    mail.classList.add("is-invalid");
    paramail.classList.add("d-block");
    mail.classList.remove("is-valid");
  }

  if (password.value !== "") {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
    parapassword.classList.remove("d-block");
  } else {
    password.classList.add("is-invalid");
    parapassword.classList.add("d-block");
    password.classList.remove("is-valid");
  }

  let myarray = JSON.parse(localStorage.getItem("utilisateur"));

  let mailValue = mail.value;
  let passwordValue = password.value;

  let found = myarray.find((value, index, array) => {
    return value.email === mailValue && value.password === passwordValue;
  });
  console.log(found);

  if (found != undefined) {
    window.location.href = "http://127.0.0.1:5500/dashboard.html";
  }
}
