setTimeout(function(){
  siteWelcome.classList.remove('active')
},1000)
setTimeout(function(){
  siteAbout.classList.add('highLight')
},1100)
let dataX = document.querySelectorAll('[data-x]')
let minIndex = 0
window.onscroll = function(event){
  let currentTop = window.scrollY
  if (currentTop === 0) {
    topNavBar.classList.remove('sticky')
  } else {
    topNavBar.classList.add('sticky')
  }
  
  for(let i = 0;i<dataX.length;i++){
    if(Math.abs(currentTop-dataX[i].offsetTop) < Math.abs(currentTop-dataX[minIndex].offsetTop)){
      minIndex = i
    }
  }
  dataX[minIndex].classList.add('highLight')
  let aTag = document.querySelector('[href="#'+ dataX[minIndex].id +'"]')
  for(let i = 0;i<liTags.length;i++){
    liTags[i].classList.remove('highLight')
  }
  aTag.parentNode.classList.add('highLight')
}


let liTags = topNav.querySelectorAll('li')
for (let i = 0; i < liTags.length; i++) {
  liTags[i].onmouseenter = function (event) {
    event.currentTarget.classList.add('active')
  }
  liTags[i].onmouseleave = function (event) {
    event.currentTarget.classList.remove('active')
  }
}

//滑动到指定位置
let aTags = document.querySelectorAll('.topNav>ul>li>a')
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function (event) {
    event.preventDefault()
    let ele = document.querySelector(event.currentTarget.getAttribute('href'))

    let t = Math.abs((ele.offsetTop - 80 - window.scrollY)/2)
    
    function animate(time) {
      requestAnimationFrame(animate);
      TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    var coords = { y: window.scrollY }; // 起始点currentTop
    var tween = new TWEEN.Tween(coords) // 创建一个新的tween用来改变 'coords'
      .to({y: (ele.offsetTop - 80) }, t) // 在ts内移动至指定位置
      .easing(TWEEN.Easing.Quadratic.InOut) // 使用缓动功能使的动画更加平滑
      .onUpdate(function () { // 在 tween.js 更新 'coords' 后调用
        // 移动到 'coords' 所描述的位置，配合 CSS 过渡
        window.scrollTo(0,coords.y);
      })
      .start(); // 立即开始 tween

  }
}

