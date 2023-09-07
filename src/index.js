import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Cryptocurrency from './crypto.js'

function getCrypto(currency) {
  Cryptocurrency.getCrypto(currency)
    .then(function(response) {
      if (response) {
        outputCrypto(response);
      } else {
        outputError(response);
      }
    });
}

// UI Logic

function outputCrypto(response) {
  document.querySelector('#showImage').innerHTML = 
  `<h2 class="name">${response.name} <img src=${response.image.thumb}></h2>`

  document.querySelector('#showUSD').innerHTML = 
  `<h2 class="USD">USD: $${response.market_data.current_price.usd} <br />` 
  
  document.querySelector('#showResponse').innerHTML = 
  `<span class="description">${response.description.en}</span> <br /> <br /> <h2>Current Market Data Price:</h2>`;
  
  const currentPrice = Object.keys(response.market_data.current_price);
  
  for (let i = 0; i < currentPrice.length; i ++) {
    const cryptoCurrency = currentPrice[i];
    const price = response.market_data.current_price[cryptoCurrency];
   
    document.querySelector('#showResponse').innerHTML += `<span class="price">${cryptoCurrency.toUpperCase()}: ${price}</span> <br />`
  }
}

function outputError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#crypto').value;
  document.querySelector('#crypto').value = null;
  getCrypto(currency);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});