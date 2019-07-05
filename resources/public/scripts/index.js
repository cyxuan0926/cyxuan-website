'use strict';

/* eslint-disable no-undef */
$(function() {
  new Swiper('.swiper-container', {
    loop: true,
    autoplay: true,
    effect: 'fade',
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
