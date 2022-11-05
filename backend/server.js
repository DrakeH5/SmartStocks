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
    var date = new Date();
    var fromDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    var toDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    finnhubClient.stockLobbying(symbol, fromDate, toDate, (error, data, response) => {
        res.send(data);
    });
});
app.post('/socialSentiment', (req, res) => {
    var symbol = req.headers["symbol"];
    console.log(symbol);
    finnhubClient.socialSentiment(symbol, (error, data, response) => {
        res.send(data);
    });
});
app.post('/insiderSentiment', (req, res) => {
    var symbol = req.headers["symbol"];
    console.log(symbol);
    var date = new Date();
    var fromDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    var toDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    var symbol = req.headers["symbol"];
    console.log(symbol);
    finnhubClient.insiderSentiment(symbol, fromDate, toDate, (error, data, response) => {
        res.send(data);
    });
});
app.post('/quote', (req, res) => {
    var symbol = req.headers["symbol"];
    console.log(symbol);
    finnhubClient.quote(symbol, (error, data, response) => {
        res.send(data);
    });
});
app.post('/companyProfile', (req, res) => {
    var symbol = req.headers["symbol"];
    console.log(symbol);
    finnhubClient.companyProfile2({ 'symbol': symbol }, (error, data, response) => {
        res.send(data);
    });
});
app.post('/usBudget', (req, res) => {
    var symbol = req.headers["symbol"];
    console.log(symbol);
    var date = new Date();
    var fromDate = (date.getFullYear() - 1) + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    var toDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    console.log(symbol);
    finnhubClient.stockUsaSpending(symbol, fromDate, toDate, (error, data, response) => {
        res.send(data);
    });
});
app.post('/candlestick', (req, res) => {
    var symbol = req.headers["symbol"];
    console.log(symbol);
    finnhubClient.stockCandles(symbol, "D", Math.floor(Date.now() / 1000) - 7889400000, Math.floor(Date.now() / 1000), (error, data, response) => {
        res.send(data);
    });
});
// Server setup
app.listen(PORT, () => {
    console.log('The application is listening '
        + 'on port http://localhost:' + PORT);
});
