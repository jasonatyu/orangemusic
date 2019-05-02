json.extract! playlist, :id, :name, :description, :user_id
json.song_ids do 
    json.array! playlist.songs.pluck(:id)
end