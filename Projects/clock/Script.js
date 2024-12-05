let Clocktype = 0

function updateClock(){
  const now = new Date();
  if (Clocktype == 0){
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("date").textContent = timeString;
  }else{
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
  }
  const day = now.getDate().toString().padStart(2, 0);
  let month = now.getMonth()+1
  month = month.toString().padStart(2, 0);
  const year = now.getFullYear().toString().padStart(2, 0);
  const weekday = now.getDay();
  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dateString = day + '/'+ month + '/' + year +', '+ dayOfWeek[weekday];
  document.getElementById("ActualDate").textContent = dateString;
}

function ChangeType(){
  Clocktype = (Clocktype + 1) % 2;
  if (Clocktype == 0){
    document.getElementById("toggleclock").textContent = "Toggle type (Normal)";
  }else{
    document.getElementById("toggleclock").textContent = "Toggle type (UK)";
  }
  console.log(Clocktype);
}

updateClock();
setInterval(updateClock, 1000);