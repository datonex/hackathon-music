// create sequences object
const instruments = {
    "808sub": new Audio("assets/audio/808sub.mp3"),
    "ambient_snare": new Audio("assets/audio/ambient_snare.mp3"),
    "bigbend": new Audio("assets/audio/bigbend.mp3"),
    "chord": new Audio("assets/audio/chord.mp3"),
    "deep_bass": new Audio("assets/audio/deeep_bass.mp3"),
    "deepcrash": new Audio("assets/audio/deepcrash.mp3"),
    "disco": new Audio("assets/audio/disco.mp3"),
    "hat": new Audio("assets/audio/hat.mp3"),
    "khezie-1841-Low-808": new Audio("assets/audio/khezie-1841-Low-808.mp3"),
    "one-staggered-epiano-chord-2": new Audio("assets/audio/one-staggered-epiano-chord-2.mp3"),
    "snare2": new Audio("assets/audio/snare2.mp3"),
    "stab-satisfying-3": new Audio("assets/audio/stab-satisfying-3.mp3"),
    "stab-satisfying-10": new Audio("assets/audio/stab-satisfying-10.mp3"),
    "thin-splash": new Audio("assets/audio/thin-splash.mp3"),
    "voice_cmon": new Audio("assets/audio/voice_cmon.mp3"),
}

// play audio using the sound object and target (square) id
function playAudioEvent(e) {
    instruments[e.target.id].play(); 
}

function playAudio(note) {
    note.play();
}

// functions to add click to squares
function addClickEvent() {
    let buttons = document.querySelectorAll(".buttons") // get all buttons
    console.log(buttons);
    buttons.forEach((item) => { // list button by button as a item
        console.log(item.classList[0]);
        item.addEventListener("click", playAudioEvent); // add the playAudio function
    });
}

function createSquares(instruments) {
    // Just to test the buttons:
    let sounds = Object.keys(instruments);
    let game = document.getElementById("game");
    sounds.forEach((sound) => {
        let square = document.createElement("div");
        square.setAttribute("class", "buttons")
        square.setAttribute("id", sound);
        square.style.width = "40px";
        square.style.height = "40px";
        square.style.backgroundColor = "red";
        square.style.display = "inline-block";
        square.style.margin = "5px";
        game.appendChild(square);
        addClickEvent();
    });
}
createSquares(instruments);


// from: https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function playBar(song, bpm = 120) {
    const tempoBetweenNotes = bpm / 60;
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < song.length; i++) {
            let note = instruments[song[i]];
            setTimeout(() => {
                playAudio(note)
            }, tempoBetweenNotes * 1000 * i);
        }
    }
}

song = ["deep_bass", "snare2", "deep_bass", "deep_bass", "snare2"]
// // function to play songs in sequence
// // calls play audio
// function playSongs(songs) {
// }

playBar(song, bpm = 60);

// // function to start the game
// function startGame() {
// }

// // create endgame screen and show points
// function endGame() {
// }

// // Game loop function
// function gameLoop() {
//     // keep track of points, username, calls songs
// }