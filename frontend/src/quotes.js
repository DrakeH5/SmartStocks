import React, { useEffect, useState } from "react"
import { Line } from "react-chartjs-2";

function Quotes() {

    const [articles, setArticles] = useState([{}])

    useEffect(() => {
        fetch("/quote", {
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

    

    if(articles[0]["c"]){

        var quote = articles[0]

        var oldValue = quote["c"]-quote["d"]

        if(oldValue - quote["c"] > 0){
            var color = "red"
        } else {
            var color = "green"
        }

        const data = {
          labels: ["Old Price", "Current Price"],
          datasets: [
            {
              label: "Change",
              backgroundColor: "white",
              borderColor: color,
              data: [oldValue, quote["c"]],
            },
          ],
        };

        return(
            <div style={{color: color}}>
                <center>
                    <h1>{quote["c"]}</h1>
                    <h3>
                        <div id="change">
                            Change: {quote["d"]}
                            <br></br>
                            Percent Change: {quote["dp"]}%
                        </div>
                        <div id="high/low">
                            <font color="lightgreen">High: {quote["h"]}</font>

                            <font color="red" style={{paddingLeft: "2em"}}>Low: {quote["l"]}</font>
                        </div>
                        <div id="change" style={{color: "lightgrey"}}>
                            Previous Close: {quote["pc"]}
                            <span style={{paddingLeft: "2em"}}>Open: {quote["o"]}</span>
                        </div>
                    </h3>
                </center>
                <Line data={data} />
            </div>
        );
    };
}
 
export default Quotes;
