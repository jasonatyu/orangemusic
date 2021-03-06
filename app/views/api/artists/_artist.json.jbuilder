json.extract! artist, :id, :name, :description
if artist.photo.attached?
    json.photoUrl url_for(artist.photo)
end
json.song_ids do 
    json.array! artist.songs.pluck(:id)
end
json.album_ids do 
    json.array! artist.albums.pluck(:id)
end