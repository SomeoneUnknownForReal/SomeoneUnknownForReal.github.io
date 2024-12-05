const display = document.getElementById("display");
const startbtn = document.getElementById("start");
const pausebtn = document.getElementById("pause");
const resetbtn = document.getElementById("reset");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
  if(!isRunning){
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
    startbtn.style.display = "none";
    resetbtn.style.display = "inline-block";
    pausebtn.style.display = "inline-block";
  }
}

function pause(){
  if(isRunning){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
    startbtn.style.display = "inline-block";
    pausebtn.style.display = "none";
  }
}

function reset(){
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
  startbtn.style.display = "inline-block";
  resetbtn.style.display = "none";
  pausebtn.style.display = "none";
}

function update(){
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000*60*60))
  let mins = Math.floor(elapsedTime / (1000*60) % 60);
  let seconds = Math.floor(elapsedTime / 1000 % 60);
  let ms = Math.floor(elapsedTime % 1000 / 10);

  hours = String(hours).padStart(2, "0");
  mins = String(mins).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  ms = String(ms).padStart(2, "0");

  display.textContent = `${hours}:${mins}:${seconds}:${ms}`;
}