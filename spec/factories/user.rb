FactoryBot.define do

  factory :user do
    name                  {"hogehoge"}
    email {Faker::Internet.free_email}
    password              {"12345678"}
    password_confirmation {"12345678"}
  end

end