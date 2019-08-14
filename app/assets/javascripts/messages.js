$(document).on('turbolinks:load', function() {
  function buildHTML(message){
    var html = 
    `<div class="message">
    <div class="message__header">
    <span class="user-name" data-message-id="${message.id}">${message.name}</span>
    <span class="post-time">${message.created_at}</span>
    </div>
    <div class="message__text">
    <p>${message.body}</p>
    <img src=${message.image} ></img>
    </div>
    </div>`
    return html
  }
  $("#new_message").on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(message){
      var messages = $(".chat-space__body");
      messages.append(buildHTML(message));
      $("#new_message")[0].reset();
    })
    .fail(function() {
      alert('error');
    })
    $('.chat-space__body').animate({scrollTop: $(".chat-space__body")[0].scrollHeight});
    return false;
  });

  var reloadMessages = function(){
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    var last_message_id = $('.user-name').last().data('message-id')
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if(messages.length !== 0){
        var insertHTML = '';
        messages.forEach(function(message) {
          insertHTML += buildHTML(message);
          return insertHTML;
        });
        var messages = $(".chat-space__body");
        messages.append(insertHTML);
        $('.chat-space__body').animate({scrollTop: $(".chat-space__body")[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  }
  var pattern = new RegExp("groups/\\d\\d/messages")
  if(document.URL.match(pattern)) {
    setInterval(reloadMessages, 5000);
  }
});