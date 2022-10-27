import {Link} from 'react-router-dom';


function TopNavBar() {
 const mainStyle = {
    width: "100%",
    backgroundColor: "#413F42",
    paddingBottom: "1em",
    whiteSpace: "pre-line",
    marginBottom: "0.5em",
    marignColor: "white",
 }

 function alterColor1(){
  document.getElementById("quantitative").style.backgroundColor="lightgreen";
  document.getElementById("qualitative").style.backgroundColor="grey";
  document.getElementById("recomendations").style.backgroundColor="grey";
 }
 function alterColor2(){
  document.getElementById("quantitative").style.backgroundColor="grey";
  document.getElementById("qualitative").style.backgroundColor="lightgreen";
  document.getElementById("recomendations").style.backgroundColor="grey";
 }
 function alterColor3(){
  document.getElementById("quantitative").style.backgroundColor="grey";
  document.getElementById("qualitative").style.backgroundColor="grey";
  document.getElementById("recomendations").style.backgroundColor="lightgreen";
 }
  return (
    <div style={mainStyle}>
        <Link to="/news"  onClick={alterColor1}><center><img id="quantitative" src="./icons/quantitative.png" style={{backgroundColor: "grey", display: "content"}}></img></center></Link>
        <Link to="/stockPrices"  onClick={alterColor2}><img id="qualitative" src="./icons/qualitative.png" style={{position: "absolute", left: "0", top: "0", backgroundColor: "grey"}}></img></Link>
        <Link to="/recomendations"  onClick={alterColor3}><img id="recomendations" src="./icons/recomendation.png" style={{position: "absolute", right: "0", top:"0", backgroundColor: "grey"}}></img></Link>
    </div>
  );
}

export default TopNavBar;
 