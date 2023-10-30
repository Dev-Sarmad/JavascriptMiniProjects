const quote = document.getElementById("quote");
const quoteAuthor = document.getElementById("quote-author");
const button = document.querySelector("button");

const getQuote = async () => {
  const response = await fetch("https://api.quotable.io/quotes/random");
  var data = await response.json();
  console.log(data[0]);
  quote.textContent = data[0].content;
  quoteAuthor.textContent = data[0].author;
};

getQuote();

button.addEventListener("click", getQuote);
