const inputLink = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

linkForm.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  console.log(inputLink.value);
  if (inputLink.value.trim() === "") {
    errMsg.innerHTML = "Please enter the link to shorten";
    inputLink.classList.add("border-red");
  } else if (!validURL(inputLink.value.trim())) {
    errMsg.innerHTML = "Please enter a Valid URL";
    inputLink.classList.add("border-red");
  } else {
    errMsg.innerHTML = "";
    inputLink.classList.remove("border-red");
    alert("URL link shorten");
  }
}

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}
