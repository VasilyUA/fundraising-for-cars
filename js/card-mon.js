const monoTextCopy = document.getElementById("monoTextCopy");
const monoCard = document.getElementById("mono-card");
const manoCopyText = document.getElementById("mono-text-copy");

monoTextCopy.addEventListener("click", function myFunction() {
  navigator.clipboard.writeText(monoCard.textContent);
  manoCopyText.style.display = "block";
  clearAlert(manoCopyText);
});

function clearAlert(params) {
  setTimeout(() => {
    params.style.display = "none";
  }, 2000);
}
