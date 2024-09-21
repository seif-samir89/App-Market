// BtnMobile Menu
let btnMobile = document.getElementById("btnMobile");
let nav = document.getElementById("nav");
let viewMobile = document.getElementById("viewMobile");
btnMobile.addEventListener("click", function () {
  nav.classList.toggle("active");
  viewMobile.classList.toggle("active");
});
viewMobile.addEventListener("click", function () {
  nav.classList.remove("active");
  viewMobile.classList.remove("active");
});
// Loading
window.addEventListener("load", function () {
  document.querySelector(".loading").classList.add("hide");
});
// Header
window.onscroll = function () {
  scrollHeader();
};
let head = document.getElementById("head");
let x = 0;
function scrollHeader() {
  if (window.pageYOffset > x) {
    head.classList.add("fixed-head");
  } else {
    head.classList.remove("fixed-head");
  }
}
// Links
let links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let att = document.querySelector(this.getAttribute("href"));
    att.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});
// WOW
let wow = document.querySelectorAll(".wow");
let i = 0;
window.addEventListener("scroll", function () {
  for (i = 0; i < wow.length; i++) {
    if (wow[i].getBoundingClientRect().top < window.innerHeight - 100) {
      wow[i].classList.add("show");
    } else {
      wow[i].classList.remove("show");
    }
  }
});
