class RemoveIdFromMembers < ActiveRecord::Migration[5.0]
  def change
    remove_column :members, :user_id
    remove_column :members, :group_id
  end
end
