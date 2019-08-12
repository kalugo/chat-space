$(function(){
  function buildHTML(message){
    var html = 
    `<div class="message">
    <div class="message__header">
    <span class="user-name">${message.name}</span>
    <span class="post-time">${message.created_at}</span>
    </div>
    <div class="message__text">
    <p>${message.body}</p>
    <img src=${message.image}>
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
      $(".chat-space__form__input-box__text-field").val("");
      $("#message_image").val("");
    })
    .fail(function() {
      alert('error');
    })
    $('.chat-space__body').animate({scrollTop: $(".chat-space__body")[0].scrollHeight});
    return false;
  })
});