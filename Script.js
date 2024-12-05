const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const contactpopup1 = document.getElementById("contactdialog");

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

function toggleSidebar(){
  sidebar.classList.toggle("close");
  toggleBtn.classList.toggle("rotate");
  
  Array.from(sidebar.getElementsByClassName("show")).forEach(ul => {
    ul.classList.remove("show");
    ul.previousElementSibling.classList.remove("rotate");
  })
}

function toggleSubMenu(btn){
  btn.nextElementSibling.classList.toggle("show");
  btn.classList.toggle("rotate");

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle("close");
    toggleBtn.classList.toggle("rotate");
  }
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

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activetab", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " activetab";
}