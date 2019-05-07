import React from 'react';
import ExploreIndexItem from '../explore/ExploreIndexItem';
import TopResultsItem from '../search_results/TopResultsItem';
import SongResultsItem from '../search_results/SongResultsItem';

class SearchResults extends React.Component {

    render() {
        return (
            <div className='explore'>
                <div className='explore-content'>
                    <h1>Search</h1>
                    <div className='divider'></div>
                    <h2>Top Results</h2>
                    <section className='top-results'>
                        <TopResultsItem />
                        <TopResultsItem />
                        <TopResultsItem />
                    </section>
                    <div className='divider'></div>
                    <h2>Artists</h2>
                    <section className='daily-top-100'>
                        <ul className='daily-top-100-list'>
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                        </ul>
                    </section>
                    <div className='divider'></div>
                    <h2>Albums</h2>
                    <section className='daily-top-100'>
                        <ul className='daily-top-100-list'>
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                        </ul>
                    </section>
                    <div className='divider'></div>
                    <h2>Songs</h2>
                    <section className='song-results'>
                        <ul className='song-results-list'>
                            <SongResultsItem />
                            <SongResultsItem />
                            <SongResultsItem />
                            <SongResultsItem />
                        </ul>
                    </section>
                    <div className='divider'></div>
                    <h2>Playlists</h2>
                    <section className='daily-top-100'>
                        <ul className='daily-top-100-list'>
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                            <ExploreIndexItem />
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
}

export default SearchResults;