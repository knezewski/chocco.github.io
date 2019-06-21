;(function(){

function open() {
  navList.style.display = 'block';
  close.style.display = 'block';
};
function cl() {
 navList.style.display = 'none';
 close.style.display = 'none';
};
const navList = document.querySelector('.header__nav-list');
const hambMenu = document.querySelector('.hamburger_menu');
const close = document.querySelector('.close');
hambMenu.addEventListener('click',open);
close.addEventListener('click', cl);

})()
