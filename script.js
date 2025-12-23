const menu = document.getElementById("menuLateral");
let startX = 0;
let currentLeft = -250; 
const close= document.getElementById("close");

function toggleMenu() {
  if (currentLeft === 0) { 
    menu.style.left = "-250px";
    menu.classList.remove("aberto");
    currentLeft = -250;
  } else { 
    menu.style.left = "0px";
    menu.classList.add("aberto");
    currentLeft = 0;
  }
}


menu.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

menu.addEventListener("touchmove", (e) => {
  const moveX = e.touches[0].clientX;
  let diff = moveX - startX;
  let newLeft = Math.min(0, currentLeft + diff);
  newLeft = Math.max(-250, newLeft);
  menu.style.left = newLeft + "px";
});

menu.addEventListener("touchend", () => {
  if (parseInt(menu.style.left) < -125) { 
    menu.style.left = "-250px";
    menu.classList.remove("aberto");
    currentLeft = -250;
  } else { 
    menu.style.left = "0px";
    menu.classList.add("aberto");
    currentLeft = 0;
  }
});

document.addEventListener

const perfil= document.getElementById("perfil");
const zoomContainer= document.getElementById("zoomContainer");
const zoomImage= document.getElementById("zoomImage");

perfil.addEventListener("click", ()=>{
  zoomContainer.style.display="flex";
 zoomImage.src= perfil.src; 
});

close.addEventListener("click", () =>{
  zoomContainer.style.display="none";
  });
  
  zoomContainer.addEventListener("click", (e) => {
    if (e.target === zoomContainer) {
    zoomContainer.style.display= "none";
    }
  });
  
  document.querySelector('.add-btn').addEventListener('click', () => {
    
    document.getElementById("fileinput").click();
  });
  
  document.getElementById('fileinput').addEventListener('change', (event)=> {
    const file= event.target.files[0];
    if(file){
      console.log("imagem selecionada:", file.name);
    }
  });
