json.extract! album, :id, :title, :year, :category, :description, :artist_id
json.photoUrl url_for(album.artwork)
json.artist album.artist.name
json.song_ids do 
    json.array! album.songs.pluck(:id)
end