import Swiper from 'swiper/bundle';

import 'swiper/css/bundle'

import './swiper.css'

const banner = new Swiper('.swiper#banner', {
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
   },
   autoplay: {
      delay: 7500,
      disableOnInteraction: false
   }
});

const promotions = new Swiper('.swiper#promotions', {
   loop: true,
   slidesPerView: 5,
   spaceBetween: 30,
   slidesPerGroup: 5,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
   },
   autoplay: {
      delay: 5000,
      disableOnInteraction: true
   }
});