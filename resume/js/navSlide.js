//滑动到指定位置
!function () {
  var view = document.querySelector('.topNav>ul')
  var controller = {
    view: null,
    aTags: null,
    init: function (view) {
      this.view = view
      this.initAnimate()
      this.bindEvents()
    },
    bindEvents: function () {
      this.aTags = this.view.querySelectorAll('li>a')
      for (let i = 0; i < this.aTags.length; i++) {
        this.aTags[i].onclick = (event) => {
          event.preventDefault()
          var ele = document.querySelector(event.currentTarget.getAttribute('href'))
          this.scrollToElement(ele)
        }
      }
    },
    scrollToElement: function (ele) {
      var t = Math.abs((ele.offsetTop - 80 - window.scrollY) / 2)
      var coords = { y: window.scrollY }; // 起始点currentTop
      var tween = new TWEEN.Tween(coords) // 创建一个新的tween用来改变 'coords'
        .to({ y: (ele.offsetTop - 80) }, t) // 在ts内移动至指定位置
        .easing(TWEEN.Easing.Quadratic.InOut) // 使用缓动功能使的动画更加平滑
        .onUpdate(function () { // 在 tween.js 更新 'coords' 后调用
          // 移动到 'coords' 所描述的位置，配合 CSS 过渡
          window.scrollTo(0, coords.y);
        })
        .start(); // 立即开始 tween
    },
    initAnimate: function () {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    }
  }

  controller.init(view)
}()
