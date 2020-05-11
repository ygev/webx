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

function renderInstagram(username) {
  if(typeof username == `undefined`){
    return null;
  }
  else {
    return <div className="projectHero__link--wrapper">
      <img
        src={iconInstagram}
        alt="Instagram Link"
        className="projectHero__link--icon projectHero__link--iconinsta"
      />
      <p className="projectHero__link--paragrapher">
        <a
          href={"https://www.instagram.com/" + removeAt(username)}
          className="projectHero__link"
        >
          {addAt(username)}
        </a>
      </p>
    </div>
  }
}

function renderWebsite(website) {
  if(typeof website == `undefined`){
    return null;
  }
  else {
    return <div className="projectHero__link--wrapper">
    <img
      src={iconWebsite}
      alt="Website Link"
      className="projectHero__link--icon projectHero__link--iconweb"
    />
    <p className="projectHero__link--paragrapher">
      <a href={uncleanLink(website)} className="projectHero__link">
        {cleanLink(website)}
      </a>
    </p>
  </div>
  }
}


function addAt(username) {
  if(typeof username == `undefined`){
    return null;
  }
  else if(username[0] !== "@") {
    return "@" + username;
  }
  else {
    return username;
  }
}

function removeAt(username) {
  if(typeof username == `undefined`){
    // document.getElementsByClassName("projectHero__link--iconinsta")[0].style.display = "none";
    return null;
  }
  else if (username[0] == "@") {
    return username.substr(1);
  }
  else {
    return username;
  }
}

function cleanLink(website) {
  if(typeof website == `undefined`){
    return null;
  }
  else if(website.startsWith("https://www") || website.startsWith("http://www")|| website.startsWith("www")) {
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
  if(typeof website == `undefined`){
    return null;
  }
  else if(website.startsWith("www")) {
    return "http://" + website;
  }
  else {
    return website;
  }
}

function getModuleFromPath(email, filename, ext) {
  return require("../../images/_data/projects/" + email + "/ProjectCoverImage/" + filename + "." + ext);
}

function getPicture(email, filename) {
  let extensions = ["png", "jpeg", "jpg", "gif", "mp4"]
  return loadModule(email, filename, extensions);
}

function loadModule(email, filename, extensions) {
  let ext = "";
  if (extensions.length == 0) {
    return null;
  } else {
    ext = extensions.shift();
  }

  try {
    return getModuleFromPath(email, filename, ext);
  } catch (e) {
    if (e.code == 'MODULE_NOT_FOUND') {
      return loadModule(email, filename, extensions);
    } else {
      throw e;
    }
  }
}

function loadCoverImage(emailAddress) {
  console.log("loadCoverImage: " + emailAddress)
  return getPicture(emailAddress, "cover");
}

export default (props) => (
  <>
    <Layout rows={[9, 10, 6]}>
      <Fade delay={1800} duration={350}>
        <img
          src={loadCoverImage(props.emailAddress)}
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
            {renderWebsite(props.studentWebsite)} 
            {renderInstagram(props.studentInstagram)}
          </div>
        </section>
      </Fade>
    </Layout>
  </>
);
