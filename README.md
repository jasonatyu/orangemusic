# Orange Music

[Live Demo][orange]

[orange]: http://www.orangemusic.xyz

Orange Music is a music streaming application inspired by Apple Music/iTunes. It was built using a Rails/PostgreSQL backend with React and Redux on the frontend. AWS S3 was used to host image and audio file assets. 

## Features
  * Secure user authentication.
  * View, create, and edit playlists. Add songs you've saved to your personal library or songs available in the Orange Music library.
  * Explore curated playlists by Orange Music.
  * Search for music by artist, album, or song. 
  * View songs in your own library by artist, album, or song. 
  * Play music, including with shuffle play. 

### Music player

The music player lets users play, pause, change volume, fast-forward, and rewind songs. Songs can be played by double-clicking on a specific song or pressing the "shuffle play" icon to queue an entire playlist or album in random order for continuous play. 

The player was built in React leveraging the HTML5 `<audio>` element, which was used to process audio files stored in the main S3 bucket. The music player UI state, such as the current song played, whether the user paused the player, and any queued songs, was managed primary with Redux with a React `AudioPlayer` component managing some local state. 

![Music player](https://s3-us-west-1.amazonaws.com/orange-music-pro/om_player.png)

### Creating and updating playlists 

Users can view, create, edit, and delete playlists, including attaching a custom image and adding songs from their personal library or from Orange Music's library. 



![Playlist](https://s3-us-west-1.amazonaws.com/orange-music-pro/playlist.png)


## Project Design

Orange Music was designed to be a sleek and easy-to-use music player alternative to Apple Music or Spotify. Given the short time frame, I focused on getting the user experience of the core feature set (e.g. creating and editing playlists, navigating through one's library, search, and playing music) right. In the future, I'd like to add social features such as following friends to see their playlists and building a curated "For You" section to let users explore recommended songs based on their personal library and play history. 

## Technologies

Rails/PostgreSQL was used for the backend, with Active Storage/AWS S3 used for hosting and retrieving image (e.g. custom playlist images, album artwork, artist photos) and audio file assets. 

React and Redux were used on the frontend. Redux was used to manage application state, specifically users, songs, albums, artists, and playlists, as well as UI state, such as the current played song, a queue of songs to play, errors, and loading states. 

### Additional Resources
  * [Design Docs][designDocs]

[Design Docs]: https://github.com/jasonatyu/orangemusic/wiki

## Possible future features

In the future I would like to add:
  * User pages
  * Following friends 
  * Personalization
