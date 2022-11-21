//Initial References
const countValue = document.getElementById('count');
const colorPart = document.querySelectorAll('.audio-icon');
const container = document.querySelector('.container');
const startButton = document.querySelector('#start');
const restartText = document.getElementById('restart');
const result = document.querySelector('#result');
const wrapper = document.querySelector('.button-board-container');


//Mapping Colors By Creating Colors Object
const colors = {
  button1: {
    current: 'rgb(75, 136, 216)',
        new: 'rgb(47, 47, 187)',
    sound: new Audio("/assets/audio/deeep_bass.mp3")
  },
  button2: {
    current: 'rgb(216, 157, 75)',
      new: 'rgb(87, 182, 47)',
    sound: new Audio("/assets/audio/ambient_snare.mp3")
  },
  button3: {
    current: 'rgb(226, 69, 142)',
      new: 'rgb(173, 21, 76)',
    sound: new Audio("assets/audio/hat.mp3")
  },
  button4: {
    current: 'rgb(69, 226, 226)',
      new: 'rgb(21, 54, 173)',
    sound: new Audio("assets/audio/stab-satisfying-10.mp3")
  },
  button5: {
    current: 'rgb(24, 173, 84)',
      new: 'rgb(36, 97, 39)',
    sound: new Audio("assets/audio/thin-splash.mp3")
  },
  button6: {
    current: 'rgb(72, 36, 97)',
      new: 'rgb(207, 41, 204)',
    sound: new Audio("assets/audio/chord.mp3")
  },
};

let randomColors = [];
let pathGeneratorBool = false;
let count = 0;
let clickCount = 0;

//Function to start game
startButton.addEventListener('click', () => {
  count = 0;
  clickCount = 0;
  randomColors = [];
  pathGeneratorBool = false;
  wrapper.classList.remove('hide');
  container.classList.add('hide');
  pathGenerate();
});

//Function to decide the Random sequence
const pathGenerate = () => {
  randomColors.push(generateRandomValue(colors));
  count = randomColors.length;
  pathGeneratorBool = true;
  pathDecide(count);
};

//Function to get a random value from object
const generateRandomValue = obj => {
  let arr = Object.keys(obj);
  return arr[Math.floor(Math.random() * arr.length)];
};

//Function to play the sequence
const pathDecide = async count => {
  countValue.innerText = count;
  for (let i of randomColors) {
    let currentColor = document.querySelector(`.${i}`);
    await delay(500);
      
    currentColor.style.backgroundColor = `${colors[i]['new']}`;
    colors[i]['sound'].play();
    await delay(600);
    
    currentColor.style.backgroundColor = `${colors[i]['current']}`;
      await delay(600);
      colors[i]['sound'].pause();
      colors[i]['sound'].currentTime = 0;
  }
  pathGeneratorBool = false;
};

//Delay for blink effect
async function delay(time) {
  return await new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

//When user click on the colors
colorPart.forEach(element => {
  element.addEventListener('click', async e => {
    //if user clicks the same color then next level
    if (pathGeneratorBool) {
      return false;
    }
    if (e.target.classList[1] == randomColors[clickCount]) {
      //Color blink effect on click
      colors[randomColors[clickCount]]['sound'].play();
      e.target.style.backgroundColor = `${colors[randomColors[clickCount]]['new']}`;
      await delay(1200);
      e.target.style.backgroundColor = `${colors[randomColors[clickCount]]['current']}`;
      colors[randomColors[clickCount]]['sound'].pause();
      colors[randomColors[clickCount]]['sound'].currentTime = 0;
      //User click
      clickCount += 1;
      //Next level if number of valid clicks == count
      if (clickCount == count) {
        clickCount = 0;
        pathGenerate();
      }
    } else {
      lose();
    }
  });
});

//Function when player executes wrong sequence
const lose = () => {
  result.innerHTML = `<h2 class="level"> Your Score: </h2>
                      <h2 class="level">${count}</h2>`;
  result.classList.remove('hide');
  container.classList.remove('hide');
  wrapper.classList.add('hide');
  restartText.classList.remove('hide');
  startButton.classList.remove('hide');
};