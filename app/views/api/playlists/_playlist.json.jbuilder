json.extract! playlist, :id, :name, :description, :user_id
if playlist.photo.attached?
    json.photoUrl url_for(playlist.photo)
end
json.song_ids do 
    json.array! playlist.songs.pluck(:id)
end
json.songs do 
    json.array! playlist.songs do |song|
        json.partial! 'api/songs/song', song: song
    end
end