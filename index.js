const body = document.querySelector('body');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navContainer = document.querySelector('.nav-container');

navToggle.addEventListener('click', function() {
  const visibility = navContainer.getAttribute('data-visible');

  if (visibility=="false-initial") {
    navContainer.setAttribute("data-visible", "true");
    body.style.overflow = "hidden";
  } else if (visibility=="true"){
    navContainer.setAttribute("data-visible", "false");
    body.style.overflow = "auto";}
    else if (visibility=="false"){
      navContainer.setAttribute("data-visible", "true"); 
      body.style.overflow = "hidden";
  }
;})





// menu card flipping
const cards = document.querySelectorAll('.card');
const front = document.querySelectorAll('.front');
const back = document.querySelectorAll('.back');
console.log(cards);
cards.forEach(item => {
  item.addEventListener('click', function() {
  item.classList.toggle('is-flipped');
  console.log(cards);

})});
