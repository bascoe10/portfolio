const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  let action = showMenu ? "remove" : "add";
  showMenu = !showMenu;
  menuBtn.classList[action]("close");
  menu.classList[action]("show");
  menuNav.classList[action]("show");
  menuBranding.classList[action]("show");
  navItems.forEach(item => {
    item.classList[action]("show");
  });
}
