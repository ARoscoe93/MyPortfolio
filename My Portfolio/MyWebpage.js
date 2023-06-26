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
