
if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark", document.body.classList.contains("dark"));
}
