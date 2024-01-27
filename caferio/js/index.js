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

/* light box */
const lightBox = document.querySelector(".lightbox");
const lightBoxBody = document.querySelector(".lightbox-body");

const images = document.querySelectorAll(".testimonials-gallery-img");

images.forEach(function (image) {
  image.addEventListener("click", function () {
    lightBox.classList.remove("scale-0");
    lightBox.classList.add("scale-100");
    const img = document.createElement("img");
    img.src = image.src;
    img.classList.add("w-full");
    img.classList.add("h-full");
    img.classList.add("image-cover");
    if (lightBoxBody.children[0]) {
      lightBoxBody.removeChild(lightBoxBody.children[0]);
    }
    lightBoxBody.appendChild(img);
  });
});

lightBox.addEventListener("click", function (e) {
  if (!e.target.getAttribute("id")) return;
  lightBox.classList.add("scale-0");
  lightBox.classList.remove("scale-100");
});

// get year
const getYear = new Date().getFullYear();
document.querySelector(".currentYear").innerHTML = getYear;
