import NewsFeed from "./newsfeed.js";
import { NavLink, Routes, Route } from 'react-router-dom';
import "./subSectionChoiceCss.css";

function QualitativePage() {
  const mainStyle = {
    backgroundColor: "grey",
    position: "fixed",
    top: "5.2em",
    width: "100%",
    padding: "0.5em",
  }
  const buttonStyle = {
   opacity: "0.5"
  }
    return (
      <div>
        <div style={mainStyle}>
          <NavLink activeClassName="active" to="news"><button style={buttonStyle}>News</button></NavLink>
          <NavLink activeClassName="active" to="mediaSentiment"><button style={buttonStyle}>Media Sentiment</button></NavLink>
          <NavLink activeClassName="active" to="socialSentiment"><button style={buttonStyle}>Social Sentiment</button></NavLink>
          <NavLink activeClassName="active" to="currentLegislature"><button style={buttonStyle}>Current Legislature</button></NavLink>
        </div>
        <Routes>
          <Route path="/news" element={<NewsFeed />}></Route>
        </Routes>
      </div>
    );
  }
  
  export default QualitativePage;
   