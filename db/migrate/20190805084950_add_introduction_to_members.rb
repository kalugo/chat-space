class AddIntroductionToMembers < ActiveRecord::Migration[5.0]
  def change
    add_reference :members, :user, foreign_key: true
    add_reference :members, :group, foreign_key: true
  end
end
