function NewsPost({summary, title, date, link}) {
  const style = {
    //backgroundColor: "#16003B",
    backgroundColor: "#413F42",
    color: "lightgreen",
    margin: "0.75em",
    padding: "1em",
    borderRadius: "15px 50px 30px",
  }
  const dateStyle = {
    color: "red",
    textAlign: "right",
    margin: "1em"
  }
  var time = new Date(date*1000)
  time = time.toLocaleString()
  return (
    <a href={link} target="_blank" style={{textDecoration: "none"}}>
      <div style={style}>
        <p style={dateStyle}>{time}</p>
        <h2>{title}</h2>
        <p style={{color: "#83EEFF"}}>{summary}</p>
      </div>
    </a>
  );
}

export default NewsPost;
