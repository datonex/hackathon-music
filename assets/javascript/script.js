// create sequences object
const sounds = {
    "kick": new Audio("assets/audio/808sub.mp3"),
    "snare": new Audio("assets/audio/ambient_snare.mp3"),
    "splash": new Audio("assets/audio/thin-splash.mp3")
}


// functions to add click to squares
function addClickEvent() {
    
    let buttons = document.querySelectorAll(".buttons") // get all buttons
    buttons.forEach((item) => { // list button by button as a item
        item.addEventListener("click", playAudio); // add the playAudio function
    });
}

    // sends the square to the play audio function
function playAudio(e) {
    if (e.target.classList[0] == "buttons") { // here I check if it is a button
        sounds[e.target.id].play(); // here I access the sounds object and get the audio by square id
   }
}


// function to play songs in sequence
// calls play audio
function playSongs(songs) {
}

// delay
function delayNote(time) {
    
}

// function to play a single audio
function playAudio() {
    square_to_audio = {
    }
}

// function to start the game
function startGame() {
}

// create endgame screen and show points
function endGame() {
}

// Game loop function
function gameLoop() {
    // keep track of points, username, calls songs
}