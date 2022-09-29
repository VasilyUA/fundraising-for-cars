const prevatTextCopy = document.getElementById("prevatTextCopy");
const prevatCard = document.getElementById("prevat-card");
const manoCopyText = document.getElementById("prevat-text-copy");

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
