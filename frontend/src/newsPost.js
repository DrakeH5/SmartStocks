function NewsPost({summary, title, date, link}) {
  const style = {
    backgroundColor: "#16003B",
    color: "#F73D93",
    margin: "5em",
    padding: "2em",
    borderRadius: "15px 50px 30px",
    background: "#16003B",
  }
  const dateStyle = {
    color: "#83EEFF",
    textAlign: "right",
  }
  var time = new Date(date*1000)
  time = time.toLocaleString()
  return (
    <a href={link} target="_blank" style={{textDecoration: "none"}}>
      <div style={style}>
        <p style={dateStyle}>{time}</p>
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
    </a>
  );
}

export default NewsPost;
