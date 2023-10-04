const urlParams = new URLSearchParams(window.location.search);
const resultParam = urlParams.get("result");
const list = document.getElementById("list");
const logo = document.getElementById("logo");

if (resultParam === "true") {
  list.style.display = "none";
  logo.style.display = "none";
} else {
  list.style.display = "block";
  logo.style.display = "block";
}
