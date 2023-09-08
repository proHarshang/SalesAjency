const preloader = document.getElementById("preloader");
const body = document.getElementsByTagName("body")[0];
const header_logo = document.getElementById("header_logo");
const lineAnim_header = document.querySelector("#header_logo .outer_img");

// preloader
window.addEventListener("load", function () {
  preloader.style.display = "none";
  body.style.overflowY = "auto";
  body.style.overflowX = "hidden";
  lineAnim_header.classList.add("lineAnim_header");
});

// setup nav
header_logo.style.height = lineAnim_header.offsetHeight - 50 + "px";
window.addEventListener("resize", function () {
  header_logo.style.height = lineAnim_header.offsetHeight - 50 + "px";
});
