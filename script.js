

const newQuoteBtn = document.getElementById('new-quote');

newQuoteBtn.addEventListener('click', (e) =>{
  getQuotes();
});

function renderDomWithQuote(quoteData){
  // grab ui elements
  const quoteContainer = document.getElementById('quote-container');
  const quoteText = document.getElementById('quote');
  const authorText = document.getElementById('author');
  const twitterBtn = document.getElementById('twitter');

  if(quoteData.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }

  // update text on ui elements
  authorText.textContent = quoteData.author;
  quoteText.textContent = quoteData.text;
}

// get quotes from API
let apiQuotes = [];

// function show new quotes in the dom

function newQuote(){
  // pick a random quote from the response
  console.log('From Api')
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // pain the dom with data returned from api
  renderDomWithQuote(quote);
}

// fallback function that will get some quotes if api is down
function getLocalQuotes(){
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  // if the author is null, set it to unkwon
  if(!quote.author) {
    quote.author = 'Unknown';
  }
  // call a function that will paint the dom with data returned from api
  renderDomWithQuote(quote);
}

async function getQuotes(){
  const apiUrl = 'https://type.fit/api/quotes';

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch(error){
    // if error than fetch the quotes from local quotes
    if(error){
      console.log(`Unable to fetch quotes from api, switching to local quotes.`);
      console.log(error);
      getLocalQuotes();
    }
  }
}


getQuotes();


/*

- declare an empty array in global scope and call it apiQuotes
- declare an async function to fetch data from the api
  - declare api end point
  - initiate a try catch block
    - try
      - set a response variable with await keyword using fetch api and pass in the apiurl
      - use the global variable you declared 

*/