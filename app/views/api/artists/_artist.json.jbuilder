json.extract! artist, :id, :name, :description
json.song_ids do 
    json.array! artist.songs.pluck(:id)
end
json.album_ids do 
    json.array! artist.albums.pluck(:id)
end