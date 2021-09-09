const navMain = document.querySelector('.main-nav');
const toggler = document.querySelector('.main-nav__toggler');

navMain.classList.remove('main-nav--nojs');

toggler.addEventListener('click', function() {
  if (toggler.classList.contains('main-nav__toggler--closed')) {
    toggler.classList.remove('main-nav__toggler--closed');
    toggler.classList.add('main-nav__toggler--opened');
    toggler.setAttribute('aria-label', 'Закрыть меню');

    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    toggler.classList.remove('main-nav__toggler--opened');
    toggler.classList.add('main-nav__toggler--closed');
    toggler.setAttribute('aria-label', 'Открыть меню');

    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
});
