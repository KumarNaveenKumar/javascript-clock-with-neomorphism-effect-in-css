setInterval(showTime, 1000);
function showTime() {
const d = new Date();
const deg = 6;
const hour = d.getHours();
const minute = d.getMinutes();
const second = d.getSeconds();
const hRotation = hour*30 + minute/2;
const mRotation = minute*6;
const sRotation = second*6;

hr.style.transform = `rotate(${hRotation}deg)`;
mn.style.transform = `rotate(${mRotation}deg)`;
sc.style.transform = `rotate(${sRotation}deg)`;
}

