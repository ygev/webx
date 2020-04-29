import React from "react";
import Layout from "../layout/layout";
import Pixelator from "../pixelator/pixelator";
import "../../css/global.css";
import "../../css/reset.css";
import "../../css/type.css";
import "./projectHero.css";
import iconWebsite from "../../images/linkWebsite.svg";
import iconInstagram from "../../images/linkInstagram.svg";
import Fade from "react-reveal/Fade";

function addAt(username) {
  if(username[0] !== "@") {
    return "@" + username;
  }
  else {
    return username;
  }
}

function removeAt(username) {
  if (username[0] == "@") {
    return username.substr(1);
  }
  else {
    return username;
  }
}

function cleanLink(website) {
  if(website.startsWith("https://www") || website.startsWith("http://www")|| website.startsWith("www")) {
    return website.split("www.")[1]; 
  }
  else if (website.startsWith("https://") || website.startsWith("http://")) {
    return website.split("//")[1];
  }
  else {
    return website;
  }
}

function uncleanLink(website) {
  if(website.startsWith("www")) {
    return "http://" + website;
  }
  else {
    return website;
  }
}

export default (props) => (
  <>
    <Layout rows={[9, 10, 6]}>
      <Fade delay={1800} duration={350}>
        <img
          src={props.projectCoverImg}
          alt=""
          className="projectHero__cover"
        />
      </Fade>
      <Fade delay={1200} duration={350}>
        <section className="projectHero__txt">
          <div className="projectHero__info">
            <h3 className="projectHero__project">
              <Pixelator content={props.projectName} />
            </h3>
            <h4 className="projectHero__name">{props.studentName}</h4>
          </div>
          <div className="projectHero__social">
            <div className="projectHero__link--wrapper">
              <img
                src={iconWebsite}
                alt="Website Link"
                className="projectHero__link--icon"
              />
              <p className="projectHero__link--paragrapher">
                <a href={uncleanLink(props.studentWebsite)} className="projectHero__link">
                  {cleanLink(props.studentWebsite)}
                </a>
              </p>
            </div>
            <div className="projectHero__link--wrapper">
              <img
                src={iconInstagram}
                alt="Instagram Link"
                className="projectHero__link--icon"
              />
              <p className="projectHero__link--paragrapher">
                <a
                  href={"https://www.instagram.com/" + removeAt(props.studentInstagram)}
                  className="projectHero__link"
                >
                  {addAt(props.studentInstagram)}
                </a>
              </p>
            </div>
          </div>
        </section>
      </Fade>
    </Layout>
  </>
);
