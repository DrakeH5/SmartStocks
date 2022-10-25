async function NewsFeed() {

        await fetch("/general")
        .then((response) => response.json())
        .then((json) => {
          var news = json["summary"];
          console.log(news)
        });
  
    return(
        <h1>NEWS</h1>
    )
}

export default NewsFeed;
