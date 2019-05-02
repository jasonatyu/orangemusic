import React from 'react';
import ArtistIndexItem from './ArtistIndexItem';

class ArtistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserArtists(this.props.currentUserId);
    }

    render() {
        const artists = this.props.artists.map( (artist) => <ArtistIndexItem key={artist.id} artist={artist} /> )
        return (
            <ul>
                { artists }
            </ul>
        );
    }
}

export default ArtistIndex;