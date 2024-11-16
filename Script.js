contactpopup1 = document.getElementById("contactdialog");

const slides = document.querySelectorAll(".slides img");
let slideIdx = 0;
let intervalID = null;

const slideDisplay = document.getElementById("sdisplay");

initializeSlider();
document.addEventListener("keydown", event => {
  if(event.key === "ArrowRight"){
    nextSlide();
  } else if(event.key === "ArrowLeft"){
    prevSlide();
  }
});

function contactpopup(){
  contactpopup1.showModal();
}

function closeContactPopup(){
  contactpopup1.close();
}

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
  if (document.getElementById("sdisplaytip")){
    document.getElementById("sdisplaytip").style.display = "none";
  }
  clearInterval(intervalID);
  slideIdx--;
  showSlide(slideIdx);
}

function nextSlide(){
  if (document.getElementById("sdisplaytip")){
    document.getElementById("sdisplaytip").style.display = "none";
  }
  slideIdx++;
  if(slideIdx == 3){
    slideDisplay.textContent = "1/" + slides.length;
  }else{
    slideDisplay.textContent = (slideIdx+1).toString() + "/" + slides.length;
  }
  showSlide(slideIdx);
}