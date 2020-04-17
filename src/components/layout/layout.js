import React from "react"
import "../../css/global.css"
import "../../css/type.css"
import "./layout.css"


// By default 4.
// If 768 and above, 8
// If 1024 and above, 12.

function buildGrid(numRows) {
  var numCols;
  if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
    numCols = 8;
  } else if (window.matchMedia("(min-width: 1024px)").matches) {
    numCols = 12
  } else {
    numCols = 4;
  }

  console.log(numCols);
  var sqArray = []
  for (var i = 0; i < numRows*numCols; i++) {
    sqArray.push(<div id="js-square" className="square"></div>);
  }
  return sqArray;

}


export default props => (
  <>
    <div id="js-rowContainer" className="row-container">
      {buildGrid(3)}
    </div>
  </>
);  
