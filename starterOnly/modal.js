function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll (".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById ("last");
const eMail = document.getElementById ("email");
const birthdate = document.getElementById ("birthdate");
const quantity = document.getElementById("quantity");
const checkboxInput = document.getElementsByClassName ("checkbox-input");
const form = document.getElementById ("form");
const checkbox1 = document.getElementById ('checkbox1');
const checkbox2 = document.getElementById ('checkbox2');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event

closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));

// close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

// variables erreur

const error1 = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const error2 = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
const errorOption = "Vous devez choisir une option.";
const verifError = "Vous devez vérifier que vous acceptez les termes et conditions.";
const birthdateError = "Vous devez entrer votre date de naissance."
// function


function birthdateValidate () {
  const birthdateValue = birthdate.value.trim ();
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
  return regex.test(birthdateValue);
}

  
function validate () {
  const firstnameValue = firstName.value.trim ();
  const lastNameValue = lastName.value.trim ();
  const emailValue = eMail.value.trim (); 
  const quantityValue = quantity.value.trim ();

  if (firstnameValue === "" || firstnameValue.length <= 2) {
    setErrorMessage (first,"Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
  }


  
}

function setErrorMessage (input, message) {
  const formData = input.parentElement;
  const errorElement = document.getElementById("error");
  errorElement.innerText = message;

}

 


// form event
form.addEventListener("submit", function (e){
  e.preventDefault ();
  validate();
  
   
    
});


