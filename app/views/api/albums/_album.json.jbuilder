json.extract! album, :id, :title, :year, :category, :description, :artist_id
json.song_ids do 
    json.array! album.songs.pluck(:id)
end