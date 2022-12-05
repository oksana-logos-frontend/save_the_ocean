const burger = document.getElementById('burger-btn');
const crossBtn = document.getElementById('close-btn');
const header = document.getElementById('header');
const main = document.querySelector('main');

burger.addEventListener('click', function() {
  header.classList.add('filter');
  main.classList.add('filter');
});

crossBtn.addEventListener('click', function() {
  header.classList.remove('filter');
  main.classList.remove('filter');
});


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


$('.latest-news__slider').slick({
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

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});


const toggle = document.querySelector('.toggle');
const toggleItem = document.querySelector('.toggle__btn');
const menuToggle = document.querySelector('.menu__toggle');
const menuToggleItem = document.querySelector('.menu__toggle-btn');
const body = document.querySelector('.page__body');
const logo = document.querySelector('.header__logo-content');
const headerPhone = document.querySelector('.header__phone');
const burgerBtn = document.getElementById('burger-btn');
const headerHr = document.querySelector('.header__decorate-line');
const aboutTitle = document.querySelector('.about__title-first');
const aboutHr = document.querySelector('.about__hr');
const aboutContentText = document.querySelector('.about__content-text');
const aboutTopBorder = document.querySelector('.about__content-block--second');
const contentBlock = document.querySelector('.about__content-block');
const contentBlock1 = document.querySelector('.about__content-block--first');
const aboutBottomContent = document.querySelector('.about__bottom-content');
const aboutContentTitle = document.querySelectorAll('.about__content-title');
const pseudoElement = document.querySelectorAll('.about__content-arrow');
const sliderCard = document.querySelectorAll('.latest-news__card-wrap');
const cardText = document.querySelectorAll('.latest-news__card-text');
const cardTitle = document.querySelectorAll('.latest-news__card-title');
const subscribeSection = document.querySelector('.subscribe');
const subscribeTitle = document.querySelector('.subscribe__title');
const subscribeBtn = document.querySelector('.subscribe__btn');
const footer = document.querySelector('.footer');
const footerSocialsText = document.querySelectorAll('.footer__sotials-text');
const footerIcon = document.querySelectorAll('.footer__icon');

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
  aboutTitle.classList.toggle('active');
  aboutHr.classList.toggle('active'); 
  aboutContentText.classList.toggle('active'); 
  menuToggleItem.classList.toggle('active');
  aboutTopBorder.classList.toggle('active');
  contentBlock.classList.toggle('active');
  contentBlock1.classList.toggle('active');
  aboutBottomContent.classList.toggle('active');
  subscribeSection.classList.toggle('active');
  subscribeTitle.classList.toggle('active');
  subscribeBtn.classList.toggle('active'); 
  footer.classList.toggle('active'); 

  aboutContentTitle.forEach(item => item.classList.toggle('active'));
  pseudoElement.forEach(item => item.classList.toggle('active'));
  sliderCard.forEach(item => item.classList.toggle('active'));
  cardText.forEach(item => item.classList.toggle('active')); 
  cardTitle.forEach(item => item.classList.toggle('active'));
  footerSocialsText.forEach(item => item.classList.toggle('active'));
  footerIcon.forEach(item => item.classList.toggle('active'));
}
