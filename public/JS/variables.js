//List of const values connecting HTML and CSS

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("song-title");
const vinyl = document.getElementById("vinyl");
const currTime = document.querySelector("#currTime")
const duraTime = document.querySelector("#duraTime")

const musicContainer = document.getElementById("music-container");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const shuffleButton = document.getElementById("random");
const searchBar = document.getElementById('song-search');

//Starting within the array (it's start off alphabetically)
let songIndex = 0;

export function incrSongIndex() {
    songIndex++
    //Expection of if you are trying to under 0
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    };
}

export function decrSongIndex() {
    songIndex--
    //Expection of if you are trying to go over the max number
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
}


export {
    musicContainer,
    playButton,
    prevButton,
    nextButton,
    audio,
    progress,
    progressContainer,
    title,
    vinyl,
    currTime,
    duraTime,
    songIndex,
    shuffleButton,
    searchBar
};