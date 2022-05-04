const navigation = document.querySelector("#navigation");
const body = document.querySelector("body");

function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function openMenu() {
  body.classList.add("menuExpanded");
}

function closeMenu() {
  body.classList.remove("menuExpanded");
}
