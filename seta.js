document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTexto = document.getElementById("modal-texto");
  const close = document.getElementsByClassName("close")[0];
  const artes = document.querySelectorAll(".arte img");
  const setaEsquerda = document.querySelector(".seta.esquerda");
  const setaDireita = document.querySelector(".seta.direita");

  let indexAtual = 0;

  // Abrir o modal ao clicar na imagem
  artes.forEach((img, index) => {
    img.addEventListener("click", () => {
      indexAtual = index;
      abrirModal();
    });
  });

  function abrirModal() {
    modal.style.display = "flex";
    modalImg.src = artes[indexAtual].src;
    modalTexto.textContent = artes[indexAtual].alt || "Arte sem descrição";
  }

  // Fechar modal
  close.onclick = () => modal.style.display = "none";

  // Setas de navegação
  setaEsquerda.onclick = () => {
    indexAtual = (indexAtual - 1 + artes.length) % artes.length;
    abrirModal();
  };

  setaDireita.onclick = () => {
    indexAtual = (indexAtual + 1) % artes.length;
    abrirModal();
  };

  // Fechar clicando fora da imagem
 /* window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
*/
  // Suporte a toque (arrastar)
  let startX = 0;
  modal.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
  modal.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) setaDireita.onclick(); 
    else if (endX - startX > 50) setaEsquerda.onclick();
  });
});

console.log("JS carregou!");

document.querySelector('.add-btn').addEventListener('click', () => {
    
    document.getElementById("fileinput").click();
  });
  
  document.getElementById('fileinput').addEventListener('change', (event)=> {
    const file= event.target.files[0];
    if(file){
      console.log("imagem selecionada:", file.name);
    }
  });
