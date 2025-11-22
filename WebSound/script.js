let catSound = document.querySelector("#catSound")


let playButton = document.querySelector("#playButton")
let pauseButton = document.querySelector("#pauseButton")
let speedButton = document.querySelector("#speedButton")
let soundSpeed = 1;


playButton.addEventListener("click", function(){
    catSound.loop = true;
    catSound.play();
})

pauseButton.addEventListener("click", function(){
    catSound.pause();
})

speedButton.addEventListener("click", function(){
    soundSpeed = soundSpeed * 1.1;
    catSound.playbackRate = soundSpeed;
    console.log(soundSpeed);
})

slowButton.addEventListener("click", function(){
    soundSpeed = soundSpeed * 0.9;
    catSound.playbackRate = soundSpeed;
    console.log(soundSpeed);
})