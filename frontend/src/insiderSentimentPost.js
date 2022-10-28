function InsiderSentimentPost({symbol, year, month, change, msrp}) {
    const style = {
      //backgroundColor: "#16003B",
      backgroundColor: "#413F42",
      color: "lightgreen",
      margin: "0.75em",
      padding: "1em",
      borderRadius: "15px 50px 30px",
      minHeight: "2em",
    }

var changeColor = "white"
    if(change<0){
        changeColor = "red"
    } else if(change>0){
        changeColor = "lightgreen"
    }
    return (
        <div style={style}>
            <div id="top">
                <h2>
                    <div style={{position: "absolute", right: "1em"}}>{year}/{month}</div>
                    {symbol}
                </h2>
            </div>
            <div id="mainInfo">
                <h1 style={{color: changeColor}}><center>
                    {change}
                    <br></br>
                    {msrp}
                </center></h1>
            </div>
        </div>
    );
  }
  
  export default InsiderSentimentPost;