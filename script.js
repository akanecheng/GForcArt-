const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTexto = document.getElementById("modal-texto");
const close = document.getElementById("close");

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

const perfil= document.getElementById("perfil");
const zoomContainer= document.getElementById("zoomContainer");
const zoomImage=document.getElementById("zoomImage");


perfil.addEventListener('click', () => {
  zoomImage.src = perfil.src;
  zoomContainer.style.display='flex';
});

close.addEventListener('click',() => {
 zoomContainer.style.display='none';
});

zoomContainer.addEventListener('click', (e)=> {
  if(e.target===zoomContainer){

zoomContainer.style.display='none';
}
});