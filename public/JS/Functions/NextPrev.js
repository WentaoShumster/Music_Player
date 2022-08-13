import { nextButton, prevButton, songIndex, decrSongIndex, incrSongIndex } from "../variables.js";
import { loadSong, playSong } from "./playPause.js";

//Previous Song Function 
function prevSong() {
    decrSongIndex(); {
        loadSong(songs[songIndex]);
        playSong()
    }
}

//Forward Song Function
export function nextSong() {
    incrSongIndex(); {
        loadSong(songs[songIndex]);
        playSong()
    }
}
//Event Listeners Defined
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);