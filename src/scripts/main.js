const burger = document.getElementById('burger-btn');
const crossBtn = document.getElementById('close-btn');
const header = document.getElementById('header');
const main = document.querySelector('main');
const footer = document.querySelector('.footer');
const linkAbout = document.querySelector('.menu__link-about');
const linkProject = document.querySelector('.menu__link-projects');
const linkStories = document.querySelector('.menu__link-stories');
const linkJoin = document.querySelector('.menu__link-join');

/*--- Blur --- */

burger.addEventListener('click', addBlur);
crossBtn.addEventListener('click', removeBlur);
linkAbout.addEventListener('click', removeBlur);
linkProject.addEventListener('click', removeBlur); 
linkStories.addEventListener('click', removeBlur);
linkJoin.addEventListener('click', removeBlur);

function addBlur() {
  header.classList.add('filter');
  main.classList.add('filter');
  footer.classList.add('filter');

  $('body').css('overflow', 'hidden');
}

function removeBlur() {
  header.classList.remove('filter');
  main.classList.remove('filter');
  footer.classList.remove('filter');

  $('body').css('overflow', 'initial');
}

/*--- Sliders --- */

$('.slider').slick({
  dots: false,
  infinite: false,
  nextArrow: $('.slider__next-btn'),
  prevArrow: $('.slider__prev-btn'),
  speed: 500,
  draggable: false,
  swipe: false,
  fade: true,
  cssEase: 'linear'
});

const nextBtn = document.querySelector('.slider__next-btn');
const prevBtn = document.querySelector('.slider__prev-btn');
const currentSlideNum = document.querySelector('.slider__pagingInfo-num');

nextBtn.addEventListener('click', function() {
  if(+currentSlideNum.innerText < 3 ) {
    +currentSlideNum.innerText ++;
  }
});

prevBtn.addEventListener('click', function() {
  if(+currentSlideNum.innerText > 1 ) {
    +currentSlideNum.innerText --;
  }
});

const $slider = $('.latest-news__slider');
const $progressBar = $('.latest-news__slider-progress');

function setProgress(index) {
  const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
  const bigPhoneCalc = ((index + 2) / ($slider.slick('getSlick').slideCount)) * 100;
  const tabCalc = ((index + 3) / ($slider.slick('getSlick').slideCount)) * 100;
  

  if (document.body.clientWidth > 700) {
    $progressBar
      .css('background-size', `${tabCalc}% 100%`)
      .attr('aria-valuenow', tabCalc);
  } else if (document.body.clientWidth > 535) {
    $progressBar
      .css('background-size', `${bigPhoneCalc}% 100%`)
      .attr('aria-valuenow', bigPhoneCalc);
  } else {
    $progressBar
      .css('background-size', `${calc}% 100%`)
      .attr('aria-valuenow', calc);
  }
}

$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  setProgress(nextSlide);
  
});

$slider.slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  nextArrow: false,
  prevArrow: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}); 

setProgress(0);

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});

/*---Accordeon--- */

const accordionContent = document.querySelectorAll('.accordion__content');

accordionContent.forEach((item, index) => {
  const header = item.querySelector('.accordion__header');

  header.addEventListener('click', () => {
    item.classList.toggle('open');

    const description = item.querySelector('.accordion__description');

    if (item.classList.contains('open')) {
      description.style.height = `${description.scrollHeight}px`;
      item.querySelector('img').classList.add('rotate');
    } else {
      description.style.height = '0px';
      item.querySelector('img').classList.remove('rotate');
    }

    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove('open');
      const descr = item2.querySelector('.accordion__description');

      descr.style.height = '0px';
      item2.querySelector('img').classList.remove('rotate');
    }
  });
}

/*---Theme switch--- */

const toggle = document.querySelector('.toggle');
const toggleItem = document.querySelector('.toggle__btn');
const menuToggle = document.querySelector('.menu__toggle');
const menuToggleItem = document.querySelector('.menu__toggle-btn');
const body = document.querySelector('.page__body');
const logo = document.querySelector('.header__logo-content');
const headerPhone = document.querySelector('.header__phone');
const burgerBtn = document.getElementById('burger-btn');
const headerHr = document.querySelector('.header__decorate-line');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu__link ');
const crossIcon = document.querySelector('.menu__cross-icon');
const menuIconsSocial = document.querySelectorAll('.menu__sotials-icon');
const aboutTitle = document.querySelector('.about__title-first');
const aboutContentText = document.querySelectorAll('.accordion__description');
const contentBlock = document.querySelectorAll('.accordion__content');
const accordionTitle = document.querySelectorAll('.accordion__header');
const aboutContentTitle = document.querySelectorAll('.about__content-title');
const pseudoElement = document.querySelectorAll('.about__content-arrow');
const newsTitle = document.querySelector('.latest-news__title');
const sliderCard = document.querySelectorAll('.latest-news__card-wrap');
const cardText = document.querySelectorAll('.latest-news__card-text');
const cardTitle = document.querySelectorAll('.latest-news__card-title');
const subscribeSection = document.querySelector('.subscribe');
const subscribeTitle = document.querySelector('.subscribe__title');
const subscribeBtn = document.querySelector('.subscribe__btn');
const footerSocialsText = document.querySelectorAll('.footer__sotials-text');
const footerIcon = document.querySelectorAll('.footer__icon');
const progressBar = document.querySelector('.latest-news__slider-progress');

toggle.addEventListener('click', handleToggle);
menuToggle.addEventListener('click', handleToggle);

function handleToggle() {
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  logo.classList.toggle('active');
  headerPhone.classList.toggle('active');
  burgerBtn.classList.toggle('active');
  toggleItem.classList.toggle('active');
  headerHr.classList.toggle('active');
  menu.classList.toggle('active');
  crossIcon.classList.toggle('active');
  aboutTitle.classList.toggle('active');
  menuToggleItem.classList.toggle('active');
  newsTitle.classList.toggle('active');
  subscribeSection.classList.toggle('active');
  subscribeTitle.classList.toggle('active');
  subscribeBtn.classList.toggle('active'); 
  footer.classList.toggle('active');
  progressBar.classList.toggle('active');

  menuLink.forEach(item => item.classList.toggle('active'));
  menuIconsSocial.forEach(item => item.classList.toggle('active'));
  aboutContentTitle.forEach(item => item.classList.toggle('active'));
  contentBlock.forEach(item => item.classList.toggle('active'));
  aboutContentText.forEach(item => item.classList.toggle('active'));
  accordionTitle.forEach(item => item.classList.toggle('active'));
  pseudoElement.forEach(item => item.classList.toggle('active'));
  sliderCard.forEach(item => item.classList.toggle('active'));
  cardText.forEach(item => item.classList.toggle('active')); 
  cardTitle.forEach(item => item.classList.toggle('active'));
  footerSocialsText.forEach(item => item.classList.toggle('active'));
  footerIcon.forEach(item => item.classList.toggle('active'));
}
