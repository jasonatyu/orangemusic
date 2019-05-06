json.extract! song, :id, :title, :time, :album_id
json.artist song.artist.name 
json.album song.album.title
json.year song.album.year 
if song.album.artwork.attached?
    json.photoUrl url_for(song.album.artwork)
end