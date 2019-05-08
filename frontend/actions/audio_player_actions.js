export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const FAST_FORWARD_SONG = 'FAST_FORWARD_SONG';
export const REWIND_SONG = 'REWIND_SONG';
export const CHANGE_VOLUME = 'CHANGE_VOLUME';
export const QUEUE_SONG = 'QUEUE_SONG';
export const CONTINUE_SONG = 'CONTINUE_SONG';

export const playSong = (id) => {
    return {
        type: 'PLAY_SONG',
        id
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

export const queueSong = (id) => {
    return {
        type: 'QUEUE_SONG',
        id
    };
};

export const changeVolume = (value) => {
    return {
        type: 'CHANGE_VOLUME',
        value
    };
};