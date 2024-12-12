import Swiper from 'swiper/bundle';

import 'swiper/css/bundle'

import './swiper.css'

const banner = new Swiper('.swiper#banner', {
   loop: true,
   speed: 750,
   slidesPerView: 1,
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

const promotions = new Swiper('.swiper#promotions', {
   loop: true,
   freeMode: true,
   slidesPerView: 3,
   spaceBetween: 20,
   slidesPerGroup: 2,
   speed: 1500,
   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      
   }
});

const news = new Swiper('.swiper#news', {
   loop: true,
   freeMode: true,
   slidesPerView: 5,
   spaceBetween: 20,
   slidesPerGroup: 5,
   speed: 1500,
   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },
   autoplay: {
      delay: 5000,
      disableOnInteraction: true
   }
});