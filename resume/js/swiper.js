var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  keyboard: true,
  spaceBetween: 30,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})