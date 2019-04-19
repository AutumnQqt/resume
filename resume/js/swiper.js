!function(){
  var view = document.querySelector('.swiper-container')
  var controller = {
    view:null,
    options:null,
    init:function(view){
      this.view = view
      this.options = {
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
      }
      this.initSwiper()
    },
    initSwiper:function(){
      var mySwiper = new Swiper('.swiper-container',this.options)
    }
  }
  controller.init(view)
}()