export default class Cryptocurrency {  
  static getCrypto(currency) {
    return fetch(`https://api.coingecko.com/api/v3/coins/${currency}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })      
      .catch(function(error) {
        return error;
      });
  }
}