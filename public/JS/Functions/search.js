import { loadSong, playSong } from "./playPause.js";
import { searchBar } from "../variables.js";

searchBar.addEventListener('change', (event) => {
    songs.filter(songs => {
        songs.includes(searchBar.value); {
            loadSong(searchBar.value);
            playSong();
        }
    })
});