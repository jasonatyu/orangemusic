export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const FAST_FORWARD_SONG = 'FAST_FORWARD_SONG';
export const REWIND_SONG = 'REWIND_SONG';
export const CHANGE_VOLUME = 'CHANGE_VOLUME';
export const QUEUE_SONG = 'QUEUE_SONG';
export const CONTINUE_SONG = 'CONTINUE_SONG';
export const REMOVE_QUEUED_SONG = 'REMOVE_QUEUED_SONG';
export const QUEUE_SONGS = 'QUEUE_SONGS';
export const SHUFFLE_PLAY = 'SHUFFLE_PLAY';


export const playSong = (song) => {
    return {
        type: 'PLAY_SONG',
        song
    };
};

export const removeQueuedSong = () => {
    return {
        type: 'REMOVE_QUEUED_SONG',
    };
};

export const pauseSong = () => {
    return {
        type: 'PAUSE_SONG',
    };
};

export const continueSong = () => {
    return {
        type: 'CONTINUE_SONG',
    };
};

export const queueSong = (song) => {
    return {
        type: 'QUEUE_SONG',
        song
    };
};

export const queueSongs = (songs) => {
    return {
        type: 'QUEUE_SONGS',
        songs
    };
};

export const changeVolume = (value) => {
    return {
        type: 'CHANGE_VOLUME',
        value
    };
};

export const shufflePlay = () => {
    return {
        type: 'SHUFFLE_PLAY',
    };
};