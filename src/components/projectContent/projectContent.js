import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectContent.css"
import Fade from 'react-reveal/Fade';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    "https://via.placeholder.com/1500/11EDD3/000.png",
    "https://via.placeholder.com/1500x1200/11EDD3/000.png",
    "https://via.placeholder.com/1200x1500/11EDD3/000.png"
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
};

class ProjectContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          projectTxt: props.projectTxt
        };
      }

    setSummary(e) {
        console.log("Setting Summary");
        this.setState({
          projectTxt: this.props.projectTxt
        });
        document.getElementsByClassName("project__label--summary")[0].classList.remove("project__label--inactive"); // remove inactive style
        document.getElementsByClassName("project__label--process")[0].classList.add("project__label--inactive"); // add inactive style to other
    }

    setProcess(e) {
        console.log("Setting Process");
        this.setState({
            projectTxt: this.props.projectProcess
        });
        document.getElementsByClassName("project__label--process")[0].classList.remove("project__label--inactive"); // remove inactive style
        document.getElementsByClassName("project__label--summary")[0].classList.add("project__label--inactive"); // add inactive style to other
    }

    render() {
        return <>
            <div className="projectContent--wrapper">
                <Slide {...properties}>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[0]})`}}></div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}></div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}></div>
                    </div>
                </Slide>
                <section className="project__text--wrapper">
                    <Layout rows={[1, 1, 1]}>
                        <h4 onClick={(e) => this.setSummary(e)} className="project__label project__label--summary project__label--active">Summary</h4>
                        <h4 onClick={(e) => this.setProcess(e)} className="project__label project__label--process project__label--inactive">Process</h4>
                    </Layout>
                    <div className="project__text--scroller">
                        <p className="project__text project__text--summary">{this.state.projectTxt}</p>
                    </div>
                </section>
            </div>
        </>
    }
}

export default ProjectContent;


