import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectGallery.css"
import Fade from 'react-reveal/Fade';

function getModuleFromPath(email, number, extension) {
    return require("../../images/_sample-data/projects/" + email + "/ProjectFinalImages/final-" + number + "." + extension);
}

function getAllModules(email) {
    var modules = [];
    var number = 1;

    while (true) {
        try {
            modules.push(loadModule(email, number));
        } catch (e) {
            if (e.code == 'MODULE_NOT_FOUND') {
                // we're done. no more images to load.
                break;
            } else {
                // unexpected error! aaaaaaa
                throw e;
            }
        }
        number++;
    }

    return modules;
}


function loadModule(email, number) {
    try {
        return <img src={getModuleFromPath(email, number, "png")} alt="" className="projectGallery__item"/>;
    } catch (e) {
        if (e.code == 'MODULE_NOT_FOUND') {
            try {
                return <img src={getModuleFromPath(email, number, "jpg")} alt="" className="projectGallery__item"/>;
            } catch (e) {
                throw e;
            }
        } else {
            // unexpected error! aaaaaaa
            throw e;
        }
    }
}

export default props => (
    <>
          <section className="projectGallery">
                {getAllModules(props.email)}
          </section>
    </>
);  
