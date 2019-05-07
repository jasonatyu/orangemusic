import React from 'react';
import ExploreIndexFeatureItem from './ExploreIndexFeatureItem';
import ExploreIndexItem from './ExploreIndexItem';

class ExploreIndex extends React.Component {

    render() {
        return (
            <div className='explore'>
                <div className='explore-content'>
                    <h1>Browse</h1>
                    <div className='divider'></div>
                    <section className='featured-playlists'>
                        <ul className='features-playlists-list'>
                            <ExploreIndexFeatureItem />
                            <ExploreIndexFeatureItem />
                            <ExploreIndexFeatureItem />
                        </ul>
                    </section>
                    <div className='divider'></div>
                    <h2>Daily Top 100</h2>
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
                    <h2>Nothing But Hits</h2>
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

export default ExploreIndex;