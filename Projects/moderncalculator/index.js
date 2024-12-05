const display = document.getElementById('display');
const cool = document.getElementById('cool');

function appendToDisplay(input){
  display.value += input;
}

function clearDisplay(){
  display.value = '';
}

function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = 'ERROR';
  }
}