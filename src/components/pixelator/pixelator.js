import React from "react"
import "../../css/global.css"
import "../../css/type.css"
import "./pixelator.css"
  
function pixelate(input) {
    var output = [];

    var splitStr = input.split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        output.push(<span class="pixelate">{splitStr[i][0]}</span>);
        output.push(<span>{splitStr[i].substring(1) + ' '}</span>);
    }
    console.log (output);
    return output; 
}

export default props => (
    <>
        {pixelate(props.content)}
    </>
)