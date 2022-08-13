import { progress, audio, duraTime, currTime, progressContainer } from "../variables.js";
import { nextSong } from "./NextPrev.js";

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
};

//Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width * duration);
}

//get duration & currentTime for time of of song
function durationTime(e) {
    const { duration, currentTime } = e.srcElement;
    var sec;
    var sec_dura;

    // define minutes currentTime
    let min = (currentTime == null) ? 0 :
        Math.floor(currentTime / 60)
    min = min < 10 ? '0' + min : min;

    //define seconds currentTime
    function get_second(x) {
        if (Math.floor(x) >= 60) {
            for (var i = 1; i <= 60; i++) {
                if (Math.floor(x) >= (60 * i) && Math.floor(x) < (60 * (i + 1))) {
                    sec = Math.floor(x) - (60 * i);
                    sec = sec < 10 ? '0' + sec : sec;
                }
            }
        } else {
            sec = Math.floor(x);
            sec = sec < 10 ? '0' + sec : sec;
        }
    }
    //define seconds duration
    get_second(currentTime, sec);

    //change currTime for HTML
    currTime.innerHTML = min + ':' + sec;

    //define minutes duration
    let min_dura = (isNaN(duration) === true) ? '0' :
        Math.floor(duration / 60);
    min_dura = min_dura < 10 ? '0' + min_dura : min_dura;

    function get_sec_d(x) {
        if (Math.floor(x) >= 60) {
            for (var i = 1; i <= 60; i++) {
                if (Math.floor(x) >= (60 * i) && Math.floor(x) < (60 * (i + 1))) {
                    sec_dura = Math.floor(x) - (60 * i);
                    sec_dura = sec_dura < 10 ? '0' + sec_dura : sec_dura;
                }
            }
        } else {
            sec_dura = (isNaN(duration) === true) ? '0' :
                Math.floor(x);
            sec_dura = sec_dura < 10 ? '0' + sec_dura : sec_dura;
        }
    }
    //define seconds for duration

    get_sec_d(duration);

    //change duraTime for HTML
    duraTime.innerHTML = min_dura + ':' + sec_dura;
}
//Event Listeners here
//Time/Song Update
audio.addEventListener('timeupdate', updateProgress);
//Click on Progress Bar
progressContainer.addEventListener('click', setProgress);
//Song ends play next song
audio.addEventListener('ended', nextSong);
//Time of song
audio.addEventListener('timeupdate', durationTime);