json.extract! song, :id, :title, :time
json.artist song.artist.name 
json.album song.album.title
json.year song.album.year 