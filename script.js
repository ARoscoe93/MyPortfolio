const menuButton = document.querySelector(".menu-button__button");
const menu = document.querySelector(".menu-button__menu");

menuButton.addEventListener("click", function() {
  menu.classList.toggle("show");
});

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function(menuItem) {
  menuItem.addEventListener("click", function() {
    menu.classList.remove("show");
  });
});


const form = document.querySelector("#contact-form");
const submitButton = document.querySelector("input[type=submit]");

submitButton.addEventListener("click", function() {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all of the forms before submitting.");
    return;
  }

  // Send the email
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "send_email.php");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
    name: name,
    email: email,
    message: message
  }));

  // Disable the submit button
  submitButton.disabled = true;
});
