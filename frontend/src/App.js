import './App.css';
import NewsFeed from "./newsfeed.js";
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';

function App() {
  document.body.style.backgroundImage = "linear-gradient(to bottom right, black, #413F42)"
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/news" element={<NewsFeed />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 