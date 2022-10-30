import React from 'react';
function UsSpendingCases({link, recipeintName, country, totalValue, actionDate, performanceStartEndDates, awardingAgency,description, naicsCode}) {
  const style = {
    color: "lightgreen",
    textDecoration: "none",
  }

  return (
    <a href={link} target="_blank" style={style}>
      <div id="top">
        <h3>
            {recipeintName}
            <span style={{color: "red", padding: "2em"}}>{awardingAgency}</span>
        </h3>
      </div>
      <div id="mid">
            <h2><center>
                {totalValue}
                <br></br>
                {description}
            </center></h2>
      </div>
      <div id="bottom" style={{width: "100%", textAlign: "right", color: "#83EEFF"}}>
        <h5>
            <span style={{width: "100%", textAlign: "right"}}>{naicsCode}</span>
            {actionDate}<br></br>{performanceStartEndDates}
        </h5>
      </div>
    </a>
  );
}

export default UsSpendingCases;
