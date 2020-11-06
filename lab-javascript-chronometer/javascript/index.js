const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milCen = document.getElementById('milCen');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

setInterval(printTime, 1);

function printTime() {
  // ... your code goes here
  printSeconds();
  printMinutes();
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here 
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());  
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());  
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  // let milliseconds = chronometer.threeDigitNumber(chronometer.getMilliseconds());
  // milCen.innerHTML = milliseconds[2];
  // milDec.innerHTML = milliseconds[1];
  // milUni.innerHTML = milliseconds[0];
  let milliseconds = chronometer.getMilliseconds();
  milUni.innerHTML = milliseconds;
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
  let splits = document.getElementById('splits');
  //Ref: https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
  while (splits.firstChild) {
    splits.removeChild(splits.firstChild);
  }
}

function setStopBtn() {
  // ... your code goes here
  chronometer.stopClick();
}

function setSplitBtn() {
  // ... your code goes here
  let split = document.createElement('li');
  split.id = 'split';
  split.innerHTML = chronometer.splitClick();
  document.getElementById('splits').appendChild(split);
}

function setStartBtn() {
  // ... your code goes here
  chronometer.startClick();
}

function setResetBtn() {
  // ... your code goes here
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeft.className == 'btn start') {
    btnLeft.innerHTML = 'STOP';
    btnLeft.className = 'btn stop';
    btnRight.innerHTML = 'SPLIT';
    btnRight.className = 'btn split';
    setStartBtn();           
  } else if(btnLeft.className == 'btn stop') {
    btnLeft.innerHTML = 'START';
    btnLeft.className = 'btn start';
    btnRight.innerHTML = 'RESET';
    btnRight.className = 'btn reset';
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeft.className == 'btn start') {
    setResetBtn();
    clearSplits();
  } else if(btnLeft.className == 'btn stop') {
    setSplitBtn();
  }
});
