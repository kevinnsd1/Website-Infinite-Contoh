// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika menu di klik
document.querySelector("#menu-menu"),
  (onclick = () => {
    navbarNav.classList.toggle("active");
  });

// klik di luar side bar untuk hilangkan sidebar

const menu = document.querySelector("#menu-menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
