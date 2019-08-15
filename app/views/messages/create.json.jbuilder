json.body @message.body
json.image "#{@message.image}"
json.created_at @message.created_at.in_time_zone('Tokyo').strftime("%Y/%m/%d %H:%M")
json.name @message.user.name
json.id @message.id
