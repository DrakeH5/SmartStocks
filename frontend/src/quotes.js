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
            <div>
                <Line data={data} />
            </div>
        );
    };
}
 
export default Quotes;
