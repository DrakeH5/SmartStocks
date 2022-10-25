import express from 'express';

require("dotenv").config()

const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.API_KEY
const finnhubClient = new finnhub.DefaultApi()

const WebSocket = require('ws');
const socket = new WebSocket('wss://ws.finnhub.io?token='+process.env.API_KEY);


  
const app = express();
const PORT:Number=3000;
  
// Handling GET / Request
app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!');
}) 

app.get('/general', (req, res) => {
    finnhubClient.marketNews("general", {}, (error: any, data: any, response: any) => {
        //res.send(data[0]["headline"] + "<br>" + data[0]["summary"])
        res.json(data[0])
      });
}) 


app.get('/realtimeTrades', (req, res) => {
    // Connection opened -> Subscribe
    socket.addEventListener('open', function (event: any) {
        socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
        socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
        socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IC MARKETS:1'}))
    });

    // Listen for messages
    socket.addEventListener('message', function (event: { data: any; }) {
        res.send(event.data);
    });

    // Unsubscribe
    var unsubscribe = function(symbol: any) {
        socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
    }
}) 



  
// Server setup
app.listen(PORT,() => {
    console.log('The application is listening '
          + 'on port http://localhost:'+PORT);
})