import React from 'react';
import PlaylistIndexDetailItem from './PlaylistIndexDetailItem';

class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserPlaylists(this.props.currentUserId);
    }

    render() {
        const playlists = this.props.playlists.map((playlist) => <PlaylistIndexDetailItem key={playlist.id} playlist={playlist}/>)
        return (
            <div className='user-library'>
                <ul className='library-list'>
                    {playlists}
                </ul>
            </div>
        );
    }
}

export default PlaylistIndex;