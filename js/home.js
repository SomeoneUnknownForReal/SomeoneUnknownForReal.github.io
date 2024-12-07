const slides = document.querySelectorAll(".slides img");
let slideIdx = 0;
let intervalID = null;
let intervalPlaying = true;

let nextN = 0;

const slideDisplay = document.getElementById("sdisplay");

initializeSlider();

document.addEventListener("keydown", event => {
  if(event.key === "ArrowRight"){
    nextSlide();
  } else if(event.key === "ArrowLeft"){
    prevSlide();
  } else if(event.key == "ArrowDown"){
    toggleAutoSlide();
  }
});

function initializeSlider(){
  if(slides.length > 0){
    slides[slideIdx].classList.add("displaySlide");
    intervalID = setInterval(nextSlide, 5000);
  }
}

function showSlide(idx){
  if(idx >= slides.length){
    slideIdx = 0;
  }else if(idx < 0){
    slideIdx = slides.length - 1;
  }
  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIdx].classList.add("displaySlide");
}

function prevSlide(){
  if (document.getElementById("sdisplaytip") && nextN == 2){
    document.getElementById("sdisplaytip").style.display = "none";
  }else{
    nextN++;
  }
  //clearInterval(intervalID);
  slideIdx--;
  if(slideIdx == 0){
    slideDisplay.textContent = "1/" + slides.length;
  }else if(slideIdx == -1){
    slideDisplay.textContent = slides.length + "/" + slides.length;
  }else{
    slideDisplay.textContent = (slideIdx+1).toString() + "/" + slides.length;
  }
  console.log(slideIdx);
  showSlide(slideIdx);
}

function nextSlide(){
  if (document.getElementById("sdisplaytip") && nextN == 2){
    document.getElementById("sdisplaytip").style.display = "none";
  }else{
    nextN++;
  }
  slideIdx++;
  if(slideIdx == 3){
    slideDisplay.textContent = "1/" + slides.length;
  }else{
    slideDisplay.textContent = (slideIdx+1).toString() + "/" + slides.length;
  }
  showSlide(slideIdx);
}

function toggleAutoSlide(){
  document.getElementById("1").classList.toggle("sshow");
  document.getElementById("2").classList.toggle("sshow");
  if(intervalPlaying == true){
    clearInterval(intervalID);
    intervalPlaying = false;
  }else{
    intervalID = setInterval(nextSlide, 5000);
    intervalPlaying = true;
  }
}