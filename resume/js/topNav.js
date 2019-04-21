!function () {
  var view = document.querySelector('#topNav')

  var controller = {
    view: null,
    liTags: null,
    dataX: null,
    init: function (view) {
      this.view = view
      this.liTags = view.querySelectorAll('li')
      this.dataX = document.querySelectorAll('[data-x]')
      this.initHighLight()
      this.bindEvents()
    },
    bindEvents: function () {
      let minIndex = 0
      window.onscroll = () => {
        let currentTop = window.scrollY
        for (let i = 0; i < this.dataX.length; i++) {
          if (Math.abs(currentTop - this.dataX[i].offsetTop) < Math.abs(currentTop - this.dataX[minIndex].offsetTop)) {
            minIndex = i
          }
        }
        this.highLight(this.dataX[minIndex])
        let aTag = document.querySelector('[href="#' + this.dataX[minIndex].id + '"]')
        for (let i = 0; i < this.liTags.length; i++) {
          this.unHighLight(this.liTags[i])
        }
        this.highLight(aTag.parentNode)
      }


      for (let i = 0; i < this.liTags.length; i++) {
        this.liTags[i].onmouseenter = (event) => {
          this.active(event.currentTarget)
        }
        this.liTags[i].onmouseleave = (event) => {
          this.unActive(event.currentTarget)
        }
      }

    },
    active: function (target) {
      target.classList.add('active')
    },
    unActive: function (target) {
      target.classList.remove('active')
    },
    highLight: function (target) {
      target.classList.add('highLight')
    },
    unHighLight: function (target) {
      target.classList.remove('highLight')
    },
    initHighLight: function () {
      window.setTimeout(() => {
        this.highLight(this.dataX[0])
      }, 1100)
    }
  }

  controller.init(view)
}()

