import React from "react";
//import SEO from "../../components/seo";
import Header from "../components/header/header";
import ProjectHero from "../components/projectHero/projectHero";
import ProjectContent from "../components/projectContent/projectContent";
import ProjectTxt from "../components/projectTxt/projectTxt";
import ProjectGallery from "../components/projectGallery/projectGallery";
import ProjectProcess from "../components/projectProcess/projectProcess";
import ProjectGalleryProcess from "../components/projectGalleryProcess/projectGalleryProcess";
import ProjectPreFooter from "../components/projectPreFooter/projectPreFooter";
import Footer from "../components/footer/footer";

const Project = ({ pageContext }) => (
  <div>
    <Header />

    <ProjectHero
      projectName={pageContext.projectName}
      studentName={pageContext.firstName + " " + pageContext.lastName}
      studentWebsite={pageContext.website}
      studentInstagram={pageContext.instagram}
      projectCoverImg={require("../images/_sample-data/projects/" +
        pageContext.email +
        "/ProjectCoverImage/cover.png")}
    />
    <ProjectContent projectTxt={pageContext.projectSummary}
                    projectProcess={pageContext.projectProcess} 
                    email={pageContext.email}/>


    <ProjectPreFooter />
    <Footer />
  </div>
);
export default Project;
