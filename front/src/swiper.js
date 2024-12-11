import Swiper from 'swiper/bundle';

import 'swiper/css/bundle'

import './swiper.css'

const swiper = new Swiper('.swiper', {
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },
   autoplay: {
      delay: 7500,
      disableOnInteraction: false
   }
});