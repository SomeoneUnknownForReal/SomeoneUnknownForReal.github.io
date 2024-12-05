const mBtn = document.getElementById("minusbtn");
const pBtn = document.getElementById("plusbtn");
const rBtn = document.getElementById("resetbtn");
const clbl = document.getElementById("clbl");
let count = 0;

pBtn.onclick = function(){
  count++;
  clbl.textContent = count;
  clbl.style.color = "#383838";
  setTimeout(function(){
    clbl.style.color = "#fff";
  }, 200);
}

mBtn.onclick = function(){
  count--;
  clbl.textContent = count;
}

rBtn.onclick = function(){
  count = 0;
  clbl.textContent = count;
}