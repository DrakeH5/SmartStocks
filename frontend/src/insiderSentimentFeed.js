import InsiderSentimentPost from "./insiderSentimentPost.js"
import React, { useEffect, useState } from "react"

function InsiderSentimentFeed() {

    const [articles, setArticles] = useState([{}])

    useEffect(() => {
        fetch("/insiderSentiment", {
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
                return <InsiderSentimentPost key={news["change"]} symbol={news["symbol"]} year={news["year"]} month={news["month"]} change={news["change"]} msrp={news["msrp"]} />
            })
        );
    }
} 

export default InsiderSentimentFeed;
 