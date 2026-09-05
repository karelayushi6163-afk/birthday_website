const pages = [...document.querySelectorAll(".page")];
const buttons = [...document.querySelectorAll("[data-go]")];
const dots = [...document.querySelectorAll(".dots span")];

function showPage(id){
  pages.forEach(page => page.classList.toggle("active", page.id === id));
  const index = pages.findIndex(page => page.id === id);
  dots.forEach((dot,i) => dot.style.opacity = i === index ? ".9" : ".3");
  window.scrollTo({top:0, behavior:"smooth"});
}

buttons.forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.go));
});

showPage("home");
