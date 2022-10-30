import React, { useEffect, useState } from "react"
import { Line } from "react-chartjs-2";

function CompanyProfile() {

    const [articles, setArticles] = useState([{}])

    useEffect(() => {
        fetch("/companyProfile", {
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

    

    if(articles[0]["name"]){

        var profile = articles[0]


        return(
            <div style={{color: "white"}}>
                
                <div id="topLayer">
                    <h2>{profile["ticker"]}
                    <span style={{position: "absolute", right: "0"}}><img src={profile["logo"]} /></span></h2>
                    <center>
                        <h1>{profile["name"]}</h1>
                        <h4>{profile["finnhubIndustry"]}</h4>
                    </center>
                </div>
                <div id="secondLayer" style={{color: "#83EEFF"}}>
                    <h5>Country: {profile["country"]}
                    <span style={{position: "absolute", right: "0"}}>Market Capitalization: {profile["marketCapitalization"]}</span></h5>
                </div>
                <div id="thirdLayer">
                    <h6 style={{color: "#83EEFF"}}>IPO: {profile["ipo"]}
                    <span style={{position: "absolute", right: "0"}}># of Outstanding Shares: {profile["shareOutstanding"]}</span></h6>
                    <center><h4 style={{color: "red"}}>Currency: {profile["currency"]} <span style={{paddingLeft: "1em", color: "lightgreen"}}>Exchange: {profile["exchange"]}</span></h4></center>
                </div>
                <div id="finaleLayer">
                    <center>
                    <h4 style={{color: "red"}}>Phone: {profile["phone"]} <a href={profile["weburl"]} target="_blank" style={{paddingLeft: "1em", color: "lightgreen"}}>{profile["weburl"]}</a></h4>
                    </center>
                </div>

            </div>
        );
    };
}
 
export default CompanyProfile;
