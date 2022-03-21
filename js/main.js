/*************** SETING A FOOTER YEAR ********************/

const year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();

/*************** SETING A NAV-BAR SCROLL ********************/

const navBar = document.querySelector(".navigation");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navBar.classList.add("navbar-scroll");
  } else {
    navBar.classList.remove("navbar-scroll");
  }
});

/*************** INCLUDING PRODUCT CAROUSEL ********************/

let splide = new Splide( '.list-container', {
  type   : 'loop',
  perPage: 1,
  perMove: 1,  
  autoplay: true,
} );

splide.mount();