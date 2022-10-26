import './App.css';
import NewsFeed from "./newsfeed.js"

function App() {
  document.body.style.backgroundImage = "linear-gradient(to bottom right, black, #413F42)"
  return (
    <div>
      <NewsFeed></NewsFeed>
    </div>
  );
}

export default App;
