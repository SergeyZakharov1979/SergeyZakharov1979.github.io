// header-mobile-menu
var toggleMenu = document.querySelector('.main-header__toggle-menu');
var iconMenu = document.querySelector('.main-header__toggle-menu--close');
var mobileMenu = document.querySelector('.main-navigation');

mobileMenu.classList.remove('main-navigation--header-nojs');
mobileMenu.classList.add('main-navigation--header-off');

toggleMenu.addEventListener('click', function(event){
  event.preventDefault();
  if (iconMenu.classList.contains('main-header__toggle-menu--close')) {
    iconMenu.classList.remove('main-header__toggle-menu--close');
    iconMenu.classList.add('main-header__toggle-menu--open');

    mobileMenu.classList.remove('main-navigation--header-off');
    mobileMenu.classList.add('main-navigation--header-on');
  }

  else {
    iconMenu.classList.remove('main-header__toggle-menu--open');
    iconMenu.classList.add('main-header__toggle-menu--close');

    mobileMenu.classList.remove('main-navigation--header-on');
    mobileMenu.classList.add('main-navigation--header-off');
  }
});

// footer-mobile-menu
var footerToggleMenu = document.querySelector('.main-footer__toggle-menu');
var footerIconMenu = document.querySelector('.main-footer__toggle-menu--close');
var footerMobileMenu = document.querySelector('.main-navigation--footer');

footerMobileMenu.classList.remove('main-navigation--footer-nojs');
footerMobileMenu.classList.add('main-navigation--footer-off');

footerToggleMenu.addEventListener('click', function(event){
  event.preventDefault();
  if (footerIconMenu.classList.contains('main-footer__toggle-menu--close')) {
    footerIconMenu.classList.remove('main-footer__toggle-menu--close');
    footerIconMenu.classList.add('main-footer__toggle-menu--open');

    footerMobileMenu.classList.remove('main-navigation--footer-off');
    footerMobileMenu.classList.add('main-navigation--footer-on');
  }

  else {
    footerIconMenu.classList.remove('main-footer__toggle-menu--open');
    footerIconMenu.classList.add('main-footer__toggle-menu--close');

    footerMobileMenu.classList.remove('main-navigation--footer-on');
    footerMobileMenu.classList.add('main-navigation--footer-off');
  }
});

// modal
var btnOrder = document.querySelectorAll('.btn__order-js');
var modal = document.querySelector('.modal__dialog');
var btnClose = modal.querySelector('.btn__close');
var overlay = document.querySelector('.modal__overlay');
var fieldName = modal.querySelector('.field-name__input');

for (var i = 0, len = btnOrder.length;  i<len; i++) {
  btnOrder[i].addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.add('modal__dialog--on');
    overlay.classList.add('modal__overlay--on');
    fieldName.focus();
  });
};

btnClose.addEventListener('click', function(event) {
  event.preventDefault();
  if (modal.classList.contains('modal__dialog--on') &&
  overlay.classList.contains('modal__overlay--on')) {
    modal.classList.remove('modal__dialog--on');
    overlay.classList.remove('modal__overlay--on');
  }
});

overlay.addEventListener('click', function(event) {
  event.preventDefault();
  if (modal.classList.contains('modal__dialog--on') &&
  overlay.classList.contains('modal__overlay--on')) {
    modal.classList.remove('modal__dialog--on');
    overlay.classList.remove('modal__overlay--on');
  }
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains('modal__dialog--on') && overlay.classList.contains('modal__overlay--on')) {
      modal.classList.remove('modal__dialog--on')
      overlay.classList.remove('modal__overlay--on');
    }
  }
});

window.addEventListener('submit', function(event) {
  if (modal.classList.contains('modal__dialog--on') && overlay.classList.contains('modal__overlay--on')) {
      modal.classList.remove('modal__dialog--on')
      overlay.classList.remove('modal__overlay--on');
  }
});
