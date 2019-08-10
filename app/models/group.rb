class Group < ApplicationRecord
  has_many :members
  has_many :users, through: :members
  has_many :messages
  validates :name, presence: true

  def show_last_message
    if messages.last.present?
      if messages.last.body.present?
        messages.last.body
      else
        "画像あり"
      end
    else
      "未投稿"
    end
  end
end
