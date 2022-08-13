import { audio, title, songIndex, playButton, vinyl, musicContainer } from "../variables.js";

// Loads the song DOM information
loadSong(songs[songIndex])
    //Updating the details of the song
export function loadSong(song) {
    title.innerText = song;
    audio.src = `./music/${song}.mp3`;
    vinyl.src = `./images/${song}.jpg`;
}
//Play the song
export function playSong() {
    musicContainer.classList.add("play");
    playButton.querySelector("i.fas").classList.remove('fa-play');
    playButton.querySelector("i.fas").classList.add('fa-pause');

    audio.play();

}
//Pause the song
export function pauseSong() {
    musicContainer.classList.remove("play");
    playButton.querySelector("i.fas").classList.add('fa-play');
    playButton.querySelector("i.fas").classList.remove('fa-pause');

    audio.pause();
}
//Give the playButton it's functionality
playButton.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains("play");

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});