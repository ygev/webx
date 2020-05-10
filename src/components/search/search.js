import React from "react";
import { Link } from "gatsby";
import Pixelator from "../pixelator/pixelator";
import "../../css/global.css";
import "../../css/reset.css";
import "../../css/type.css";
import "./search.css";
import Fade from "react-reveal/Fade";
import randomize from "../../images/randomize.svg";
import randomizeBlack from "../../images/randomize--black.svg";
import profilePlaceholder from "../../images/_data/profiles/profile--placeholder.svg";
import arrowRightTeal from "../../images/arrowRight--teal.svg";
import Projects from "../../../data/students.json";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.initialLetterState = {};

        this.isDown = false;

        this.state = {
            linkProject: props.linkProject,
            studentName: props.studentName,
            projectName: props.projectName,
            profilePicture: props.profilePicture,
        };
    }

    getModuleFromPath(email, filename, ext) {
        return require("../../images/_data/projects/" + email + filename + "." + ext);
    }

    getPicture(email, filename) {
        let extensions = ["png", "jpeg", "jpg", "gif", "mp4"]
        return this.loadModule(email, filename, extensions);
    }

    loadModule(email, filename, extensions) {
        let ext = "";
        if (extensions.length == 0) {
            return require("../../images/error.jpg");
        } else {
            ext = extensions.shift();
        }

        try {
            return this.getModuleFromPath(email, filename, ext);
        } catch (e) {
            if (e.code == 'MODULE_NOT_FOUND') {
                return this.loadModule(email, filename, extensions);
            } else {
                throw e;
            }
        }
    }
  
    sliderMouseDown(e) {
        if (typeof document !== `undefined`) {
            this.isDown = true;
            var slider = document.getElementsByClassName("glossary--scroller")[0];
            slider.classList.add("active");
            this.startX = e.pageX - slider.offsetLeft;
            this.scrollLeft = slider.scrollLeft;
        }
    }

    sliderMouseLeave() {
        if (typeof document !== `undefined`) {
            this.isDown = false;
            var slider = document.getElementsByClassName("glossary--scroller")[0];
            slider.classList.remove("active");
        }
    }

    sliderMouseUp() {
        if (typeof document !== `undefined`) {
            this.isDown = false;
            var slider = document.getElementsByClassName("glossary--scroller")[0];
            slider.classList.remove("active");
        }
    }

    sliderMouseMove(e) {
        if (typeof document !== `undefined`) {
            if (!this.isDown) return;
            e.preventDefault();
            var slider = document.getElementsByClassName("glossary--scroller")[0];
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - this.startX) * 1;
            slider.scrollLeft = this.scrollLeft - walk;
            //console.log(walk);
        }
    }

  handleProjectHover(project) {
    this.setState({
      linkProject:
        "/" + project.whatIsYourPreferredFirstName + project.whatIsYourPreferredLastName,
    });
    this.setState({
      studentName:
        project.whatIsYourPreferredFirstName + " " + project.whatIsYourPreferredLastName,
    });
    this.setState({ projectName: project.whatIsTheNameOfYourProject });
    this.setState({
      profilePicture: this.getPicture(project.emailAddress, "/WebCamPicture/headshot")
    });
  }

  handleLetterHover(argLetter) {
    let argLetterItems = document.getElementsByClassName("letter-" + argLetter);

    if (argLetterItems.length > 0) {
      for (var i = 0; i < 26; i++) {
        let currentLetter = (i + 10).toString(36);
        let currentLetterItems = document.getElementsByClassName(
          "letter-" + currentLetter
        );

        for (let item of currentLetterItems) {
          if (currentLetter == argLetter) {
            document
              .getElementsByClassName("glossary__randomize")[0]
              .classList.remove("glossary__item--active");
            document.getElementsByClassName(
              "glossary__randomize--img"
            )[0].src = require("../../images/randomize--black.svg");
            document
              .getElementsByClassName("glossary__letter")
              [i].classList.add("glossary__item--active");
            item.firstChild.style.height = "";
            item.firstChild.style.width = "";
          } else {
            item.firstChild.style.height = "0";
            item.firstChild.style.width = "0";
            document
              .getElementsByClassName("glossary__letter")
              [i].classList.remove("glossary__item--active");
          }
        }
      }
    }
  }

  ungrayLetter() {
    if (typeof document !== `undefined`) {
      for (var i = 0; i < 26; i++) {
        let currentLetter = (i + 10).toString(36);
        let currentLetterItems = document.getElementsByClassName(
          "letter-" + currentLetter
        );
        if (currentLetterItems.length == 1) {
          document
            .getElementsByClassName("glossary__letter")
            [i].classList.remove("glossary__letter--ghost");
        }
      }
    }
  }

  randomizeProjects() {
    // for now, just show all letters... todo, actually randomize the projects
    for (var i = 0; i < 26; i++) {
      let currentLetter = (i + 10).toString(36);
      let currentLetterItems = document.getElementsByClassName(
        "letter-" + currentLetter
      );

      document
        .getElementsByClassName("glossary__randomize")[0]
        .classList.add("glossary__item--active");
      document.getElementsByClassName(
        "glossary__randomize--img"
      )[0].src = require("../../images/randomize.svg");
      document
        .getElementsByClassName("glossary__letter")
        [i].classList.remove("glossary__item--active");

      for (let item of currentLetterItems) {
        item.firstChild.style.height = "";
        item.firstChild.style.width = "";
      }
    }
  }

  generateLetters() {
    var letters = [];
    for (var i = 0; i < 26; i++) {
      // iterate through the alphabet
      let thisLetter = (i + 10).toString(36); // thisLetter = a, b, c...
      if (this.initialLetterState[thisLetter] == true) {
        letters.push(
          <p
            className="glossary__item glossary__letter"
            onClick={() => this.handleLetterHover(thisLetter)}
          >
            {thisLetter}
          </p>
        );
      } else {
        letters.push(
          <p className="glossary__item glossary__letter glossary__letter--ghost">
            {thisLetter}
          </p>
        );
      }
    }
    return letters;
  }

  loadCoverImage(project) {
    return this.getPicture(project.emailAddress, "/ProjectCoverImage/cover");
  }

  generateProjects() {
    let generatedProjects = Projects.map((project, index) => {
      // un-gray this student's letter
      //console.log("project: " + JSON.stringify(project))
      this.initialLetterState[
        project.whatIsYourPreferredLastName[0].toLowerCase()
      ] = true;

      // append this student to our generatedStudents array
      return (
        <Link
          to={"/" + project.whatIsYourPreferredFirstName + project.whatIsYourPreferredLastName}
          className={"letter-" + project.whatIsYourPreferredLastName[0].toLowerCase()}
          onMouseEnter={() => this.handleProjectHover(project)} // use () => this.function() syntax to prevent losing 'this' context
        >
          <img
            src={this.loadCoverImage(project)}
            alt=""
            className="photo__grid--img"
          />
        </Link>
      );
    });
    return generatedProjects;
  }

  render() {
    return (
      <div className="fucker__flipper">
        <Fade cascade duration={500}>
          <section className="cta">
            <div className="cta__txt">
              <h3 className="cta__name">
                <Pixelator content={this.state.studentName} />
              </h3>
              <h4 className="cta__project">{this.state.projectName}</h4>
            </div>
            <Link to="/project">
              <img src={arrowRightTeal} alt="" className="cta__arrow" />
            </Link>
          </section>
            <div className="search__info--wrapper">
              <div className="search__desktop--wrapper">
                <section className="search__profile">
                  <div className="search__profile--frame"></div>
                  <img
                    src={this.state.profilePicture}
                    alt=""
                    className="search__profile--img"
                    id="profile-pic"
                  />
                </section>
                <section className="search__name">
                  <h3 className="cta__name" id="studentName">
                    <Pixelator content={this.state.studentName} />
                  </h3>
                  <h4 className="cta__project" id="projectName">
                    {this.state.projectName}
                  </h4>
                </section>
              </div>
              <section className="photo__grid">
                {this.generateProjects()}
              </section>
            </div>

          <section className="searchglossary--wrapper">
            <div className="search__title">
              <h3 className="search__title--txt">
                <Pixelator content="Search By Last Name" />
              </h3>
            </div>
            <div
              className="glossary--scroller"
              onMouseDown={(e) => this.sliderMouseDown(e)}
              onMouseLeave={(e) => this.sliderMouseLeave(e)}
              onMouseUp={(e) => this.sliderMouseUp(e)}
              onMouseMove={(e) => this.sliderMouseMove(e)}
            >
              <section className="glossary">
                <div
                  onClick={this.randomizeProjects}
                  aria-label="Randomize Projects"
                  className="glossary__item glossary__item--active glossary__randomize"
                >
                  <img
                    src={randomize}
                    alt=""
                    className="glossary__randomize--img"
                  />
                </div>
                {this.generateLetters()}
              </section>
            </div>
          </section>
        </Fade>
      </div>
    );
  }
}

export default Search;
