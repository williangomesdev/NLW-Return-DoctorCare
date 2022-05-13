const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const body = document.querySelector("body");

window.addEventListener("scroll", onScroll);

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  //pegar o elemento pelo id para adicionar classes
  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  //Criando uma linha imaginária no meio da sessão

  //linha alvo
  const targetLine = scrollY + innerHeight / 2;

  //Verificar se a seção passou da linha
  //quais dados?

  //topo da sessão
  const sectionTop = section.offsetTop;

  //a altura da sessão
  const sectionHeight = section.offsetHeight;

  //o topo da sessão chegou a ultrapassar a linha imaginaria
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  //verificar se a base está abaixo da linha alvo
  //fim da sessão
  const sectionEndsAt = sectionTop + sectionHeight;

  //o final da sessão passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  //limites da sessão
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  //Remover classe dos id após sair dos limites da sessão
  menuElement.classList.remove("active");

  //Se a sessão estiver dentro dos limites da sessão adicione a classe active
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
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
