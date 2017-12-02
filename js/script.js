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
      animateTime = 1000,
      course = 1,
      margin = - slideWidth;

  $('.slider__item:last').clone().prependTo('.slider__inner');
  $('.slider__item').eq(1).clone().appendTo('.slider__inner');
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

