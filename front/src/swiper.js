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
   // pagination: {
   //    el: '.swiper-pagination',
   //    clickable: true
   // },
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      600: {
         slidesPerView: 2,
         slidesPerGroup: 2
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4
      },
    }
});

const news = new Swiper('.swiper#news', {
   loop: true,
   freeMode: true,
   slidesPerView: 5,
   spaceBetween: 20,
   slidesPerGroup: 5,
   speed: 1500,
   // pagination: {
   //    el: '.swiper-pagination',
   //    clickable: true
   // },
   autoplay: {
      delay: 7500,
      disableOnInteraction: false,
      reverseDirection: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      600: {
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
      900: {
         slidesPerView: 3,
         slidesPerGroup: 3,
      }
    }
});