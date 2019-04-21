var APP_ID = 'hXOAsaPcQXL8uIBlyQtpcEdh-gzGzoHsz';
var APP_KEY = 'AqHvnV7GibbERvi6sdbb3ghW';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var Message = AV.Object.extend('Message');
var message = new Message();

var messageWrap = document.querySelector('#messageWrap')
var name, phone, mail, content
messageForm.addEventListener('submit', function (e) {
  e.preventDefault()
  name = messageWrap.querySelector('input[name=name]').value
  phone = messageWrap.querySelector('input[name=phone]').value
  mail = messageWrap.querySelector('input[name=mail]').value
  content = messageWrap.querySelector('textarea[name=messgerContrent]').value

  message.save({
    'name': name,
    'phone': phone,
    'mail': mail,
    'content': content
  }).then(function (object) {
    var myDate = new Date()
    var time = `${myDate.getMonth() + 1}-${myDate.getDate()} ${myDate.getHours()}:${myDate.getMinutes()}`
    appendLiTag({name,mail, content,time})
  })
})

function appendLiTag(object) {
  var liTag = document.createElement('li')
  
  for (key in object) {
    var spanTag = document.createElement('span')
    spanTag.innerText = object[key]
    spanTag.classList.add(key)
    liTag.appendChild(spanTag)
  }
  messageShow.appendChild(liTag)
}

!function () {
  var query = new AV.Query('Message');
  query.include('content');
  // query.include('image');
  // query.descending('createdAt');
  query.find().then(function (messages) {
    // 查询后，在前端展示到相应的位置中。
    for (let i = 0; i < messages.length; i++) {
      var time = `${messages[i].createdAt.getMonth() + 1}-${messages[i].createdAt.getDate()} ${messages[i].createdAt.getHours()}:${messages[i].createdAt.getMinutes()}`
      var arr = {
        'name':messages[i].attributes.name,
        'mail':messages[i].attributes.mail,
        'content':messages[i].attributes.content,
        'time':time
      }
      appendLiTag(arr)
    }
  }).catch(function (error) {
    alert(JSON.stringify(error));
  });
}()