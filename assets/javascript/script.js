// create sequences object
const sounds = {
    "kick": new Audio("assets/audio/808sub.mp3"),
    "snare": new Audio("assets/audio/ambient_snare.mp3"),
    "splash": new Audio("assets/audio/thin-splash.mp3")
}

// sends the square to the play audio function
function playAudio(e) {
    sounds[e.target.id].play();
    
}

// functions to add click to squares
function addClickEvent() {
    
    let buttons = document.querySelectorAll(".buttons") // get all buttons
    console.log(buttons);
    buttons.forEach((item) => { // list button by button as a item
        console.log(item.classList[0]);
        item.addEventListener("click", playAudio); // add the playAudio function
    });
}


// Just to test the buttons:
let game = document.getElementById("game");
let square = document.createElement("div");
square.setAttribute("class", "buttons")
square.setAttribute("id", "kick")
square.style.width = "40px";
square.style.height = "40px";
square.style.backgroundColor = "red";
game.appendChild(square);
addClickEvent();



// function to play songs in sequence
// calls play audio
function playSongs(songs) {
}

// delay
function delayNote(time) {
    
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