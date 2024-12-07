let toggleBtn;
let sidebar;

window.onload = function () {
  try {
    toggleBtn = document.getElementById("toggle-btn");
    sidebar = document.getElementById("sidebar");
  } catch (error) {
    console.log(toggleBtn + sidebar)
  }
};

function toggleSidebar(){
  try {
    sidebar.classList.toggle("close");
    toggleBtn.classList.toggle("rotate");
    Array.from(sidebar.getElementsByClassName("show")).forEach(ul => {
      ul.classList.remove("show");
      ul.previousElementSibling.classList.remove("rotate");
    })
  } catch (error) {
    console.log(toggleBtn + " " + sidebar)
  }
}

function toggleSubMenu(btn){
  btn.nextElementSibling.classList.toggle("show");
  btn.classList.toggle("rotate");

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle("close");
    toggleBtn.classList.toggle("rotate");
  }
}

