import Swiper from 'swiper';

export default class Slider {
  constructor(item) {
    this.init(item);
  }

  init(item) {
    new Swiper (item, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
      breakpoints: {
        450: {
          slidesPerView: 1, //below 350. Non mobile first.
        }
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
  }
}