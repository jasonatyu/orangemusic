import React from 'react';
import ArtistDetailItem from './ArtistDetailItem';

class ArtistDetail extends React.Component {

    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.artistId);
    }

    render() {
        if (this.props.artist) {
            const albums = this.props.artist.albums.map((album) => <ArtistDetailItem key={album.id} album={album} />)
            return (
                <div className='artist-detail'>
                    <h1>{this.props.artist.name}</h1>
                    { albums }
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ArtistDetail;