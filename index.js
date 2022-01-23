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
const card = document.querySelector('.card');
const front = document.querySelector('.front');
const back = document.querySelector('.back');

card.addEventListener('click', function() {
  const whatSide = card.getAttribute('data-side');
  console.log(whatSide);

  if (whatSide=="front-initial") {
    card.setAttribute("data-side", "back");
  } else if (whatSide=="back") {
    card.setAttribute("data-side", "front");
  } else if (whatSide=="front") {
    card.setAttribute("data-side", "back");
  
}
;})