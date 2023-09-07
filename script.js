const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav-menu');
function toggleNav() {
  burger.classList.toggle('fa-bars');
  burger.classList.toggle('fa-times');
  nav.classList.toggle('nav-active');
  var x = document.getElementById("nav");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
burger.addEventListener('click', function () {
  toggleNav();
});