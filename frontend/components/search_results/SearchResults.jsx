import React from 'react';
import ExploreIndexItem from '../explore/ExploreIndexItem';
import TopResultsItem from '../search_results/TopResultsItem';
import SongResultsItem from '../search_results/SongResultsItem';

class SearchResults extends React.Component {

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {

    }

    render() {
        if (this.props.artists && this.props.albums && this.props.songs) {
            const artists = this.props.artists.map((artist) => <TopResultsItem key={artist.id} artist={artist} />)
            const albums = this.props.albums.map((album) => <ExploreIndexItem key={album.id} album={album} />)
            const songs = this.props.songs.map((song) => <SongResultsItem key={song.id} song={song} />)
            return (
                <div className='explore'>
                    <div className='explore-content'>
                        <h1>Search</h1>
                        <div className='divider'></div>
                        <h2>Top Results</h2>
                        <section className='top-results'>
                            { artists.length > 0 ? artists : null }
                        </section>
                        <div className='divider'></div>
                        <h2>Albums</h2>
                        <section className='daily-top-100'>
                            <ul className='daily-top-100-list'>
                                { albums.length > 0 ? albums : null }
                            </ul>
                        </section>
                        <div className='divider'></div>
                        <h2>Songs</h2>
                        <section className='song-results'>
                            <ul className='song-results-list'>
                                { songs.length > 0 ? songs : null}
                            </ul>
                        </section>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default SearchResults;