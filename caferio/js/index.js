const navOpen = document.getElementById("navOpen");
const menu = document.getElementById("menu");
const menuClose = document.getElementById("menuClose");

navOpen.addEventListener("click", openMenu);
function openMenu() {
  console.log("navOpen clicked");
  menu.classList.remove("-right-full");
  menu.classList.add("right-0");
  navOpen.classList.add("hidden");
}

menuClose.addEventListener("click", closeMenu);
function closeMenu() {
  menu.classList.remove("right-0");
  menu.classList.add("-right-full");
  navOpen.classList.remove("hidden");
}

/* close menu on menu item click */
document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", closeMenu);
});
