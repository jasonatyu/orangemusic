# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Artist.create(name: "Taylor Swift")
Artist.create(name: "Avicii")

Album.create(title: "1989", year: 2014, category: "Pop", artist_id: 1)
Album.create(title: "SOS", year: 2019, category: "Electronic", artist_id: 2)


Song.create(title: "Welcome to New York", time: 302, artist_id: 1, album_id: 1)
Song.create(title: "Blank Space", time: 283, artist_id: 1, album_id: 1)
Song.create(title: "Style", time: 334, artist_id: 1, album_id: 1)
Song.create(title: "Shake It Off", time: 189, artist_id: 1, album_id: 1)
Song.create(title: "Bad Blood", time: 284, artist_id: 1, album_id: 1)

Song.create(title: "SOS", time: 287, artist_id: 2, album_id: 2)

Playlist.create(name: "Gym tunes", description: "Songs to get swoll to", user_id: 1)
Playlist.create(name: "Vacation songs", description: "Songs for my next vacation", user_id: 2)
