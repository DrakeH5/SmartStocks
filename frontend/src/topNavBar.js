import {Link} from 'react-router-dom';


function TopNavBar() {
 const mainStyle = {
    width: "100%",
    backgroundColor: "#343231",
    paddingBottom: "1em",
    whiteSpace: "pre-line",
    marginBottom: "0.5em",
    marignColor: "white",
    position: "fixed",
    top: "0",
 }

 function alterColor1(){
  document.getElementById("quantitative").style.backgroundColor="lightgreen";
  document.getElementById("qualitative").style.backgroundColor="red";
  document.getElementById("recomendations").style.backgroundColor="red";
 }
 function alterColor2(){
  document.getElementById("quantitative").style.backgroundColor="red";
  document.getElementById("qualitative").style.backgroundColor="lightgreen";
  document.getElementById("recomendations").style.backgroundColor="red";
 }
 function alterColor3(){
  document.getElementById("quantitative").style.backgroundColor="red";
  document.getElementById("qualitative").style.backgroundColor="red";
  document.getElementById("recomendations").style.backgroundColor="lightgreen";
 }
  return (
    <div style={mainStyle}>
        <Link to="/news"  onClick={alterColor1}><center><img id="quantitative" src="./icons/quantitative.png" style={{backgroundColor: "red", display: "content", position: "relative", top: "0.5em"}}></img></center></Link>
        <Link to="/stockPrices"  onClick={alterColor2}><img id="qualitative" src="./icons/qualitative.png" style={{position: "absolute", left: "1.5em", top: "0.5em", backgroundColor: "red"}}></img></Link>
        <Link to="/recomendations"  onClick={alterColor3}><img id="recomendations" src="./icons/recomendation.png" style={{position: "absolute", right: "1.5em", top:"0.5em", backgroundColor: "red"}}></img></Link>
    </div>
  );
}

export default TopNavBar;
 