import UsSpendingCases from "./usSpendingCases.js"
import React, { useEffect, useState } from "react"

function UsBudget() {

    const [articles, setArticles] = useState([{}])

    useEffect(() => {
        fetch("/usBudget", {
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
        var data = articles[0]["data"]
        return(
            data.map(cases => {
                return <UsSpendingCases link={cases["permalink"]} recipeintName={cases["recipientParentName"]+ "/" + cases["recipientName"]} country={cases["country"]} totalValue={cases["totalValue"]} actionDate={cases["actionDate"]} performanceStartEndDates={cases["performanceStartDate"] + "—" + cases["performanceEndDate"]} awardingAgency={cases["awardingAgencyName"] + "/" + cases["awardingSubAgencyName"] + "/" + cases["awardingOfficeName"]} description={cases["description"]} naicsCode={cases["naicsCode"]} key={cases["naicsCode"]} />
            })
        );
    }
}

export default UsBudget;
