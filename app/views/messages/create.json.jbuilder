json.body @message.body
json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
json.name @message.user.name
