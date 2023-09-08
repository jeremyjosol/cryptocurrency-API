export default class Cryptocurrency { // class
  static async getCrypto(currency) { // 'statically' inherited method handling asynchronous code
    try { // 'try' processing asynchronous code in this block
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${currency}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`);
      const cryptoResponse = await response.json(); // declare 'awaiting' methods their own variables to easily assign later on
        
      if (!response.ok) { // if the response is not 200 or OK
        const errorMessage = `${response.status} ${response.statusText}`; // create a variable for an errorMessage with the third party's response
        throw new Error(errorMessage); // and 'throw' a new instance of an Error object into its parameter
      } 
      return cryptoResponse; // otherwise if the call is successful, return our 'awaited' .jsonified API call   
    
    } catch(error) { // catch any errors in this block
      return error; // if any errors are caught, return them
    }
  }   
}

// now we can call on Cryptocurrency.getCrypto(currency) as a function that processes asynchronous code