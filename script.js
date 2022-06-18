// get quotes from API
let apiQuotes = [];

// function show new quotes in the dom

function newQuote(){
  // pick a random quote from the response
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

function getLocalQuotes(){
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  if(quote.author === null) {
    quote.author = 'Unknown';
  }
  console.log(quote);
}

async function getQuotes(){
  const apiUrl = 'https://twweype.fit/api/quotes';

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