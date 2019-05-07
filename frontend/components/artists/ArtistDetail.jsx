import React from 'react';
import ArtistDetailItemContainer from './ArtistDetailItemContainer';

class ArtistDetail extends React.Component {

    componentDidMount() {
        console.log('mounting')
        this.props.fetchArtist(this.props.match.params.artistId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.artist === undefined || prevProps.artist.id != this.props.match.params.artistId) {
            this.props.fetchArtist(this.props.match.params.artistId);
        }
    }

    render() {
        if (this.props.artistAlbums === undefined || this.props.artistAlbums.some((song) => song === undefined)) {
            return null;
        } else {
            const albums = this.props.artistAlbums.map((album) => <ArtistDetailItemContainer key={album.id} album={album} />)
            return (
                <div className='artist-detail'>
                    <h1>{this.props.artist.name}</h1>
                    { albums }
                </div>
            );
        }
    }
}

export default ArtistDetail;