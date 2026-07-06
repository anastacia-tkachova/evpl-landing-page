import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.gallery-slider', {
  modules: [Navigation],
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.gallery-next',
    prevEl: '.gallery-prev',
  },

  slidesPerView: 1,
  spaceBetween: 16,
  grabCursor: true,

  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
  },
});
