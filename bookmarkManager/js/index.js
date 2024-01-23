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
