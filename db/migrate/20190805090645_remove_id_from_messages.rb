class RemoveIdFromMessages < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :user_id
    remove_column :messages, :group_id
  end
end
