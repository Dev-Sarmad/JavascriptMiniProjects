const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateElement = document.getElementById("date-picker");
const countDownElement = document.getElementById("countdown");
const countDownTitle = document.getElementById("countdown-title");
const countDownBtn = document.getElementById("countdown-button");
let timeElements = document.querySelectorAll("span");
const completeElement = document.getElementById("complete");
const completeInfo = document.getElementById("complete-info");
const completeBtn = document.getElementById("complete-button");

let countTitle = "";
let countDate = "";
let countValue = Date;
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let countdownActive;
let saveCountDown;
// setting the minimum date
const today = new Date().toISOString().split("T")[0];
console.log(today); //2023-10-10T13:12:40.637Z inorder to get rid of time we have to trim from 'T'
// so we use split method
dateElement.setAttribute("min", today); // min is atttribute for minimum date so that we can select future dates.

const updateDom = () => {
  countdownActive = setInterval(() => {
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
    //hide the input container
    inputContainer.hidden = true;
    //if countdown ended show complete
    if (distance < 0) {
      countDownElement.hidden = true;
      clearInterval(countdownActive);
      completeInfo.textContent = `${countTitle} has been completed on ${countDate}`;
      completeElement.hidden = false;
    } else {
      //countdown in progress
      countDownTitle.textContent = `${countTitle}`;
      timeElements[0].textContent = `${days}`;
      timeElements[1].textContent = `${hours}`;
      timeElements[2].textContent = `${minutes}`;
      timeElements[3].textContent = `${seconds}`;
      //show countdown
      countDownElement.hidden = false;
      completeElement.hidden = true;
    }
  }, second);
};

const updateCountDown = (e) => {
  e.preventDefault();
  countTitle = e.srcElement[0].value;
  countDate = e.srcElement[1].value;
  saveCountDown = {
    title: countTitle,
    date: countDate,
  };
  localStorage.setItem("count", JSON.stringify(saveCountDown));
  if (countDate === "" || countTitle === "") {
    alert("please select all inputs");
  } else {
    // getting the number version current date
    countValue = new Date(countDate).getTime();
    // console.log(countTitle, countDate, countValue);
    updateDom();
  }
};

const reset = () => {
  //hide countdown and show the input
  countDownElement.hidden = true;
  //after completion create a new countdown
  completeElement.hidden = true;
  inputContainer.hidden = false;
  clearInterval(countdownActive);
  countTitle = "";
  countDate = "";
};

const localStorageCounts = () => {
  if (localStorage.getItem("count")) {
    inputContainer.hidden = true;

    saveCountDown = JSON.parse(localStorage.getItem("count"));
    countTitle = saveCountDown.title;
    countDate = saveCountDown.date;
    countValue = new Date(countDate).getTime();
    updateDom();
  }
};

countdownForm.addEventListener("submit", updateCountDown);
countDownBtn.addEventListener("click", reset);
completeBtn.addEventListener("click", reset);
localStorageCounts();
