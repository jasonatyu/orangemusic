import React from 'react';
import ExploreIndexFeatureItem from './ExploreIndexFeatureItem';
import ExploreIndexItem from './ExploreIndexItem';

class ExploreIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPlaylists("explore");
    }

    render() {
        if (this.props.featuredPlaylists && this.props.topPlaylists && this.props.categoryPlaylists) {
            const featuresPlaylists = this.props.featuredPlaylists.map((playlist) => <ExploreIndexFeatureItem key={playlist.id} playlist={playlist} />)
            const topPlaylists = this.props.topPlaylists.map((playlist) => <ExploreIndexItem key={playlist.id} playlist={playlist} />)
            const categoryPlaylists = this.props.categoryPlaylists.map((playlist) => <ExploreIndexItem key={playlist.id} playlist={playlist} />)
            return (
                <div className='explore'>
                    <div className='explore-content'>
                        <h1>Browse</h1>
                        <div className='divider'></div>
                        <section className='featured-playlists'>
                            <ul className='features-playlists-list'>
                                { featuresPlaylists }
                            </ul>
                        </section>
                        { topPlaylists.length > 0 ?
                        (<>
                        <div className='divider'></div>
                        <h2>Daily Top 10</h2>
                        <section className='daily-top-100'>
                            <ul className='daily-top-100-list'>
                                {topPlaylists}
                            </ul>
                        </section>
                        </>) : null}
                        { categoryPlaylists.length > 0 ?
                        (<>
                        <div className='divider'></div>
                        <h2>Nothing But Hits</h2>
                        <section className='daily-top-100'>
                            <ul className='daily-top-100-list'>
                                { categoryPlaylists }
                            </ul>
                        </section>
                        </>) : null }
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ExploreIndex;