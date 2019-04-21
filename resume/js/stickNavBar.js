!function () {
  var view = document.querySelector('#topNavBar')
  var controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    unSticky: function (target) {
      target.classList.remove('sticky')
    },
    sticky: function (target) {
      target.classList.add('sticky')
    },
    bindEvents: function () {
      window.addEventListener('scroll', () => {
        var currentTop = window.scrollY
        if (currentTop === 0) {
          this.unSticky(this.view)
        } else {
          this.sticky(this.view)
        }
      })
    }
  }

  controller.init(view)
}()
