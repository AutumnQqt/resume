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