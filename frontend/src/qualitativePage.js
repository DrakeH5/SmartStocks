import NewsFeed from "./newsfeed.js";
import { NavLink, Routes, Route } from 'react-router-dom';
import "./subSectionChoiceCss.css";
import LobbyingFeed from "./lobbyingFeed.js";

function QualitativePage() {
  const mainStyle = {
    backgroundColor: "grey",
    position: "fixed",
    top: "5.2em",
    width: "100%",
    padding: "0.5em",
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
          <NavLink activeClassName="active" to="news"><button style={buttonStyle}>News</button></NavLink>
          <NavLink activeClassName="active" to="mediaSentiment"><button style={buttonStyle}>Media Sentiment</button></NavLink>
          <NavLink activeClassName="active" to="socialSentiment"><button style={buttonStyle}>Social Sentiment</button></NavLink>
          <NavLink activeClassName="active" to="currentLobbying"><button style={buttonStyle}>Current Lobbying</button></NavLink>
        </div>
        <Routes>
        <Route path="/news" element={<div style={{marginTop: "6.5em"}}><NewsFeed /></div>}></Route>
        <Route path="/currentLobbying" element={<div style={{marginTop: "6.5em"}}><LobbyingFeed /></div>}></Route>
        </Routes>
      </div>
    );
  }
  
  export default QualitativePage;
   