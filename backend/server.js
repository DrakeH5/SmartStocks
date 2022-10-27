"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.API_KEY;
const finnhubClient = new finnhub.DefaultApi();
const WebSocket = require('ws');
const socket = new WebSocket('wss://ws.finnhub.io?token=' + process.env.API_KEY);
const app = (0, express_1.default)();
const PORT = 3000;
// Handling GET / Request
app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!');
});
let generalData;
finnhubClient.marketNews("general", {}, (error, data, response) => {
    //res.send(data[0]["headline"] + "<br>" + data[0]["summary"])
    console.log(data);
    generalData = data;
});
app.get('/general', (req, res) => {
    res.send(generalData);
});
app.post('/lobbying', (req, res) => {
    var symbol = req.headers["symbol"];
    console.log(symbol);
    finnhubClient.stockLobbying(symbol, "2020-01-01", "2022-05-01", (error, data, response) => {
        res.send(data);
    });
});
app.get('/realtimeTrades', (req, res) => {
    // Connection opened -> Subscribe
    socket.addEventListener('open', function (event) {
        socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'AAPL' }));
        socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'BINANCE:BTCUSDT' }));
        socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'IC MARKETS:1' }));
    });
    // Listen for messages
    socket.addEventListener('message', function (event) {
        res.send(event.data);
    });
    // Unsubscribe
    var unsubscribe = function (symbol) {
        socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }));
    };
});
// Server setup
app.listen(PORT, () => {
    console.log('The application is listening '
        + 'on port http://localhost:' + PORT);
});
