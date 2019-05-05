import React from 'react';
import ArtistIndexItem from './ArtistIndexItem';
import ArtistDetailContainer from './ArtistDetailContainer';
import { Route } from 'react-router-dom';


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
            <div className='artist-library'>
                <ul className='artist-index'>
                    { artists }
                </ul>
                <Route path="/library/artists/:artistId" component={ArtistDetailContainer} />
            </div>
        );
    }
}

export default ArtistIndex;