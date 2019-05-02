import React from 'react';
import LibraryMenuItem from './LibraryMenuItem';

const LibraryMenu = () => (
    <section id="library-menu">
        <h1>Library</h1>
        <ul>
            <LibraryMenuItem item="Playlists" />
            <LibraryMenuItem item="Artists"/>
            <LibraryMenuItem item="Albums" />
            <LibraryMenuItem item="Songs" />
        </ul>
    </section>
)

export default LibraryMenu;