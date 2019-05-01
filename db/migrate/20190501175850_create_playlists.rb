class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :name, null: false, default: "Untitled Playlist"
      t.string :description
      t.integer :user_id, null: false 

      t.timestamps
    end
    add_index :playlists, :user_id
  end
end
