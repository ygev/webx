import React from "react"
import Layout from "../layout/layout"
import Linkify from 'react-linkify';
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectContent.css"
import { Slide } from 'react-slideshow-image';


const properties = {
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
};

class ProjectContent extends React.Component {

    constructor(props) {
        super(props);

        this.summaryImages = this.getAllModules(props.email, "summary");
        this.processImages = this.getAllModules(props.email, "process");

        this.state = {
          projectTxt: props.projectTxt,
          projectImages: this.summaryImages
        };
      }

    // Toggle Between Summary and Process
    setSummary(e) {
        console.log("Setting Summary");
        this.setState({
          projectTxt: this.props.projectTxt,
          projectImages: this.summaryImages
        });
        document.getElementsByClassName("project__label--summary")[0].classList.remove("project__label--inactive"); // remove inactive style
        document.getElementsByClassName("project__label--process")[0].classList.add("project__label--inactive"); // add inactive style to other
    }

    setProcess(e) {
        console.log("Setting Process");
        this.setState({
            projectTxt: this.props.projectProcess,
            projectImages: this.processImages
        });
        document.getElementsByClassName("project__label--process")[0].classList.remove("project__label--inactive"); // remove inactive style
        document.getElementsByClassName("project__label--summary")[0].classList.add("project__label--inactive"); // add inactive style to other
    }

    // Image Sorting Functions
    getModuleFromPath(email, number, ext, summaryOrProcess) {
        if (summaryOrProcess==="summary") {
            console.log("../../images/_data/projects/" + email + "/ProjectFinalImages/final-" + number + "." + ext);
            return require("../../images/_data/projects/" + email + "/ProjectFinalImages/final-" + number + "." + ext);
        } else if (summaryOrProcess==="process") {
            return require("../../images/_data/projects/" + email + "/ProjectProcessImages/process-" + number + "." + ext);
        } else {
            throw "summaryOrProcess invalid value"
        }
    }

    getAllModules(email, summaryOrProcess) {
        var modules = [];
        var number = 1;

        while (true) {
            let extensions = ["png", "jpeg", "jpg", "gif", "mp4"]
            var mod = this.loadModule(email, number, extensions, summaryOrProcess);

            if (mod===null) {
                break;
            } else {
                modules.push(mod);
            }

            number++;
        }

        return modules;
    }

    loadModule(email, number, extensions, summaryOrProcess) {
        let ext = "";
        if (extensions.length===0) {
            return null;
        } else {
            ext = extensions.shift();
        }

        try {
            if (ext==='mp4'){
                return <div className="each-slide">
                        <video preload="yes" autoPlay="autoplay" loop muted playsInline className="each-slide__img" controls> <source src={this.getModuleFromPath(email, number, ext, summaryOrProcess)} type="video/mp4"/></video>
                    </div>;
            } else {
                return <div className="each-slide">
                        <img src={this.getModuleFromPath(email, number, ext, summaryOrProcess)} alt="" className="each-slide__img"/>
                    </div>;
            }
        } catch (e) {
            if (e.code==='MODULE_NOT_FOUND') {
                return this.loadModule(email, number, extensions, summaryOrProcess);
            } else {
                throw e;
            }
        }
    }

    render() {
        return <>
            <div className="projectContent--wrapper">
                <Slide {...properties}>
                    {this.state.projectImages}
                </Slide>
                <section className="project__text--wrapper">
                    <Layout rows={[1, 1, 1]}>
                        <h4 onClick={(e) => this.setSummary(e)} className="project__label project__label--summary project__label--active">Summary</h4>
                        <h4 onClick={(e) => this.setProcess(e)} className="project__label project__label--process project__label--inactive">Process</h4>
                    </Layout>
                    <div className="project__text--scroller">
                    <Linkify properties={{target: '_blank'}}><p className="project__text project__text--summary">{this.state.projectTxt}</p></Linkify>
                    </div>
                </section>
            </div>
        </>
    }
}

export default ProjectContent;
