import { progressContainer, musicContainer } from "../variables.js";

function darkModeTimeout() {
    var timeout;
    window.onload = resetTimer;
    window.onmousemove = resetTimer; // catches mouse movement
    window.onmousedown = resetTimer; // catches touchscreen presses as well      
    window.ontouchstart = resetTimer; // catches touchscreen swipes as well
    window.onclick = resetTimer; // catches touchpad clicks as well
    window.onkeydown = resetTimer; //catch key press
    window.addEventListener("scroll", resetTimer, true); // catches scrolling

    //darkMode function
    function darkMode() {
        var darkModeButtons = document.querySelectorAll(".control-btn,.fa-volume-up,.fas")
        document.body.classList.toggle("darkBody");
        progressContainer.classList.toggle("darkMode");
        musicContainer.classList.toggle("darkMode");
        for (let i = 0; i < darkModeButtons.length; i++) {
            darkModeButtons[i].classList.toggle("darkMode");
        };
    }

    function resetTimer() {
        clearTimeout(timeout)
        timeout = setTimeout(darkMode, 30 * 1000); //time is set in milliseconds
    }
}
darkModeTimeout();