const urlParams = new URLSearchParams(window.location.search);
const videoParam = urlParams.get("video");
const list = document.getElementById("list");
const logo = document.getElementById("logo");
const videoPlayer = document.getElementById("videoPlayer");

// Перевіряємо, чи є параметр video=true
if (videoParam === "true") {
  // Показуємо контейнер відео і ховаємо інші елементи
  list.style.display = "none";
  logo.style.display = "none";
  videoPlayer.style.display = "block";

  // Встановлюємо шлях до відео файлу
  videoPlayer.src = "../image/video.mp4";

  // Запускаємо відтворення
  videoPlayer.play();
} else {
  // Ховаємо контейнер відео і показуємо інші елементи
  videoPlayer.style.display = "none";
  list.style.display = "block";
  logo.style.display = "block";
}
