import './App.css';
import QualitativePage from "./qualitativePage.js";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import TopNavBar from "./topNavBar.js";
import React from 'react';

function App() {
  document.body.style.backgroundImage = "linear-gradient(to bottom right, black, #413F42)"
  return (
    <div>
      <BrowserRouter>
        <TopNavBar></TopNavBar>
        <Routes>
          <Route exact path="/" element={<h1>HOME</h1>}></Route>
          <Route exact path="/qualitative/*" element={<QualitativePage />}></Route>
          <Route exact path="/quantitative/*" element={<h1>Quantitative</h1>}></Route>
          <Route exact path="/recomendations/*" element={<h1>Recs</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 