const prevatTextCopy = document.getElementById("peyPalTextCopy");
const prevatCard = document.getElementById("peyPal");
const manoCopyText = document.getElementById("peyPal-text-copy");

prevatTextCopy.addEventListener("click", function myFunction() {
  navigator.clipboard.writeText(prevatCard.textContent);
  manoCopyText.style.display = "block";
  clearAlert(manoCopyText);
});

function clearAlert(params) {
  setTimeout(() => {
    params.style.display = "none";
  }, 2000);
}
