import jQuery from 'jquery';
import './swiper';

import './global.css';
import './animations.css';

const $ = jQuery;

// making home buttons
$(".home-anchor").on("click", function () {
   window.location.href = "/";
});