export const SELECT_SONG = 'SELECT_SONG';

export const selectSong = (id) => {
    return {
        type: 'SELECT_SONG',
        id
    };
};