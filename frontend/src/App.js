import './App.css';
import NewsFeed from "./newsfeed.js"

function App() {
  document.body.style.backgroundImage = "linear-gradient(to bottom right, #413F42, #7F8487)"
  return (
    <div>
      <NewsFeed></NewsFeed>
    </div>
  );
}

export default App;
