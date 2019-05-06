import React from 'react';
import SongIndexItem from '../songs/SongIndexItem';

class AlbumShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId);
    }

    render() {
        if (this.props.album) {
            const songs = this.props.albumSongs.map((song, idx) => <SongIndexItem key={song.id} idx={idx} song={song} display='album' />);
            const { album } = this.props;
            return (
                <div className='album-info'>
                    <section className='album-image'>
                        <img src={album.photoUrl} />
                    </section>
                    <section className='album-detail'>
                        <h1>{album.title}</h1>
                        <h2>{album.artist}</h2>
                        <h3>{album.category} • {this.props.album.year}</h3>
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
        } else {
            return null;
        }
    }
}

export default AlbumShow;