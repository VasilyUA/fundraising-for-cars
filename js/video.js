const urlParams = new URLSearchParams(window.location.search);
const videoParam = urlParams.get("video");
const list = document.getElementById("list");
const logo = document.getElementById("logo");
const videoPlayer = document.getElementById("videoPlayer");

if (videoParam === "true") {
  list.style.display = "none";
  logo.style.display = "none";
  videoPlayer.style.display = "block";

  videoPlayer.src = "../image/video.mp4";
  videoPlayer.play();
} else {
  videoPlayer.style.display = "none";
}
