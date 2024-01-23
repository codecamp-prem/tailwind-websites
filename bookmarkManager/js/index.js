/* Tabs */
const tabs = document.querySelectorAll(".customClassTab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  tabs.forEach((tab) => {
    tab.classList.remove("border-softRed", "border-b-4");
    tab.children[0].classList.remove("border-softRed", "border-b-4");
  });
  panels.forEach((panel) => panel.classList.add("hidden"));

  // activate tab and panel based on targeted/clicked Tab
  if (e.target.children.length > 0) {
    // clicked outside of tab heading py-5 div
    e.target.children[0].classList.add("border-softRed", "border-b-4");
  } else {
    e.target.classList.add("border-softRed", "border-b-4");
  }
  document
    .getElementById("tabpanels")
    .getElementsByClassName(e.target.getAttribute("data-target"))[0]
    .classList.remove("hidden");
}

// hambuger
const hamBtn = document.getElementById("menu-btn");
const hamMenu = document.getElementById("menu");
const changeTopLogo = document.getElementById("logo");

hamBtn.addEventListener("click", navToggle);

function navToggle() {
  hamBtn.classList.toggle("open");
  hamMenu.classList.toggle("flex");
  hamMenu.classList.toggle("hidden");

  if (hamMenu.classList.contains("flex")) {
    changeTopLogo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    changeTopLogo.setAttribute("src", "./images/logo-bookmark.svg");
  }
}

// close hambuger on one of the mobile menu list clicked
document.querySelectorAll(".mobileMenu").forEach((item) => {
  item.addEventListener("click", navToggle);
});
