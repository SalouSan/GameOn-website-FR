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

  
function validate () {
  const firstnameValue = firstName.value.trim ();
  const lastNameValue = lastName.value.trim ();
  const quantityValue = quantity.value.trim ();
  const emailValue = eMail.value.trim (); 
  let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  const birthdateValue = birthdate.value;
  let regexB = /^(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
  
  function firstNameV () {
    if (firstnameValue.length < 2) {
      setError (firstName,"Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
      firstName.setAttribute ("data-error-visible", "true");

    }
    else {
      setSuccess (firstName);
    }
  }

  if (lastNameValue.length < 2){
    setError (lastName,"Veuillez entrer 2 caractères ou plus pour le champ du nom.")

  }
  else {
    setSuccess (lastName);
  }

  if (emailValue.match(regx)){
    setSuccess (eMail);
  }
  else{
    setError (eMail,"Veuillez entrer une adresse mail valide");
  }

  if (!birthdateValue.match(regexB)){
    setError (birthdate, "DOB obligatoire");
  }
  else{
    setSuccess (birthdate);

  }

  if (quantityValue === ""){
    setError (quantity, "Vous devez insérer au moins un chiffre")
  }
  else {
    setSuccess (quantity);
  }

  const radioInput = document.querySelector(".checkbox-input[type=radio]")
   if (!radioInput.checked) {
      setError (radioInput, "Veuillez choisir une option.");
    }
    else {
      setSuccess (radioInput)
    }
  
  
  if (checkbox1.checked){
    setSuccess (checkbox1)
  }
  else {
    setError (checkbox1, "Vous devez vérifier que vous acceptez les termes et conditions.");
  }

  if (checkbox2.checked) {
    valid = true;
  }
  else {
    setSuccess (checkbox2)
  }


  
}

function setError (input, message) {
  const formData = input.parentElement;
  const errorElement = formData.querySelector("small");
  errorElement.style.visibility = "visible";
  errorElement.innerText = message;
  errorElement.style.color = "red";
  formData.classList.add("error");
  formData.classList.remove("success");
  
}
function setSuccess (input) {
  const formData = input.parentElement;
  const errorElement = formData.querySelector("small");
  errorElement.style.visibility = "hidden";
  errorElement.innerText = "";
  formData.classList.add("success");
  formData.classList.remove("error");
}
 


// form event
form.addEventListener("submit", function (e) {
  e.preventDefault ();
  validate();
   
    
});


