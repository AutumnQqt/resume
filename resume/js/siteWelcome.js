!function(){
  var view = document.querySelector('#siteWelcome')
  var controller = {
    view: null,
    init: function(view){
      this.view = view
      this.bindEvents()
    },
    bindEvents: function(){
      setTimeout(()=>{
        this.view.classList.remove('active')
      },1000)
    }
  }

  controller.init(view)
}()

