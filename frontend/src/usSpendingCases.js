import React from 'react';
function UsSpendingCases({link, recipeintName, country, totalValue, actionDate, performanceStartEndDates, awardingAgency,description, naicsCode}) {
  const style = {
    //backgroundColor: "#16003B",
    backgroundColor: "#413F42",
    color: "lightgreen",
    margin: "0.75em",
    padding: "1em",
    borderRadius: "15px 50px 30px",
    textDecoration: "none",
  }
  const dateStyle = {
    color: "red",
    textAlign: "right",
    margin: "1em"
  }

  return (
    <a href={link} target="_blank" style={style}>
      <div id="top">
        <h3>
            {recipeintName}
            <span style={{width: "100%", textAlign: "right", color: "red"}}>{awardingAgency}</span>
        </h3>
      </div>
      <div id="mid">
            <h4><center>
                {totalValue}
                {description}
            </center></h4>
      </div>
      <div id="bottom">
        <h5>
            <span style={{width: "100%", textAlign: "right"}}>{naicsCode}</span>
            {actionDate}<br></br>{performanceStartEndDates}
        </h5>
      </div>
    </a>
  );
}

export default UsSpendingCases;
