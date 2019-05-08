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
            const topResults = [];
            if (this.props.artists.length > 0) {
                topResults.push(["artist",this.props.artists[0]]);
            }
            if (this.props.albums.length > 0) {
                topResults.push(["album",this.props.albums[0]]);
            }
            if (this.props.songs.length > 0) {
                topResults.push(["song",this.props.songs[0]]);
            }
            const top = topResults.map((result) => <TopResultsItem key={result.id} type={result[0]} data={result[1]} />)
            const artists = this.props.artists.map((artist) => <ExploreIndexItem key={artist.id} artist={artist} />)
            const albums = this.props.albums.map((album) => <ExploreIndexItem key={album.id} album={album} />)
            const songs = this.props.songs.map((song) => <SongResultsItem key={song.id} song={song} />)
            return (
                <div className='explore'>
                    <div className='explore-content'>
                        <h1>Search</h1>
                        { topResults.length > 0 ? 
                        (<>
                            <div className='divider'></div>
                            <h2>Top Results</h2>
                            <section className='top-results'>
                                { top }
                            </section>
                        </>) : null }
                        {artists.length > 0 ?
                        (<>
                            <div className='divider'></div>
                            <h2>Artists</h2>
                            <section className='daily-top-100'>
                                <ul className='daily-top-100-list'>
                                    { artists }
                                </ul>
                            </section>
                        </>) : null}
                        {albums.length > 0 ? 
                        (<>
                        <div className='divider'></div>
                        <h2>Albums</h2>
                        <section className='daily-top-100'>
                            <ul className='daily-top-100-list'>
                                { albums }
                            </ul>
                        </section>
                        </>) : null}
                        { songs.length > 0 ? 
                        (
                        <>
                        <div className='divider'></div>
                        <h2>Songs</h2>
                        <section className='song-results'>
                            <ul className='song-results-list'>
                                { songs }
                            </ul>
                        </section>
                        </>): null }
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default SearchResults;