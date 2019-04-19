!function () {
  var view = document.querySelectorAll('#topNav')

  var controller = {
    view: null,
    liTags: null,
    init: function (view) {
      this.view = view
      this.liTags = document.querySelectorAll('#topNav li')
      this.bindEvents()
    },
    bindEvents: function () {
      let minIndex = 0
      let dataX = document.querySelectorAll('[data-x]')
      window.onscroll = () => {
        let currentTop = window.scrollY

        for (let i = 0; i < dataX.length; i++) {
          if (Math.abs(currentTop - dataX[i].offsetTop) < Math.abs(currentTop - dataX[minIndex].offsetTop)) {
            minIndex = i
          }
        }
        this.highLight(dataX[minIndex])
        let aTag = document.querySelector('[href="#' + dataX[minIndex].id + '"]')
        for (let i = 0; i < this.liTags.length; i++) {
          this.unHighLight(this.liTags[i])
        }
        this.highLight(aTag.parentNode)
      }


      for (let i = 0; i < this.liTags.length; i++) {
        this.liTags[i].onmouseenter = (event)=> {
          this.active(event.currentTarget)
        }
        this.liTags[i].onmouseleave = (event)=> {
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
    }
  }

  controller.init(view)
}()

