const urlParams = new URLSearchParams(window.location.search);
const resultParam = urlParams.get("result");
const cardsResult = document.getElementById("cards-result");
const list = document.getElementById("list");
const logo = document.getElementById("logo");

if (resultParam === "true") {
  cardsResult.style.display = "flex";
  list.style.display = "none";
  logo.style.display = "none";
} else {
  cardsResult.style.display = "none";
  list.style.display = "block";
  logo.style.display = "block";
}
