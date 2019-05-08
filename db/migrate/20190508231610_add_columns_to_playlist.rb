class AddColumnsToPlaylist < ActiveRecord::Migration[5.2]
  def change
    add_column :playlists, :category, :string
    add_column :playlists, :headline, :string
    add_column :playlists, :subheadline, :string
  end
end
