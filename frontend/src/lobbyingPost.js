function LobbyingPost({description,documentUrl,name,period,symbol,year}) {
    const style = {
      //backgroundColor: "#16003B",
      backgroundColor: "#413F42",
      color: "lightgreen",
      margin: "0.75em",
      padding: "1em",
      borderRadius: "15px 50px 30px",
    }
    const rightStyle = {
        position: "absolute",
        right: "2em",
    }
    const h3Style = {
        color: "red"
    }
    return (
      <a href={documentUrl} target="_blank" style={{textDecoration: "none"}}>
        <div style={style}>
        <div id="rightHand" style={rightStyle}>
            <h2>{symbol}</h2>
            <h3 style={h3Style}>{period}</h3>
          </div>
          <div id="leftHand">
            <h2>{name}</h2>
            <h3 style={h3Style}>{year}</h3>
          </div>
        </div>
      </a>
    );
  }
  
  export default LobbyingPost;
