class CreateUserSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :user_songs do |t|
      t.integer :song_id, null: false 
      t.integer :user_id, null: false 
      t.timestamps
    end
    add_index :user_songs, [:song_id, :user_id], unique: true 
  end
end
