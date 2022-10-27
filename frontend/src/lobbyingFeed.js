import LobbyingPost from "./lobbyingPost.js"
import React, { useEffect, useState } from "react"

function LobbyingFeed() {

    var reqOptions = {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
             "symbol": "APPL"
        })
    }

    const [articles, setArticles] = useState([{}])

    useEffect(() => {
        fetch("/lobbying", {
            method: 'post',
            headers: {'Content-Type':'application/json', "symbol":"AAPL"},
        }).then(
          response => response.json()
        ).then(
          data => {
                setArticles(prevArticles => {
                  return [data]
                })
        }
      )
    }, [])
    console.log(articles)
    if(articles[0]["data"]){
        var posts = articles[0]["data"]
    
    return(
        posts.map(news => {
            return <LobbyingPost key={news["clientId"]} description={news["description"]} documentUrl={news["documentUrl"]} name={news["name"]} period={news["period"]} symbol={news["symbol"]} year={news["year"]} />
        })
  );
    }
}

export default LobbyingFeed;
