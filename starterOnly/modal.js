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
function firstValidate () {
  const firstnameValue = firstName.value.trim ();
  if (firstnameValue.length < 2) {
    return false
  }
  else {
    return true 
  }
}
function lastValidate () {
  const lastNameValue = lastName.value.trim ();
  if (lastNameValue.length < 2){
    return false
  }
  else {
    return true 
  }
}
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

function birthValidate1 (){
  const birthdateValue = birthdate.value.trim ();
  let regexB = /^\d{4}-\d{2}-\d{2}$/;
  if (regexB.test(birthdateValue)) {
    return true
  }
  else {
    return false
  }
  
  
}


/* function birthValidate (){
  const birthdateValue = parseInt(birthdate.value)
  if (isNaN (birthdateValue)) {
    return false
  }
  else {
    return true
  }
  
  
} */





function quantityValidate (){
  const quantityValue = quantity.value.trim ();
  if (quantityValue === ""){
    return false
  }
  else {
    return true
  }
}

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


// function validate 
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
  const birthdateValue = birthdate.value.trim ();
  let regexB = /^\d{4}-\d{2}-\d{2}$/;
  if (regexB.test(birthdateValue)) {
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

  function succesMessage () {
    const isValidMessage = document.getElementById ("modalmsg");
    isValidMessage.style.visibility = "visible";
    isValidMessage.innerText = "Merci ! Votre réservation a été reçue."
  }

  /* if (firstnameValue.length < 2) {
    setError (firstName,"Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  }
  else {
      setSuccess (firstName);
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
  if (isNaN (birthdateValue)){
    setError (birthdate, "Vous devez entrer votre date de naissance.");
  }
  else{
    setSuccess(birthdate);
  }
 
  if (quantityValue === ""){
    setError (quantity, "Vous devez insérer au moins un chiffre")
  }
  else {
    setSuccess (quantity);
  }

  const radiosInput = document.querySelector(".checkbox-input[type=radio]")
  if (location1.checked) {
    setSuccess (location1)
  }
  else if (location2.checked) {
    setSuccess (location2);
  }
  else if (location3.checked) {
    setSuccess (location3);
  }
  else if (location4.checked) {
    setSuccess (location4);
  }
  else if (location5.checked) {
    setSuccess (location5);
  }
  else if (location6.checked) {
    setSuccess (location6);
  }
  else {
    setError (radiosInput,"Veuillez choisir une option." )
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
  }  */
  
}

function setError (input, message) {
  const formData = input.parentElement;
  const errorElement = formData.querySelector("small");
  errorElement.style.visibility = "visible";
  errorElement.innerText = message;
  errorElement.style.color = "red";
  formData.classList.add("error");
  formData.classList.remove("success");
  const isValidMessage = document.getElementById ("modalmsg");
  isValidMessage.style.visibility = "hidden";
  
}
function setSuccess (input) {
  const formData = input.parentElement;
  const errorElement = formData.querySelector("small");
  errorElement.style.visibility = "hidden";
  errorElement.innerText = "";
  formData.classList.add("success");
  formData.classList.remove("error");
  const isValidMessage = document.getElementById ("modalmsg");
  isValidMessage.style.visibility = "hidden";
}
 


// form event
form.addEventListener("submit", function (e) {
  e.preventDefault ();
  validate();
   
    
});


