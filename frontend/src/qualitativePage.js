import NewsFeed from "./newsfeed.js";
import { Link, BrowserRouter,Routes, Route } from 'react-router-dom';

function QualitativePage() {
  const mainStyle = {
    position: "relative",
    top: "5.5em",
    backgroundColor: "grey"
  }
  const buttonStyle = {
    backgroundColor: "lightgreen"
  }
    return (
      <div>
        <div style={mainStyle}>
          <Link to="news"><button style={buttonStyle}>News</button></Link>
          <Link to="mediaSentiment"><button style={buttonStyle}>Media Sentiment</button></Link>
          <Link to="socialSentiment"><button style={buttonStyle}>Social Sentiment</button></Link>
          <Link to="currentLegislature"><button style={buttonStyle}>Current Legislature</button></Link>
        </div>
        <Routes>
          <Route path="/news" element={<NewsFeed />}></Route>
        </Routes>
      </div>
    );
  }
  
  export default QualitativePage;
   