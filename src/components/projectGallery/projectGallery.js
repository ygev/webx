import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectGallery.css"
import Fade from 'react-reveal/Fade';

class ProjectGallery extends React.Component {
    componentDidMount() {
        this.initMarquee();
    }

    getModuleFromPath(email, number, ext) {
        return require("../../images/_sample-data/projects/" + email + "/ProjectFinalImages/final-" + number + "." + ext);
    }

    getAllModules(email) {
        var modules = [];
        var number = 1;

        while (true) {
            let extensions = ["png", "jpeg", "jpg", "gif", "mp4"]
            var mod = this.loadModule(email, number, extensions);

            if (mod == null) {
                break;
            } else {
                modules.push(mod);
            }

            number++;
        }

        return modules;
    }


    loadModule(email, number, extensions) {
        let ext = "";
        if (extensions.length == 0) {
            return null;
        } else {
            ext = extensions.shift();
        }

        try {
            if (ext == 'mp4'){
                return <video preload="yes" autoPlay="autoplay" loop muted playsInline className="projectGallery__item" controls> <source src={this.getModuleFromPath(email, number, ext)} type="video/mp4"/></video>;
            } else {
                return <img src={this.getModuleFromPath(email, number, ext)} alt="" className="projectGallery__item"/>;
            }
        } catch (e) {
            if (e.code == 'MODULE_NOT_FOUND') {
                return this.loadModule(email, number, extensions);
            } else {
                throw e;
            }
        }
    }

    initMarquee() {
        if (typeof window !== `undefined`) {
            function updateMarquee() {
                var gallery = document.getElementsByClassName("projectGallery")[0];
                if (!window.scrollMarquee) {
                    gallery.scrollLeft += 1;
                }
                setTimeout(updateMarquee, 10);
            }

            updateMarquee();
        }
    }
    
    stopScroll() {
        if (typeof window !== `undefined`) {
            window.scrollMarquee = false;
        }
    }

    continueScroll() {
        if (typeof window !== `undefined`) {
            window.scrollMarquee = true;
        }
    }

    render() {
        return <>
              <section onMouseEnter={() => this.continueScroll()}
                       onMouseLeave={() => this.stopScroll()}
                       className="projectGallery">
                    {this.getAllModules(this.props.email)}
              </section>
        </>
    }
}

export default ProjectGallery;
