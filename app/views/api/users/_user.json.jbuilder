json.extract! user, :id, :email, :firstname, :lastname
json.song_ids do 
    json.array! user.songs.pluck(:id)
end