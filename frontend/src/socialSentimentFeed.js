import SocialSentimentPost from "./socialSentimentPost.js"
import React, { useEffect, useState } from "react"

function SocialSentimentFeed() {

    const [articles, setArticles] = useState([{}])

    useEffect(() => {
        fetch("/socialSentiment", {
            method: 'post',
            headers: {'Content-Type':'application/json', "symbol":prompt("Symbol: ")},
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
    console.log(posts)
    if(articles[0]["data"]){
        var posts = articles[0]["data"]
        
        return(
            posts.map(news => {
                return <SocialSentimentPost key={news["clientId"]} description={news["description"]} documentUrl={news["documentUrl"]} name={news["name"]} period={news["period"]} symbol={news["symbol"]} year={news["year"]} />
            })
        );
    }
}

export default SocialSentimentFeed;
