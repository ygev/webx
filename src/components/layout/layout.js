import React from "react"
import "../../css/global.css"
import "../../css/type.css"
import "./layout.css"
import Zoom from 'react-reveal/Zoom';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    
    this.mediaQueryState = {
      mobile: true,
      tablet: false,
      desktop: false
    };

    if (typeof window !== `undefined`) {
      
      this.mobile = window.matchMedia("(max-width: 767px");
      this.tablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
      this.desktop = window.matchMedia("(min-width: 1024px)");
      
      this.mobile.addListener((e) => { this.mediaQueryState.mobile = e.matches; this.forceUpdate(); });
      this.tablet.addListener((e) => { this.mediaQueryState.tablet = e.matches; this.forceUpdate(); });
      this.desktop.addListener((e) => { this.mediaQueryState.desktop = e.matches; this.forceUpdate(); });
    }
  }

  buildGrid(rowArray) {
    var numCols;
    var numRows;
    if (typeof window !== `undefined` && this.mobile.matches) {
      numCols = 4;
      numRows = rowArray[0];
    } else if (typeof window !== `undefined` && this.tablet.matches) {
      numCols = 8
      numRows = rowArray[1];
    } else if (typeof window !== `undefined` && this.desktop.matches) {
      numCols = 12;
      numRows = rowArray[2];
    } else {
      numCols = 0;
      numRows = 0;
    }

    var sqArray = []
    for (var i = 1; i < numRows+1; i++) {
      for (var j = 1; j < numCols+1; j++) {
        //console.log("Building grid item (numRows:"+numRows+",numCols:"+numCols+";i:"+i+",j:"+j+")")
        sqArray.push(<Zoom duration={500} top cascade><div id="js-square" className="square" style={{gridArea: i + "/" + j + "/span 1/span 1"}}></div></Zoom>);
      }
    }
    return sqArray;
  }

  buildChildren(children) {
    if (typeof window !== `undefined` ) {
      return children;
    }
  }

  render() {
    return (
      <>
        <div id="js-rowContainer" className="row-container">
          {this.buildGrid(this.props.rows)}
          {this.buildChildren(this.props.children)}
        </div>
      </>
      );
  }
}

export default Layout;