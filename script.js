function topDiv(element) {
  let cards = document.getElementsByClassName("card");
  let topIndex = 0 ; 
  for (let i = 0; i < cards.length; i++) {  
    let cardIndex = parseInt(window.getComputedStyle(cards[i]).zIndex, 10);
    console.log(cardIndex);
    if (cardIndex > topIndex) {
      topIndex = cardIndex;
    }
  } 
  console.log(topIndex);

  element.style.zIndex = topIndex + 1;
}
