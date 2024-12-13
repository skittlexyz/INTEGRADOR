import jQuery from 'jquery';
import './swiper';
import './setupProducts';

import './global.css';
import './animations.css';

const $ = jQuery;

$(".home-anchor").on("click", function () {
   window.location.href = "/";
});