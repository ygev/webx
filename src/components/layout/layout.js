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

    var sqArray = []
    for (var i = 0; i < numRows*numCols; i++) {
      sqArray.push(<div id="js-square" className="square"></div>);
    }
    return sqArray;
  }

  render() {
    return (
      <>
        <div id="js-rowContainer" className="row-container">
          {this.buildGrid(this.props.rows)}
        </div>
      </>
      );  
  }
}

export default Layout;