const colorTheme = document.getElementById("color-theme");
const body = document.getElementById("body");

colorTheme.addEventListener("click", function () {
  body.classList.remove("bg-[#f5f8ff]");
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
