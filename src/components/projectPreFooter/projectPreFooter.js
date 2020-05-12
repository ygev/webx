import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Pixelator from "../pixelator/pixelator"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"
import "./projectPreFooter.css"
import arrowLeft from "../../images/arrowLeft.svg"
import randomizerPixelBlack from "../../images/randomizer--pixel.svg"
import randomizerPixelTeal from "../../images/randomizer--teal--pixel.svg"
import Projects from "../../../data/students.json";
import Fade from 'react-reveal/Fade'

class PreFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            swapImgSrc: randomizerPixelBlack
        }
      }

    makeSwapperTeal(e) {
        this.setState({
            swapImgSrc: randomizerPixelTeal
        });
    }

    makeSwapperBlack(e) {
        this.setState({
            swapImgSrc: randomizerPixelBlack
        });

    }

    openRandomProject(){
        const randomStudent = Projects[Math.floor(Math.random() * Projects.length)]
        window.location.href = "/" + randomStudent.whatIsYourPreferredFirstName + randomStudent.whatIsYourPreferredLastName;
    }

    render() {
        return (
            <>
                <Layout rows={[2, 2, 2]}>
                <Fade delay={500} duration={500}>
                        <section className="projectPreFooter__back--wrapper">
                            <Link to="/">
                        <section className="projectPreFooter__back--wrapper">
                                <img src={arrowLeft} alt="Go Back to the Home Page" className="projectPreFooter__back"/>
                        </section>
                            </Link>
                        </section>
                </Fade>
                <Fade delay={800} duration={500}>
                        <section onMouseEnter={(e) => this.makeSwapperTeal(e)} 
                                 onMouseLeave={(e) => this.makeSwapperBlack(e)} 
                                 onClick={() => this.openRandomProject()}
                                 className="projectPreFooter__random--wrapper">
                            <h3 className="projectPreFooter__random--txt"><Pixelator content="Random Pixel" /></h3>
                            <div className="projectPreFooter__random--imgwrapper">
                                <img src={this.state.swapImgSrc} alt="" className="projectPreFooter__random--img"/>
                            </div>
                        </section>
                </Fade>
                </Layout>    
            </>
        )           
    } 
}

export default PreFooter;