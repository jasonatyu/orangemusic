import React from 'react';
import AlbumIndexItem from '../albums/AlbumIndexItem';

class ArtistShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.artistId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.artist === undefined || prevProps.artist.id != this.props.match.params.artistId) {
            this.props.fetchArtist(this.props.match.params.artistId);
        }
    }

    render() {
        const { artist, artistAlbums } = this.props;
        if (artistAlbums === undefined || artistAlbums.some((album) => album === undefined)) {
            return null;
        } else {
            const albums = artistAlbums.map((album) => <AlbumIndexItem key={album.id} album={album} />)
            return (
                <div className='artist-show'>
                    <section className='artist-hero'>
                        <img src={artist.photoUrl}></img>
                        <h1>{artist.name}</h1>
                    </section>
                    <div className='user-library'>
                        <h3>Albums</h3>
                        <ul className='library-list'>
                            { albums }
                        </ul>
                    </div>
                </div>
            );
        }
    }
}

export default ArtistShow;