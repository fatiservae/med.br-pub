function topDiv(element) {
  let zIndex = element.style.zIndex;
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {  
    cards[i].style.zIndex = 0;
    cards[i].style.border = "none";
    cards[i].style.boxShadow = "-1rem 0 3rem black";
  }

  element.style.border = "1px solid black";
  element.style.boxShadow = "-1rem 0 1rem var(--fundoCard)";
  if (zIndex < 999) {
    element.classList.toggle("top");
    element.style.zIndex = 999;
    //element.style.height = 300;
    //element.style.width = 240;
  }
}
