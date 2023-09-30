const form = document.getElementById("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const messageContainer = document.getElementById("message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordMatch = false;
const validateForm = () => {
  // check the form validation using constraints API
  isValid = form.checkValidity();
  if (!isValid) {
    message.innerHTML = "please enter in fields";
    message.style.color = "red";
    return;
  }
  // checking to see the password matche or not
  if (password.value === confirmPassword.value) {
    message.innerHTML = "password matched";
    message.style.color = "green";
    password.style.borderColor = "green";
    confirmPassword.style.borderColor = "green";
    passwordMatch = true;
  } else {
    message.innerHTML = "password not matched";
    message.style.color = "red";
    password.style.borderColor = "red";
    confirmPassword.style.borderColor = "red";
    passwordMatch = false;
    return;
  }
  if (passwordMatch && isValid) {
    message.innerHTML = "Registration successful";
    message.style.color = "green";
    message.style.borderColor = "green";
  }
};
const storeFormData = () => {
  const user = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user)
};
const processFormData = (e) => {
  e.preventDefault();
  validateForm();
  // submit the data if valid
  if(isValid && passwordMatch){
    storeFormData();
  }
};

form.addEventListener("submit", processFormData);
