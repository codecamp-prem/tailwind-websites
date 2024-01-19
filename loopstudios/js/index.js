const btnNav = document.getElementById("menu-btn");
const mobMenu = document.getElementById("menu");

btnNav.addEventListener("click", navToggle);
function navToggle() {
  btnNav.classList.toggle("open");
  mobMenu.classList.toggle("flex");
  mobMenu.classList.toggle("hidden");
}
