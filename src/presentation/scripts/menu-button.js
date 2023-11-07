const button = document.querySelector(["[menu-sidebar-button]"]);
const menu = document.querySelector(["[menu-sidebar-options]"]);

menu.classList.add("hidden");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});
