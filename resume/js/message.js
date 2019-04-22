!function(){
  var view = document.querySelector('#messageWrap')
  var model = {
    init:function(){
      var APP_ID = 'hXOAsaPcQXL8uIBlyQtpcEdh-gzGzoHsz';
      var APP_KEY = 'AqHvnV7GibbERvi6sdbb3ghW';
      AV.init({appId: APP_ID,appKey: APP_KEY})
    },
    fetch:function(){
      var query = new AV.Query('Message');
      query.include('content');
      return query.find()
    },
    save:function(object){
      var Message = AV.Object.extend('Message');
      var message = new Message();
      return message.save({
        'name': object.name,
        'phone': object.phone,
        'mail': object.mail,
        'content': object.content
      })
    }
  }
  var controller = {
    view:null,
    model:null,
    messageForm:null,
    init:function(view,model){
      this.view = view
      this.model = model
      this.model.init()
      this.messageForm = view.querySelector('#messageForm')
      this.messageShow = view.querySelector('#messageShow')

      this.initMessage()
      this.bindEvents()
    },
    bindEvents:function(){
      this.messageForm.addEventListener('submit', (e)=> {
        e.preventDefault()
        var obj = {
          'name': this.view.querySelector('input[name=name]').value,
          'phone': this.view.querySelector('input[name=phone]').value,
          'mail': this.view.querySelector('input[name=mail]').value,
          'content': this.view.querySelector('textarea[name=messgeConent]').value
        }  
        if(!this.empty(obj)){
          this.model.save(obj).then(()=> {
            var myDate = new Date()
            var time = `${myDate.getMonth() + 1}-${myDate.getDate()} ${myDate.getHours()}:${myDate.getMinutes()}`
            this.appendLiTag({name,mail, content,time})
          })
        }
      })
    },
    empty: function(obj){
      for(key in obj){
        if(obj[key] === ''){
          alert(`请输入${key}`)
          return true
        }
      }
      return false
    },
    initMessage:function(){
      this.model.fetch().then((messages)=> {
        // 查询后，在前端展示到相应的位置中。
        for (let i = 0; i < messages.length; i++) {
          var time = `${messages[i].createdAt.getMonth() + 1}-${messages[i].createdAt.getDate()} ${messages[i].createdAt.getHours()}:${messages[i].createdAt.getMinutes()}`
          var arr = {
            'name':messages[i].attributes.name,
            'mail':messages[i].attributes.mail,
            'content':messages[i].attributes.content,
            'time':time
          }
          this.appendLiTag(arr)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },

    appendLiTag:function(object) {
      var liTag = document.createElement('li')
      
      for (key in object) {
        var spanTag = document.createElement('span')
        spanTag.innerText = object[key]
        spanTag.classList.add(key)
        liTag.appendChild(spanTag)
      }
      this.messageShow.appendChild(liTag)
    }
  }

  controller.init(view,model)
  
}.call()

