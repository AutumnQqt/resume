// setTimeout(function(){
	siteWelcome.classList.remove('active')
// },1000)


window.onscroll = function(event){
  if(window.scrollY === 0){
    topNavBar.classList.remove('sticky')
  }else{
    topNavBar.classList.add('sticky')
  }
}

let liTags = topNav.querySelectorAll('li')
for(let i = 0;i<liTags.length;i++){
  liTags[i].onmouseenter = function(event){
    event.currentTarget.classList.add('active')
  }
  liTags[i].onmouseleave = function(event){
    event.currentTarget.classList.remove('active')
  }
}

let aTags = document.querySelectorAll('.topNav>ul>li>a')
for(let i = 0;i<aTags.length;i++){
  aTags[i].onclick = function(event){
    event.preventDefault()
    console.log()
    let href = event.currentTarget.getAttribute('href')
    let ele = document.querySelector(href)
    let top = ele.offsetTop
    window.scrollTo(0,top-80)
  }
}