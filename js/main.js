const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const body = document.querySelector("body");

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  body.classList.add("menuExpanded");
}

function closeMenu() {
  body.classList.remove("menuExpanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000,
}).reveal(`#home,
#home img,
#home .stats, 
#services,
#services header,
#services .card, 
#about, 
#about header, 
#about .content`);
