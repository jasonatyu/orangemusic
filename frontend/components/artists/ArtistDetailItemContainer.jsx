import React from 'react';
import { connect } from 'react-redux';
import ArtistDetailItem from './ArtistDetailItem';

const mapStateToProps = (state, ownProps) => {
    return {
        albumSongs: state.entities.albums[ownProps.album.id].song_ids.map((songId) => state.entities.songs[songId])
    };
};

export default connect(mapStateToProps, null)(ArtistDetailItem);