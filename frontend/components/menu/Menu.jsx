import React from 'react';
import { closeMenu } from '../../actions/menu_actions';
import { connect } from 'react-redux';
import PlaylistMenuContainer from '../playlist_menu/PlaylistMenuContainer';

const Menu = ({ menu, closeMenu, playlistId }) => {
    if (!menu) {
        return null;
    }
    let component;
    switch (menu[0]) {
        case 'playlist':
            break;
        default:
            return null;
    }
    return (
        <div className="menu-background" onClick={closeMenu}>
            <div className="menu-child">
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
         menu: state.ui.menu
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeMenu: () => dispatch(closeMenu())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);