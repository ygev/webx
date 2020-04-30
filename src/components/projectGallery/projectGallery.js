import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectGallery.css"
import Fade from 'react-reveal/Fade';

function getModuleFromPath(email, number, ext) {
    return require("../../images/_sample-data/projects/" + email + "/ProjectFinalImages/final-" + number + "." + ext);
}

function getAllModules(email) {
    var modules = [];
    var number = 1;

    while (true) {
        let extensions = ["png", "jpeg", "jpg", "gif", "mp4"]
        var mod = loadModule(email, number, extensions);

        if (mod == null) {
            break;
        } else {
            modules.push(mod);
        }

        number++;
    }

    return modules;
}


function loadModule(email, number, extensions) {
    let ext = "";
	if (extensions.length == 0) { 
        return null;
    } else {
        ext = extensions.shift();
    }

    try {
        if (ext == 'mp4'){
            return <video width="320" height="240" controls> <source src={getModuleFromPath(email, number, ext)} type="video/mp4"/></video>;
        } else {
            return <img src={getModuleFromPath(email, number, ext)} alt="" className="projectGallery__item"/>;
        }
    } catch (e) {
        if (e.code == 'MODULE_NOT_FOUND') {
            return loadModule(email, number, extensions);
        } else {
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
