const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Binance API endpoint for getting ticker price
const binanceApiUrl = 'https://api.binance.com/api/v3/ticker/price';

// Replace 'YOUR_API_KEY' with your Binance API key
const apiKey = 'YOUR_API_KEY';

app.get('/cryptoPrice', async (req, res) => {
  try {
    // Replace 'BTCUSDT' with the symbol of the cryptocurrency you want to track
    const symbol = 'BTCUSDT';
    
    const response = await axios.get(binanceApiUrl, {
      params: {
        symbol: symbol,
        apiKey: apiKey,
      },
    });

    const cryptoPrice = response.data.price;

    res.json({ cryptoPrice: cryptoPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Crypto Price Tracker API is listening at http://localhost:${port}`);
});
