const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTexto = document.getElementById("modal-texto");
const close = document.getElementsByClassName("close")[0];

document.querySelectorAll(".arte").forEach(arte => {
  arte.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = arte.querySelector("img").src;
    modalTexto.textContent = "Arte pega no Pinterest";
  });
});

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
console.log("JS carregou!");