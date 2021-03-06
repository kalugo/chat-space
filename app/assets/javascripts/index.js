$(document).on('turbolinks:load', function() {
  function buildHTML(user){
    var html = `
    <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.name}</p>
    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
    </div>
    `
    return html
  }
  function addGroup(user_id, user_name){
    var html = `
    <div class='chat-group-user'>
      <input name='group[user_ids][]' type='hidden' value='${user_id}'>
      <p class='chat-group-user__name'>${user_name}</p>
    <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
    </div>
    `
    return html
  }

  $('#user-search-field').on('keyup', function(){
    var keyword = $(this).val()
    $('.chat-group-form__search').siblings().remove()
    // $('.chat-group-user').remove()
    $.ajax({
      type: 'get',
      url: "/users",
      data: { keyword: keyword },
      dataType: 'json'
    })
    .done(function(users){
      users.forEach(function(user){
        $('.chat-group-form__field--right').eq(1).append(buildHTML(user))
      })
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  });

  $(".chat-group-form__field--right").eq(1).on("click",".chat-group-user__btn--add",function(){
    var user_id = $(this).attr('data-user-id')
    var user_name = $(this).attr('data-user-name')
    $(this).parent().remove();
    $('.chat-group-form__field--right').eq(2).append(addGroup(user_id, user_name))
  })
  $(".chat-group-form__field--right").eq(2).on("click",".chat-group-user__btn--remove",function(){
    $(this).parent().remove();
  })
});