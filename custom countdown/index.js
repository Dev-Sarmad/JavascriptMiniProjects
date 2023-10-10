const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateElement = document.getElementById("date-picker");

// setting the minimum date
const today = new Date().toISOString().split("T")[0];
console.log(today); //2023-10-10T13:12:40.637Z inorder to get rid of time we have to trim from 'T'
// so we use split method
dateElement.setAttribute("min", today); // min is atttribute for minimum date so that we can select future dates.


const updateCountDown = (e) => {
    e.preventDefault();
    let countTitle = e.srcElement[0].value;
    let countDate = e.srcElement[1].value
    console.log(countTitle, countDate)
}
countdownForm.addEventListener("submit", updateCountDown)