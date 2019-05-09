import React from 'react';
import SongIndexItem from '../songs/SongIndexItem'; 

class ArtistDetailItem extends React.Component {
    //check if songs are available
    constructor(props) {
        super(props);
        this.handleShufflePlay = this.handleShufflePlay.bind(this);
    }

    handleShufflePlay(e) {
        this.props.queueSongs(this.props.albumSongs);
    }

    render() {
        const { album, albumSongs } = this.props;
        if (albumSongs === undefined || albumSongs.some((song) => song === undefined)) {
            return null;
        } else {
            const songs = albumSongs.map((song, idx) => <SongIndexItem key={song.id} idx={idx} song={song} display='album' />)
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
                        <i className="fas fa-random" onClick={this.handleShufflePlay}></i>
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
    }
}

export default ArtistDetailItem;