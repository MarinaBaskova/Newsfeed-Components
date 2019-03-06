
const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence. 
  if(!menuStatus){ //if open
    menu.classList.toggle('menu--open');
    TweenMax.to(menu, 1, {css:{left: '0px'}, ease: Power3.easeInOut});

  } else { //if closed
     TweenMax.to(menu, 1, {css:{left: '-400px'}, ease: Power3.easeInOut});
      setTimeout(() => menu.classList.toggle('menu--open'), 1000);
  }

   menuStatus = !menuStatus;
};

// Start Here: Create a reference to the ".menu" class
let menuStatus = false;
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

// Close menu if user clicked somewhere on the page 
document.addEventListener('click', function(event) {
  if (event.target !== menu && event.target !== menuButton && menuStatus)
    toggleMenu();
});