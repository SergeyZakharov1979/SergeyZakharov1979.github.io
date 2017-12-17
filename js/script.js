// Мобильное меню
var navToggle = document.querySelector('.main-nav__toggle');
var navList = document.querySelector('.main-nav__list');

navList.classList.remove('main-nav__list--nojs');
navToggle.classList.remove('main-nav__toggle--close');
navToggle.classList.add('main-nav__toggle--open');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('main-nav__toggle--open')) {
    navToggle.classList.remove('main-nav__toggle--open');
    navToggle.classList.add('main-nav__toggle--close');

    navList.classList.add('main-nav__list--opened');
    navList.classList.remove('main-nav__list--closed');
  }

  else {
    navToggle.classList.remove('main-nav__toggle--close');
    navToggle.classList.add('main-nav__toggle--open');

    navList.classList.add('main-nav__list--closed');
  }
});

// Слайдер Наши клиенты
$(function() {
  var slider = $('.slider__inner'),
      sliderContent = slider.html(),
      slideWidth = $('.slider').outerWidth(),
      slideCount = $('.slider__item').length,
      prev = $('.slider__button-prev'),
      next = $('.slider__button-next'),
      sliderInterval =3300,
      animateTime = 1500,
      course = -1,
      margin = - slideWidth;

  $('.slider__item:last').clone().prependTo('.slider__inner');
  $('.slider__item').eq(1).clone().appendTo('.slider__inner');
  $('.slider__item').eq(2).clone().appendTo('.slider__inner');
  $('.slider__item').eq(3).clone().appendTo('.slider__inner');
  $('.slider__item').eq(4).clone().appendTo('.slider__inner');
  $('.slider__item').eq(5).clone().appendTo('.slider__inner');
  $('.slider__item').eq(6).clone().appendTo('.slider__inner');
  $('.slider__item').eq(7).clone().appendTo('.slider__inner');
  $('.slider__item').eq(4).clone().appendTo('.slider__inner');
  $('.slider__inner').css('margin-left', -slideWidth);

  function nextSlide() {
    interval = window.setInterval(animate, sliderInterval);
  }

  function animate() {
    if (margin==-slideCount*slideWidth-slideWidth) {
      slider.css({'marginLeft':-slideWidth});
      margin=-slideWidth*2;
    }
    else if (margin==0 && course==-1) {
      slider.css({'marginLeft':-slideWidth*slideCount});
      margin=-slideWidth*slideCount+slideWidth;
    }
    else {
      margin = margin - slideWidth*(course);
    }
    slider.animate({'marginLeft':margin},animateTime);
  }

  function sliderStop() {
    window.clearInterval(interval);
  }

  prev.click(function() {
    if (slider.is(':animated')) {return false;}
    var course2 = course;
    course = 1;
    animate();
    course = course2;
  });

  next.click(function() {
    if (slider.is(':animated')) {return false;}
    var course2 = course;
    course = -1;
    animate();
    course = course2;
  });

  slider.add(next).add(prev).hover(function() {
    sliderStop();
  }, nextSlide);

  nextSlide();
});

// Заказ грузчиков через форму, кнопками "Заказать"
$('#btnOrder').click(function(event) {
  event.preventDefault();
  $('html, body').animate({
      scrollTop: $("#order-block").offset().top
  }, 500);
  $('.form-order__name').focus();
});

$('.btn--order').click(function(event) {
  event.preventDefault();
  $('html, body').animate({
      scrollTop: $("#order-block").offset().top
  }, 500);
  $('.form-order__name').focus();
});

// Фиксированное меню
/*var $menu = $('.main-nav');
$(window).scroll(function() {
  if ( $(this).scrollTop() > 50 && $menu.hasClass('main-nav')) {
  $menu.addClass('main-nav--fix');
  }
  else if($(this).scrollTop() <= 50 && $menu.hasClass('main-nav--fix')) {
  $menu.removeClass('main-nav--fix').addClass('main-nav');
  }
});
*/

// Плавная прокрутка до блока c ID
$(function(){
  $("a[href^='#']").click(function(event){
    event.preventDefault();
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top /*- 45*/});
    return false;
  });
});

// Модальное окно для обратного звонка
var btnModal = document.querySelector('.btn--callback');
var modal = document.querySelector('.modal__bg');
var formMess = document.querySelector('.form-order__text');
var formName = document.querySelector('.form-order__name');
var form = document.querySelector('.form-order__form');

if (modal) {
  btnModal.addEventListener('click', function (event) {
  event.preventDefault();
  modal.classList.add('modal--open');
  });

  modal.addEventListener('click', function (event) {
  event.preventDefault();
  modal.classList.remove('modal--open');
  formMess.innerText = 'Обратный звонок';
  formName.focus();
  });
}

//Отправка формы через Ajax
$('form').submit(function(event) {
  event.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
      $(this).find('input').val('');
     alert('Сообщение успешно отправлено.\n\rМы перезвоним Вам в ближайшее время');
    $('form').trigger("reset");
    $('.form-order__text').html('');
  });
  return false;
});


