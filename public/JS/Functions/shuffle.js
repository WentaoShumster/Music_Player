import { shuffleButton, songIndex } from "../variables.js";
import { loadSong, playSong } from "./playPause.js";

function shuffle(array) {
    let shuffleIndex = array.length,
        randomIndex;
    //While there are elements left to shuffle
    while (shuffleIndex != 0) {

        //Picks a random element
        randomIndex = Math.floor(Math.random() * shuffleIndex);
        shuffleIndex--;
        // And swaps it with the current element.
        [array[shuffleIndex], array[randomIndex]] = [array[randomIndex], array[shuffleIndex]]
    }
    return array;
}


function shuffleSongs() {
    shuffle(songs); {
        loadSong(songs[songIndex]);
        playSong()
    }
}

//Event Listeners Defined
shuffleButton.addEventListener('click', shuffleSongs);