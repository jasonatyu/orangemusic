import React from 'react';
import SongIndexItem from '../songs/SongIndexItem'; 

const ArtistDetailItem = ({album}) => {
    const songs = album.song_ids.map((song, idx) => <SongIndexItem key={song.id} idx={idx} song={song} display='album' />)
    return (
        <div className='artist-album'>
            <div className='album-info'>
                <section className='album-sub-info'>
                    <img src={album.photoUrl} />
                    <section>
                        <h2>{album.title}</h2>
                        <h3>{album.category} • {album.year}</h3>
                    </section>
                </section>
            </div>
            <div className='album-songs-display'>
                <table className='song-table'>
                    <tbody className='song-table-body'>
                        {songs}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ArtistDetailItem;