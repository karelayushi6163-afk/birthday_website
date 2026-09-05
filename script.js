const screens = [...document.querySelectorAll(".screen")];
const buttons = [...document.querySelectorAll("[data-next]")];
const progress = document.getElementById("progressBar");

function show(id){
  screens.forEach(s => s.classList.toggle("active", s.id === id));
  const index = Math.max(0, screens.findIndex(s => s.id === id));
  progress.style.width = `${(index / (screens.length - 1)) * 100}%`;
  window.scrollTo({top:0, behavior:"smooth"});
}

buttons.forEach(btn => btn.addEventListener("click", () => show(btn.dataset.next)));
show("home");
