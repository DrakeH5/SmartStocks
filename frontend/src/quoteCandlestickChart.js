import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { scaleTime } from "d3-scale";
import MadeData from "./Data";
import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { utcMillisecond } from "d3-time";
import { fitWidth } from "react-stockcharts/lib/helper";
import { timeIntervalBarWidth } from "react-stockcharts/lib/utils";

let ChartJS = (props) => {
    const [articles, setArticles] = useState([{}])
    useEffect(() => {
        fetch("/candlestick", {
            method: 'post',
            headers: {'Content-Type':'application/json', "symbol":prompt("Symbol: ") }, 
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
    if(articles[0]["c"]){
        const { type, width, ratio } = props;
        var data = []
        for(var i=0; articles[0]["c"][i]; i++){
          var info = {
            date: new Date(Math.floor(articles[0]["t"][i] / 1000)),
            open: articles[0]["o"][i],
            high: articles[0]["h"][i],
            low: articles[0]["l"][i],
            close: articles[0]["c"][i],
            volume: articles[0]["v"][i],
          }
          data.push(info)
        }
        var data = data;
        console.log(data)
        const xAccessor = (d) => {
            return d.date;
        };
        return (
            <div className="ChartJS">
            <ChartCanvas
                height={400}
                ratio={ratio}
                width={width}
                margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
                type={type}
                data={data}
                seriesName="MSFT"
                xAccessor={xAccessor}
                xScale={scaleTime()}
                xExtents={[data[data.length-30].date, data[data.length-1].date]}
            >
                <Chart id={1} yExtents={(d) => [d.high, d.low]}>
                <XAxis axisAt="bottom" orient="bottom" ticks={6} />
                <YAxis axisAt="left" orient="left" ticks={5} />
                <CandlestickSeries width={timeIntervalBarWidth(utcMillisecond)} />
                </Chart>
            </ChartCanvas>
            </div>
        );
    }
};

ChartJS.prototype = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

ChartJS.defaultProps = {
  type: "svg",
};

ChartJS = fitWidth(ChartJS);

export default ChartJS;