# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.create(email: "tswift89@gmail.com", firstname: "Taylor", lastname: "Swift", password:"testing");

Artist.create(name: "Taylor Swift")
Artist.last.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/taylorswift.png"), filename: "taylorswift.png")
Artist.create(name: "Avicii")
Artist.last.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/avicii.png"), filename: "avicii.png")
Artist.create(name: "Khalid")
Artist.last.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/khalid.png"), filename: "khalid.png")
Artist.create(name: "Matoma")
Artist.last.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/matoma.jpeg"), filename: "matoma.jpeg")


Album.create(title: "1989", year: 2014, category: "Pop", artist_id: 1)
Album.last.artwork.attach(io: open("https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/1989.png"), filename: "1989.png")
Album.create(title: "SOS", year: 2019, category: "Electronic", artist_id: 2)
Album.last.artwork.attach(io: open("https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/SOS.png"), filename: "SOS.png")
Album.create(title: "Talk", year: 2019, category: "R&B", artist_id: 3)
Album.last.artwork.attach(io: open("https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/Talk.png"), filename: "Talk.png")
Album.create(title: "Reputation", year: 2017, category: "Pop", artist_id: 1)
Album.last.artwork.attach(io: open("https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/reputation.png"), filename: "reputation.png")
Album.create(title: "One In a Million", year: 2018, category: "Electronic", artist_id: 4)
Album.last.artwork.attach(io: open("https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/One.png"), filename: "One.png")
Album.create(title: "Me!", year: 2019, category: "Pop", artist_id: 1)
Album.last.artwork.attach(io: open("https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/me.png"), filename: "me.png")


Song.create(title: "Welcome to New York", time: 302, artist_id: 1, album_id: 1)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music3/v4/9d/b5/f0/9db5f05a-f75e-7637-686a-af85e395e4f2/mzaf_562248496054646589.plus.aac.p.m4a"), filename: "welcome.m4a")
Song.create(title: "Blank Space", time: 283, artist_id: 1, album_id: 1)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music3/v4/11/cf/71/11cf71d7-5a2b-660c-eef2-a8dacd9694cb/mzaf_9148830979689986253.plus.aac.p.m4a"), filename: "blank_space.m4a")
Song.create(title: "Style", time: 334, artist_id: 1, album_id: 1)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music5/v4/4f/6e/ba/4f6eba13-0b76-6b33-3ee8-48cf4606712d/mzaf_8264677660824429098.plus.aac.p.m4a"), filename: "style.m4a")
Song.create(title: "Shake It Off", time: 189, artist_id: 1, album_id: 1)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music3/v4/b8/b3/7a/b8b37a93-2154-34da-74fc-8e8a316979a8/mzaf_7991652075174454658.plus.aac.p.m4a"), filename: "shake_it_off.m4a")
Song.create(title: "Bad Blood", time: 284, artist_id: 1, album_id: 1)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music3/v4/1b/30/04/1b300454-1cec-b50d-29dd-60ad351c1b3b/mzaf_3536997228152797622.plus.aac.p.m4a"), filename: "bad_blood.m4a")
Song.create(title: "Wildest Dreams", time: 273, artist_id: 1, album_id: 1)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music3/v4/b6/dc/94/b6dc9436-f575-c618-4931-05ee9d9c93f6/mzaf_4506300056614720144.plus.aac.p.m4a"), filename: "wildest_dreams.m4a")

Song.create(title: "How You Get the Girl", time: 238, artist_id: 1, album_id: 1)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music3/v4/db/30/21/db302177-209e-2ede-2916-387d6167fca0/mzaf_7934356807197137066.plus.aac.p.m4a"), filename: "how_you_get_the_girl.m4a")

Song.create(title: "This Love", time: 284, artist_id: 1, album_id: 1)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music5/v4/b7/63/b9/b763b926-23ca-c845-d120-8f8ad48a17cd/mzaf_8544069762177928677.plus.aac.p.m4a"), filename: "this_love.m4a")

Song.create(title: "I Know Places", time: 212, artist_id: 1, album_id: 1)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music3/v4/fe/6b/e2/fe6be2b9-0884-9d49-2404-9c38c1c55228/mzaf_7204771268871675134.plus.aac.p.m4a"), filename: "i_know_places.m4a")

Song.create(title: "Clean", time: 236, artist_id: 1, album_id: 1)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music1/v4/78/cb/d9/78cbd9d2-5bbb-b851-a6d8-fd386c3b3154/mzaf_4239598838621218163.plus.aac.p.m4a"), filename: "clean.m4a")


Song.create(title: "SOS", time: 287, artist_id: 2, album_id: 2)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview123/v4/5e/f9/a6/5ef9a6d0-5ee1-b03f-48f9-d0d37c90b2bc/mzaf_6281129378912664271.plus.aac.p.m4a"), filename: "sos.m4a")
# Song.create(title: "Wake Me Up", time: 240, artist_id: 2, album_id: 2)
# Song.create(title: "Lonely Togeter", time: 324, artist_id: 2, album_id: 2)
# Song.create(title: "Hey Brother", time: 321, artist_id: 2, album_id: 2)
# Song.create(title: "Levels", time: 223, artist_id: 2, album_id: 2)

Song.create(title: "Talk (REMIX)", time: 293, artist_id: 3, album_id: 3)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview114/v4/05/35/c9/0535c9bd-132d-931d-e05c-058f03e25303/mzaf_973562741627835331.plus.aac.p.m4a"), filename: "talk.m4a")


Song.create(title: "...Ready For It?", time: 302, artist_id: 1, album_id: 4)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/48/14/99/481499f2-523f-929c-60ae-e98323751e6f/mzaf_5727211119371474437.plus.aac.p.m4a"), filename: "ready_for_it.m4a")

Song.create(title: "End Game", time: 283, artist_id: 1, album_id: 4)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/08/f9/4d/08f94d62-f780-286c-2164-9fd96a422178/mzaf_8135851350342357756.plus.aac.p.m4a"), filename: "end_game.m4a")

Song.create(title: "I Did Something Bad", time: 334, artist_id: 1, album_id: 4)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/86/53/18/8653186b-4d6c-ad59-a38d-6eecdb9e55a9/mzaf_8965818991211221638.plus.aac.p.m4a"), filename: "something_bad.m4a")

Song.create(title: "Dont Blame Me", time: 189, artist_id: 1, album_id: 4)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/de/17/5a/de175abd-c4c1-e962-6c4d-ccc49fffef39/mzaf_5404467203907304659.plus.aac.p.m4a"), filename: "dont_blame.m4a")

Song.create(title: "Delicate", time: 284, artist_id: 1, album_id: 4)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/eb/72/97/eb7297b4-147b-ce5e-dec0-be880d926e3d/mzaf_2784605975265506901.plus.aac.p.m4a"), filename: "delicate.m4a")

# Song.create(title: "Look What You Made Me Do", time: 273, artist_id: 1, album_id: 4)
# Song.create(title: "So It Goes...", time: 238, artist_id: 1, album_id: 4)
# Song.create(title: "Gorgeous", time: 284, artist_id: 1, album_id: 4)
# Song.create(title: "Getaway Car", time: 212, artist_id: 1, album_id: 4)

Song.create(title: "One In a Million", time: 302, artist_id: 4, album_id: 5)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/e2/ea/0f/e2ea0fce-4d72-3aaa-e314-1d0503d5c2f5/mzaf_7960319471165998386.plus.aac.p.m4a"), filename: "one_in_a_million.m4a")

Song.create(title: "I Don't Dance", time: 283, artist_id: 4, album_id: 5)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/fb/b4/62/fbb4620b-6607-1c8f-072b-f692dfd51d21/mzaf_8943508773144716821.plus.aac.p.m4a"), filename: "dont_dance.m4a")

Song.create(title: "Sunday Morning", time: 489, artist_id: 4, album_id: 5)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/0b/d0/6f/0bd06f56-1eda-d2a3-b795-8af02761759a/mzaf_3375211515814907711.plus.aac.p.m4a"), filename: "sunday_morning.m4a")

# Song.create(title: "False Alarm", time: 284, artist_id: 4, album_id: 5)
# Song.create(title: "Don't Say What You Want To", time: 273, artist_id: 4, album_id: 5)
# Song.create(title: "Losing It Over You", time: 238, artist_id: 4, album_id: 5)
# Song.create(title: "Lonely (feat. MAX)", time: 284, artist_id: 4, album_id: 5)
# Song.create(title: "Telepatia", time: 242, artist_id: 4, album_id: 5)

Song.create(title: "Me!", time: 236, artist_id: 1, album_id: 6)
Song.last.file.attach(io: open("https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview113/v4/ee/8b/ee/ee8bee80-9ce8-0079-c072-20477756fcf3/mzaf_756413302198989348.plus.aac.p.m4a"), filename: "me.m4a")


User.first.song_ids = [1,2,4,5,6,11,14];

Playlist.create(name: "Gym tunes", description: "Songs to get swoll to", user_id: 1)
Playlist.first.song_ids = [1,3,6,10];
Playlist.create(name: "Vacation songs", description: "Songs for my next vacation", user_id: 1)
