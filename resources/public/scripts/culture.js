'use strict';

/* eslint-disable no-undef */
$(function() {
  new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      disableOnInteraction: false,
    },
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      disableOnInteraction: false,
    },
  });
});
