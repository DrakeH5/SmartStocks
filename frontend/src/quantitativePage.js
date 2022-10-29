import NewsFeed from "./newsfeed.js";
import { NavLink, Routes, Route } from 'react-router-dom';
import "./subSectionChoiceCss.css";
import React from 'react';

function QualitativePage() {
  const mainStyle = {
    backgroundColor: "grey",
    position: "fixed",
    top: "5.2em",
    width: "100%",
    padding: "0.5em",
    height: "3em"
  }
  const buttonStyle = {
    border: "2px solid black",
    borderRadius: "5px",
    backgroundColor: "rgba(0,0,0,0.1)",
    color: "lightgreen",
    fontSize: "16px",
    cursor: "pointer",
    borderColor: "#04AA6D",
    margin: "0.1em"
   
  }
    return (
      <div>
        <div style={mainStyle}>
          <NavLink activeClassName="active" to="quotes"><button style={buttonStyle}>Quotes</button></NavLink>
          <NavLink activeClassName="active" to="compInfo"><button style={buttonStyle}>Company Info</button></NavLink>
          <NavLink activeClassName="active" to="govBudget"><button style={buttonStyle}>USA Government Budget</button></NavLink>        </div>
        <Routes>
            <Route path="/quotes" element={<div style={{marginTop: "9.2em"}}></div>}></Route>
            <Route path="/compInfo" element={<div style={{marginTop: "9.2em"}}></div>}></Route>
            <Route path="/govBudget" element={<div style={{marginTop: "9.2em"}}></div>}></Route> 
        </Routes>
      </div>
    );
  }
  
  export default QualitativePage;
   