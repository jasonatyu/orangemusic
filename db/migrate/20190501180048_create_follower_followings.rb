class CreateFollowerFollowings < ActiveRecord::Migration[5.2]
  def change
    create_table :follower_followings do |t|
      t.integer :follower_id, null: false 
      t.integer :following_id, null: false 

      t.timestamps
    end
    add_index :follower_followings, [:follower_id, :following_id], unique: true 
  end
end
