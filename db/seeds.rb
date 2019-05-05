# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(email: "tswift89@gmail.com", firstname: "Taylor", lastname: "Swift", password:"testing");
User.create(email: "jason@jasonyu.co", firstname: "Jason", lastname: "Yu", password:"testing");

Artist.create(name: "Taylor Swift")
Artist.last.photo.attach(io: File.open("/Users/jasonyu/Desktop/seed/taylorswift.png"), filename: "taylorswift.png")
Artist.create(name: "Avicii")
Artist.last.photo.attach(io: File.open("/Users/jasonyu/Desktop/seed/avicii.png"), filename: "avicii.png")
Artist.create(name: "Khalid")
Artist.last.photo.attach(io: File.open("/Users/jasonyu/Desktop/seed/khalid.png"), filename: "khalid.png")


Album.create(title: "1989", year: 2014, category: "Pop", artist_id: 1)
Album.last.artwork.attach(io: File.open("/Users/jasonyu/Desktop/seed/1989.png"), filename: "1989.png")
Album.create(title: "SOS", year: 2019, category: "Electronic", artist_id: 2)
Album.last.artwork.attach(io: File.open("/Users/jasonyu/Desktop/seed/SOS.png"), filename: "SOS.png")
Album.create(title: "Talk", year: 2019, category: "R&B", artist_id: 3)
Album.last.artwork.attach(io: File.open("/Users/jasonyu/Desktop/seed/Talk.png"), filename: "Talk.png")


Song.create(title: "Welcome to New York", time: 302, artist_id: 1, album_id: 1)
Song.create(title: "Blank Space", time: 283, artist_id: 1, album_id: 1)
Song.create(title: "Style", time: 334, artist_id: 1, album_id: 1)
Song.create(title: "Shake It Off", time: 189, artist_id: 1, album_id: 1)
Song.create(title: "Bad Blood", time: 284, artist_id: 1, album_id: 1)
Song.create(title: "Wildest Dreams", time: 273, artist_id: 1, album_id: 1)
Song.create(title: "How You Get the Girl", time: 238, artist_id: 1, album_id: 1)
Song.create(title: "This Love", time: 284, artist_id: 1, album_id: 1)
Song.create(title: "I Know Places", time: 212, artist_id: 1, album_id: 1)
Song.create(title: "Clean", time: 236, artist_id: 1, album_id: 1)

Song.create(title: "SOS", time: 287, artist_id: 2, album_id: 2)
Song.create(title: "Wake Me Up", time: 240, artist_id: 2, album_id: 2)
Song.create(title: "Lonely Togeter", time: 324, artist_id: 2, album_id: 2)
Song.create(title: "Hey Brother", time: 321, artist_id: 2, album_id: 2)
Song.create(title: "Levels", time: 223, artist_id: 2, album_id: 2)

Song.create(title: "Talk (REMIX)", time: 293, artist_id: 3, album_id: 3)

Playlist.create(name: "Gym tunes", description: "Songs to get swoll to", user_id: 1)
Playlist.last.photo.attach(io: File.open("/Users/jasonyu/Desktop/seed/audio.jpg"), filename: "audio.jpg")
Playlist.first.song_ids = [1,2,4,5,6,11,14,15,16];
Playlist.create(name: "Vacation songs", description: "Songs for my next vacation", user_id: 2)
Playlist.last.photo.attach(io: File.open("/Users/jasonyu/Desktop/seed/casette.jpg"), filename: "casette.jpg")
Playlist.second.song_ids = [2,4,5,6,11,12,16];
