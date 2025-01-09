function topDiv(element) {
  let zIndex = element.style.zIndex.value;
  let cards = document.getElementsByClassName("card");
  let total = cards.length;

  for (let i = 0; i < cards.length; i++) {  
    let actualIndex = cards[i].style.zIndex;
    if (actualIndex = total) {
      cards[i].style.zIndex = actualIndex - 1;
    }
  }

  element.style.zIndex = total;
}
