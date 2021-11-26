// Use of setInterval() method to repeat the showTime function after every 1s.
setInterval(showTime, 1000);

function showTime() {
  
//   To create a date object.
const d = new Date();
  
const deg = 6;
  
//   To get Hours, Minutes and Second.
const hour = d.getHours();
const minute = d.getMinutes();
const second = d.getSeconds();
  
//   To set the calculations of the amount of rotation of the hands of the clock.
const hRotation = hour*30 + minute/2;
const mRotation = minute*6;
const sRotation = second*6;

//   To rotate the hands of the clock.
hr.style.transform = `rotate(${hRotation}deg)`;
mn.style.transform = `rotate(${mRotation}deg)`;
sc.style.transform = `rotate(${sRotation}deg)`;
}

