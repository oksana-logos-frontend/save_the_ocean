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

