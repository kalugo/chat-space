FactoryBot.define do
  factory :message do
    body   {Faker::Lorem.sentence}
    image  {File.open("#{Rails.root}/public/images/cat1.png")}
    user
    group
  end
end