setTimeout(function(){
	siteWelcome.classList.remove('active')
},1000)


window.onscroll = function(x){
  if(window.scrollY === 0){
    topNavBar.classList.remove('sticky')
  }else{
    topNavBar.classList.add('sticky')
  }
}