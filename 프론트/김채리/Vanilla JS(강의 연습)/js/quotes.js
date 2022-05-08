const quotes = [
  {
    quote: "Hiii",
    author: "Walt Disney",
  },
  {
    quote: "22",
    author: "Walt Disney",
  },
  {
    quote: "333",
    author: "Walt Disney",
  },
  {
    quote: "444",
    author: "Walt Disney",
  },
  {
    quote: "555",
    author: "Walt Disney",
  },
  {
    quote: "666",
    author: "Walt Disney",
  },
  {
    quote: "777",
    author: "Walt Disney",
  },
  {
    quote: "888",
    author: "Walt Disney",
  },
  {
    quote: "999",
    author: "Walt Disney",
  },
  {
    quote: "101010",
    author: "Walt Disney",
  },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuotes.quote
author.innerText = todaysQuotes.author