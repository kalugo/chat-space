json.body @message.body
json.image "#{@message.image}"
# "/uploads/message/image/#{@message.id}/#{@message.image}"
json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
json.name @message.user.name