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
const radiosInput = document.querySelector(".checkbox-input[type=radio]");
const checkbox1 = document.getElementById ('checkbox1');
const checkbox2 = document.getElementById ('checkbox2');
const location1 = document.getElementById ('location1');
const location2 = document.getElementById ('location2');
const location3 = document.getElementById ('location3');
const location4 = document.getElementById ('location4');
const location5 = document.getElementById ('location5');
const location6 = document.getElementById ('location6');
const button = document.getElementById ("btn-close");
const isValidMessage = document.getElementById ("modalmsg");
isValidMessage.style.visibility = "hidden";
button.style.visibility= "hidden";

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
// Validation function prenom
function firstValidate () {
  const firstnameValue = firstName.value.trim ();
  if (firstnameValue.length < 2) {
    return false
  }
  else {
    return true 
  }
}
// Validation du nom
function lastValidate () {
  const lastNameValue = lastName.value.trim ();
  if (lastNameValue.length < 2){
    return false
  }
  else {
    return true 
  }
}
// Validation de email
function emailValidate () {
  const emailValue = eMail.value.trim (); 
  let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  if (emailValue.match(regx)){
    return true
  }
  else{
    return false
  }
}

// Validation date de naissance
function birthValidate (){
  const birthdateValue = birthdate.value.trim ();
  let regexB = /^\d{4}-\d{2}-\d{2}$/;
  if (regexB.test(birthdateValue))  {
    return true
  }
  else {
    return false
  }  
  
}
// Validation nombre de tournois 
function quantityValidate (){
  const quantityValue = quantity.value.trim ();
  if (quantityValue === ""){
    return false
  }
  else {
    return true
  }
}
// Validation radio boutons
function radioButtonValidate () {
  if (location1.checked) {
    return true
  }
  else if (location2.checked) {
    return true
  }
  else if (location3.checked) {
    return true
  }
  else if (location4.checked) {
    return true
  }
  else if (location5.checked) {
    return true
  }
  else if (location6.checked) {
    return true
  }
  else {
    return false
  }
}
// Validation conditions genérales et prochains evenements 
function checkboxValidate () {
  if (checkbox1.checked){
    return true
  }
  else {
    return false
  }
}
function checkbox2Validate () {
  if (checkbox2.checked) {
    return true
  }
  else {
    return true
  }
}


// function validate : verifier les fonctions des differents inputs
function validate () {  
  if (firstValidate ()) {
    setSuccess (firstName);
  }
  else{
    setError (firstName,"Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  }
  if (lastValidate ()){
    setSuccess (lastName);
  }
  else {
    setError (lastName,"Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }
  if (emailValidate ()) {
    setSuccess (eMail)
  }
  else {
    setError (eMail,"Veuillez entrer une adresse mail valide.")
  }
  if (birthValidate()) {
    setSuccess (birthdate)
  }
  else {
    setError (birthdate, "Vous devez entrer votre date de naissance.")
  }
  if (quantityValidate ()){
    setSuccess (quantity)
  }
  else {
    setError (quantity,"Vous devez insérer au moins un chiffre.")
  }
  if (radioButtonValidate ()){
    setSuccess (radiosInput)
  }
  else {
    setError (radiosInput, "Vous devez choisir une option.");
  }
  if (checkboxValidate()) {
    setSuccess (checkbox1)
  }
  else {
    setError (checkbox1, "Vous devez vérifier que vous acceptez les termes et conditions.")
  }
  
  if (firstValidate () && lastValidate () && emailValidate () && quantityValidate () && radioButtonValidate () && checkboxValidate ()){
  succesMessage ();
  }   
// Message succes 
  function succesMessage () { 
    for (let i= 0; i<formData.length; i++ ) {
    const formData = document.querySelectorAll(".formData");
    formData[i].style.display= "none";
    }
    const p = document.querySelector (".text-label")
    p.style.display= "none";
    const isValidMessage = document.getElementById ("modalmsg");
    isValidMessage.style.visibility = "visible";
    isValidMessage.innerText = "Merci ! Votre réservation a été reçue."
    button.style.visibility= "visible";
    const btnCparti = document.querySelector(".btn-submit");
    btnCparti.style.display = "none";
  }
  button.addEventListener("click", () =>{
    modalbg.style.display = "none";
  })

}


// message d'erreurs et de validations
function setError (input, message) {
  const formData = input.parentElement;
  const errorElement = formData.querySelector("small");
  errorElement.style.visibility = "visible";
  errorElement.innerText = message;
  errorElement.style.color = "red";
  formData.classList.add("error");
  formData.classList.remove("success");
  const button = document.getElementById ("btn-close");
  button.style.visibility= "hidden";
  
}
function setSuccess (input) {
  const formData = input.parentElement;
  const errorElement = formData.querySelector("small");
  errorElement.style.visibility = "hidden";
  errorElement.innerText = "";
  formData.classList.add("success");
  formData.classList.remove("error");
  const button = document.getElementById ("btn-close");
  button.style.visibility = "hidden";
}
 


// form event listener
form.addEventListener("submit", function (e) {
  e.preventDefault ();
  validate();
   
    
});


