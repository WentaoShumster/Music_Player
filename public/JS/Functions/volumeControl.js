//Set a default volume which is considerate on first load
audio.volume = 0.5

//select the volume-control ID and then allow it to change based on its value out of 100 /100
let volume = document.querySelector("#volume-control")
volume.addEventListener("change", function(e) {
    audio.volume = e.currentTarget.value / 100;
})