import React from 'react';
import SongIndexItem from '../songs/SongIndexItem';
import Loading from '../loading/Loading';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleShufflePlay = this.handleShufflePlay.bind(this);
    }

    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.album === undefined || prevProps.album.id != this.props.match.params.albumId) {
            this.props.fetchAlbum(this.props.match.params.albumId);
        }
    }

    handleShufflePlay(e) {
        this.props.queueSongs(this.props.albumSongs);
    }

    render() {
        if (this.props.albumSongs === undefined || this.props.albumSongs.some((song) => song === undefined)) {
            return <Loading />;
        } else {
            const songs = this.props.albumSongs.map((song, idx) => <SongIndexItem key={song.id} idx={idx} song={song} display='album' />);
            const { album } = this.props;
            return (
                <div className='album-info'>
                    <section className='album-image'>
                        <img src={album.photoUrl} />
                    </section>
                    <section className='album-detail'>
                        <section className='album-detail-information'>
                            <section>
                                <h1>{album.title}</h1>
                                <Link className='react-link' to={`/artists/${album.artist_id}`}><h2>{album.artist}</h2></Link>
                                <h3>{album.category} • {this.props.album.year}</h3>
                            </section>
                            <i className="fas fa-random" onClick={this.handleShufflePlay}></i>
                        </section>
                        <table className='song-table'>
                            <thead className='song-table-header'>
                                <tr className='song-row'>
                                    <th> </th>
                                    <th>Title</th>
                                    <th>Artist</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody className='song-table-body'>
                                {songs}
                            </tbody>
                        </table>
                    </section>
                </div>
            );
        } 
    }
}

export default AlbumShow;