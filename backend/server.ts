import express from 'express';

require("dotenv").config()

const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.API_KEY
const finnhubClient = new finnhub.DefaultApi()

  
const app = express();
const PORT:Number=3000;
  
// Handling GET / Request
app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!');
}) 

app.get('/general', (req, res) => {
    finnhubClient.marketNews("general", {}, (error: any, data: any, response: any) => {
        res.send(data)
      });
}) 
  
// Server setup
app.listen(PORT,() => {
    console.log('The application is listening '
          + 'on port http://localhost:'+PORT);
})