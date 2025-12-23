const carrossel = document.getElementById("carrossel");
let isDown = false;
let startXCarrossel;
let scrollLeft;

carrossel.addEventListener("mousedown", e => {
  isDown = true;
  startXCarrossel = e.pageX - carrossel.offsetLeft;
  scrollLeft = carrossel.scrollLeft;
});

carrossel.addEventListener("mouseleave", () => {
  isDown = false;
});

carrossel.addEventListener("mouseup", () => {
  isDown = false;
});

carrossel.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carrossel.offsetLeft;
  const walk = (x - startXCarrossel) * 1.5;
  carrossel.scrollLeft = scrollLeft - walk;
});

carrossel.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");
  let center = carrossel.scrollLeft + carrossel.offsetWidth / 2;
  let closestCard = null;
  let closestDistance = Infinity;

  cards.forEach(card => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const distance = Math.abs(center - cardCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }
  });

  cards.forEach(card => card.classList.remove("ative"));
  if (closestCard) closestCard.classList.add("ative");
});

//parte do header botão e menu

const menu = 
document.getElementById("menuLateral");
let currentLeft= -250;
let startXMenu= 0;

function toggleMenu(){
  if(currentLeft === 0){
    menu.style.left= "-250px";
    menu.classList.remove("aberto");
    currentLeft= -250;
  }
  else{
    menu.style.left= "0px";
    menu.classList.add("aberto");
    currentLeft= 0;
  }
}

menu.addEventListener("touchstart", (e)=>{
  startXMenu= e.touches[0].clientX;
});

menu.addEventListener("touchmove", (e)=>{
  const moveX= e.touches[0].clientX;
  let diff= moveX-startXMenu;
  let newLeft = currentLeft+diff;
  newLeft= Math.min(0,newLeft);
  newLeft= Math.max(-250,newLeft);
  
  menu.style.left= newLeft+"px";
});

menu.addEventListener("touchend", ()=>{
  if(parseInt (menu.style.left) <-125){
    menu.style.left="-250px"
    menu.classList.remove("aberto");
    currentLeft= -250;
  }else{
    menu.style.left= "0px";
    menu.classList.add("aberto");
    currentLeft= 0;
  }
});