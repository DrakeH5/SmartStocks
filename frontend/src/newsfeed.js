import NewsPost from "./newsPost.js"
import React, { useEffect, useState } from "react"
import { renderMatches } from "react-router-dom"

function NewsFeed() {

    const [articles, setArticles] = useState([{}])

    useEffect(() => {
      fetch("/general").then(
        response => response.json()
      ).then(
        data => {
              setArticles(prevArticles => {
                return data
              })
      }
    )
  }, [])

    return(
        articles.map(news => {
            return <NewsPost key={news["id"]} summary={news["summary"]} title={news["headline"]} date={news["datetime"]} link={news["url"]} img={news["image"]} />
        })
  );
}

export default NewsFeed;
