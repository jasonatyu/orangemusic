//shuffle array: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

export const shuffleSongs = (songs) => {
    for (let i = songs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    return songs;
};