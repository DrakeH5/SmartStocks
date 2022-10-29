import React, { useEffect, useState } from "react"
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

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
  

    if(articles[0]["data"]){
        var posts = articles[0]["data"]

        var labels = []
        var values = []
        var msprs = []

        posts.map(news => {
          labels.push(news["year"]+"/"+news["month"])
          values.push(news["change"])
          msprs.push(news["mspr"])
        })

        const data = {
          labels: labels,
          datasets: [
            {
              label: "Changes",
              backgroundColor: "red",
              borderColor: "green",
              data: values,
            },
          ],
        };

        const msprData = {
          labels: labels,
          datasets: [
            {
              label: "MSPRs",
              backgroundColor: "green",
              borderColor: "red",
              data: msprs,
            },
          ],
        };
        

        
        return(
          <div style={{backgroundColor: "#413F42"}}>
            <Line data={data}/>
            <Line data={msprData}/>
          </div>
        );
    }
} 

export default InsiderSentimentFeed;
 