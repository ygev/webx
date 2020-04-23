import React from "react";
//import SEO from "../../components/seo";
import Header from "../components/header/header";
import ProjectHero from "../components/projectHero/projectHero";
import ProjectTxt from "../components/projectTxt/projectTxt";

const Project = ({ pageContext }) => (
  <div>
    <Header />
    <ProjectHero
      projectName={pageContext.projectName}
      studentName={pageContext.firstName + " " + pageContext.lastName}
      studentWebsite={pageContext.website}
      studentInstagram={pageContext.instagram}
      studentInstagramLink="https://instagram.com/yaml0rd"
      projectCoverImg={"../../static/" + pageContext.email + "/cover.png"}
    />
    <ProjectTxt projectTxt={pageContext.projectSummary} />
  </div>
);
export default Project;
