import React from 'react';
import AlbumIndexItem from './AlbumIndexItem';

class AlbumIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserAlbums(this.props.currentUserId);
    }

    render() {
        const albums = this.props.albums.map((album) => <AlbumIndexItem key={album.id} album={album} />)
        return (
            <div className='user-library'>
                <ul className='library-list'>
                    { albums }
                </ul>
            </div>
        )
    }
}

export default AlbumIndex;