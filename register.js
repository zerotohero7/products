var form = document.getElementById("myform");


let nom = document.getElementById("exampleInputNom");
let paraNom = document.getElementById("paraNom");

let prenom = document.getElementById("exampleInputPrenom");
let paraprenom = document.getElementById("paraprenom");

let age = document.getElementById("exampleInputAge");
let paraAge = document.getElementById("paraAge");

let mail = document.getElementById("exampleInputEmail1");
let paramail = document.getElementById("paramail");

let password = document.getElementById("exampleInputPassword1");
let parapassword = document.getElementById("parapassword");

let passwordConfirme = document.getElementById(
  "exampleInputConfirmationPassword1"
);
let paraConfirmationPassword1 = document.getElementById(
  "paraConfirmationPassword1"
);
let paraConfirmationPassword2 = document.getElementById(
  "paraConfirmationPassword2"
);

form.addEventListener("submit", register);

function register(e) {
  e.preventDefault();

  if (nom.value !== "") {
    nom.classList.add("is-valid");
    nom.classList.remove("is-invalid");
    paraNom.classList.remove("d-block");
  } else {
    nom.classList.add("is-invalid");
    paraNom.classList.add("d-block");
    nom.classList.remove("is-valid");
      }

  if (prenom.value !== "") {
    prenom.classList.add("is-valid");
    prenom.classList.remove("is-invalid");
    paraprenom.classList.remove("d-block");

  } else {
    prenom.classList.add("is-invalid");
    paraprenom.classList.add("d-block");
    prenom.classList.remove("is-valid");
  }

  if (age.value === "" || age.value < 0 || age.value >= 120) {
    age.classList.remove("is-valid");
    age.classList.add("is-invalid");
    if (age.value === "") {
      paraAge.innerHTML = "Age is required"

    } else if (age.value < 0 || age.value >= 120) {
      paraAge.innerHTML="Age is invalid"
    }
  } else {
    age.classList.add("is-valid");
    age.classList.remove("is-invalid");
    paraAge.classList.remove("d-block")
  }



  var expEmail = mail.value.indexOf("@")  

  if (mail.value !== "" &&  expEmail !== -1 ) {
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


  
  if (passwordConfirme.value === "" || passwordConfirme.value !== password.value) {
    passwordConfirme.classList.remove("is-valid");
    passwordConfirme.classList.add("is-invalid");
    
    if (passwordConfirme.value !== "") {
      paraConfirmationPassword1.innerText ="Confirmation is invalid";  
      paraConfirmationPassword2.innerText =""; 
    } else {
      paraConfirmationPassword2.innerText = "Password confirmation is required"; 
      paraConfirmationPassword1.innerText = "";
    }
  } else  {
    passwordConfirme.classList.remove("is-invalid");
    paraConfirmationPassword1.classList.remove("d-block");
    paraConfirmationPassword2.classList.remove("d-block");
    passwordConfirme.classList.add("is-valid");
  }


  var name = nom.value
  var prename = prenom.value
  var ageOld = age.value
  var email = mail.value
  var motPasse = password.value
  var CmotPasse = passwordConfirme.value




  if ( motPasse && email && prename && name && ageOld  !== "" && CmotPasse === motPasse ) {

    let utilisateurs =JSON.parse(localStorage.getItem("utilisateur")) || []
    
    utilisateurs.push(  {
      name:name,
      prenom:prename,
      age:ageOld,
      email:email,
      password:motPasse
    })
      
      
    localStorage.setItem("utilisateur",JSON.stringify(utilisateurs))

    
    window.location.href = "http://127.0.0.1:5500/login.html"
    

    console.log(utilisateurs)   

  }

  

}


