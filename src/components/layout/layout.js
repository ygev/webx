import React from "react"
import "../../css/global.css"
import "../../css/type.css"
import "./layout.css"

class Layout extends React.Component {
  constructor(props) {
    super(props);
    
    this.mediaQueryState = {
      mobile: true,
      tablet: false,
      desktop: false
    };

    this.mobile = window.matchMedia("(max-width: 767px");
    this.tablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
    this.desktop = window.matchMedia("(min-width: 1024px)");
    
    this.mobile.addListener((e) => { this.mediaQueryState.mobile = e.matches; this.forceUpdate(); });
    this.tablet.addListener((e) => { this.mediaQueryState.tablet = e.matches; this.forceUpdate(); });
    this.desktop.addListener((e) => { this.mediaQueryState.desktop = e.matches; this.forceUpdate(); });
  }

  buildGrid(numRows) {
    var numCols;
    if (this.tablet.matches) {
      numCols = 8;
    } else if (this.desktop.matches) {
      numCols = 12
    } else {
      numCols = 4;
    }

    numRows = Number(numRows);

    var sqArray = []
    for (var i = 1; i < numRows+1; i++) {
      for (var j = 1; j < numCols+1; j++) {
        sqArray.push(<div id="js-square" className="square" style={{gridArea: i + "/" + j + "/span 1/span 1"}}></div>);
      }
    }
    return sqArray;
  }

  render() {
    return (
      <>
        <div id="js-rowContainer" className="row-container">
          {this.props.children}
          {this.buildGrid(this.props.rows)}
        </div>
      </>
      );  
  }
}

export default Layout;