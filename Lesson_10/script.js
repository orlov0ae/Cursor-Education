// Необхідно написати програму, яка буде зчитувати з клавіатури натискання клавіш
// та відтворювати унікальний звук для кожної клавіши (клавіши можуть бути будь-
// які, звуки можуть бути будь-які, тільки вкажіть у верстці – які кнопки натискати). В
// ідеалі повинно вийти як по посиланню.

//Q

document.addEventListener('keydown', function(event) {
  if (event.code === 'KeyQ') {
        let soundQ = new Audio("./sounds/Q.mp3");
        soundQ.play();
    }
});

const buttonQ = document.getElementById("Q");

buttonQ.addEventListener("mousedown", function() {
    let soundQ = new Audio("./sounds/Q.mp3");
    soundQ.play();
});

//W

document.addEventListener('keydown', function(event) {
  if (event.code === 'KeyW') {
        let soundW = new Audio("./sounds/W.mp3");
        soundW.play();
    }
});

const buttonW = document.getElementById("W");

buttonW.addEventListener("mousedown", function() {
    let soundW = new Audio("./sounds/W.mp3");
    soundW.play();
});

//E

document.addEventListener('keydown', function(event) {
  if (event.code === 'KeyE') {
        let soundE = new Audio("./sounds/E.mp3");
        soundE.play();
    }
});

const buttonE = document.getElementById("E");

buttonE.addEventListener("mousedown", function() {
    let soundE = new Audio("./sounds/E.mp3");
    soundE.play();
});

//R

document.addEventListener('keydown', function(event) {
  if (event.code === 'KeyR') {
        let soundR = new Audio("./sounds/R.mp3");
        soundR.play();
    }
});

const buttonR = document.getElementById("R");

buttonR.addEventListener("mousedown", function() {
    let soundR = new Audio("./sounds/R.mp3");
    soundR.play();
});

//T

document.addEventListener('keydown', function(event) {
  if (event.code === 'KeyT') {
        let soundT = new Audio("./sounds/T.mp3");
        soundT.play();
    }
});

const buttonT = document.getElementById("T");

buttonT.addEventListener("mousedown", function() {
    let soundT = new Audio("./sounds/T.mp3");
    soundT.play();
});

//Y

document.addEventListener('keydown', function(event) {
  if (event.code === 'KeyY') {
        let soundY = new Audio("./sounds/Y.mp3");
        soundY.play();
    }
});

const buttonY = document.getElementById("Y");

buttonY.addEventListener("mousedown", function() {
    let soundY = new Audio("./sounds/Y.mp3");
    soundY.play();
});