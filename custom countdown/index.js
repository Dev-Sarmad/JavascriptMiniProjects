const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateElement = document.getElementById("date-picker");
const countDownElement = document.getElementById("countdown");
const countDownTitle = document.getElementById("countdown-title");
const countDownBtn = document.getElementById("countdown-btn");
let timeElements = document.querySelectorAll("span");

let countTitle = "";
let countDate = "";
let countValue = Date;
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
// setting the minimum date
const today = new Date().toISOString().split("T")[0];
console.log(today); //2023-10-10T13:12:40.637Z inorder to get rid of time we have to trim from 'T'
// so we use split method
dateElement.setAttribute("min", today); // min is atttribute for minimum date so that we can select future dates.

const updateDom = () => {
  // present date
  let now = new Date().getTime();
  //actual time length from the present date
  let distance = countValue - now;
  console.log("distance is " + distance);
  const days = Math.floor(distance / day);
  //if the distance % day remainder something like 1.5 then we have to / this by actual hour to get total hours same goes for others.
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);
  console.log(minutes, seconds, days);
  countDownTitle.textContent = `${countTitle}`;
  timeElements[0].textContent = `${days}`;
  timeElements[1].textContent = `${hours}`;
  timeElements[2].textContent = `${minutes}`;
  timeElements[3].textContent = `${seconds}`;
  // hiding the input container and showing Countdown after setting the values.
  inputContainer.hidden = true;
  countDownElement.hidden = false;
};

const updateCountDown = (e) => {
  e.preventDefault();
  countTitle = e.srcElement[0].value;
  countDate = e.srcElement[1].value;

  // getting the number version current date
  countValue = new Date(countDate).getTime();
  console.log(countTitle, countDate, countValue);
  updateDom();
};
countdownForm.addEventListener("submit", updateCountDown);
