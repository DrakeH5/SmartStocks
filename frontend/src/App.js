import './App.css';
import NewsFeed from "./newsfeed.js";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import TopNavBar from "./topNavBar.js";

function App() {
  document.body.style.backgroundImage = "linear-gradient(to bottom right, black, #413F42)"
  return (
    <div>
      <BrowserRouter>
        <TopNavBar></TopNavBar>
        <Routes>
          <Route exact path="/" element={<h1>HOME</h1>}></Route>
          <Route exact path="/news" element={<NewsFeed />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 