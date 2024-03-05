const axios = require('axios');
const API_KEY = 'CG-41HQVECwAcMsoaAzqXo5ycrZ'; // Replace with your actual API key
const options = {

    method: 'GET',
    url: `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`,
    headers: {

        'X-CoinGecko-Token': API_KEY

    }

};
axios(options)
    .then(response => {
        const ethPrice = response.data.ethereum.usd;
        console.log(`Current ETH price in USD: ${ethPrice}`);
    })
    .catch(error => {
       console.error(error);
    });
