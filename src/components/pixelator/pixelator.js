import React from "react"
import "../../css/global.css"
import "../../css/type.css"
import "./pixelator.css"
  
function pixelate(props) {
    console.log("HERE I AM");
    console.log (props.children.content);
    var splitStr = props.content.split(' ');
    console.log (props.children.split(''));
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = " <span class='pixelate'>" + splitStr[i] + "</span>";     
    }
    return splitStr.join(' '); 
}

export default props => (
    <>
        {pixelate(props.content)}
        
    </>
)