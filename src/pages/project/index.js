import React from "react"
import SEO from "../../components/seo"
import Header from "../../components/header/header"
import ProjectHero from "../../components/projectHero/projectHero"
import ProjectTxt from "../../components/projectTxt/projectTxt"
import ProjectGallery from "../../components/projectGallery/projectGallery"
import ProjectProcess from "../../components/projectProcess/projectProcess"
import ProjectGalleryProcess from "../../components/projectGalleryProcess/projectGalleryProcess"
import ProjectPreFooter from "../../components/projectPreFooter/projectPreFooter"
import Footer from "../../components/footer/footer"
// Prop Image Imports
import projectCoverImg from "../../images/_sample-data/projects/cover.png"
import projectImgA from "../../images/_sample-data/projects/final-1.png"
import projectImgB from "../../images/_sample-data/projects/final-2.png"
import projectImgC from "../../images/_sample-data/projects/final-3.png"
import processImgA from "../../images/_sample-data/projects/process-1.png"
import processImgB from "../../images/_sample-data/projects/process-2.png"
import processImgC from "../../images/_sample-data/projects/process-3.png"
import processImgD from "../../images/_sample-data/projects/process-4.png"

class Index extends React.Component {
    render() {
      return (
            <>
                <SEO title="Project Name" />
                <Header />
                <ProjectHero projectName="Sketch Cluse" studentName="Yana Gevorgyan" studentWebsite="yg.is" studentInstagram="@yaml0rd" studentInstagramLink="https://instagram.com/yaml0rd" projectCoverImg={projectCoverImg}/>
                <ProjectTxt projectTxt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat elit, consequat habitasse convallis. Tempus vitae ac, nulla sed massa, tempor. Velit maecenas tortor quis consequat elementum commodo et. Nulla egestas non sagittis, aliquam. Nulla egestas non sagittis, aliquam. Nulla egestas non sagittis, aliquam. Nulla egestas non sagittis, aliquam. Nulla egestas non sagittis, aliquam. Nulla egestas non sagittis, aliquam. Nulla egestas non sagittis, aliquam.Nulla egestas non sagittis, aliquam."/>
                <ProjectGallery projectImgA={projectImgA} projectImgB={projectImgB} projectImgC={projectImgC}/>
                <ProjectProcess projectProcess="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat elit, consequat habitasse convallis. Tempus vitae ac, nulla sed massa, tempor. Velit maecenas tortor quis consequat elementum commodo et. Nulla egestas non sagittis, aliquam. Mauris, tincidunt nulla ut arcu egestas suspendisse ipsum, ornare mattis. Placerat pharetra, viverra habitant fringilla nec odio maecenas lectus faucibus. Facilisis sem mauris, ullamcorper senectus. Sed quisque pulvinar id tortor, euismod. Sapien arcu nisi tristique pharetra in. Pretium posuere sem faucibus adipiscing enim nulla velit se ipsum, ornare  enim, mae."/>
                <ProjectGalleryProcess processImgA={processImgA} processImgB={processImgB} processImgC={processImgC} processImgD={processImgD}/>
                <ProjectPreFooter />
                <Footer/>
            </>
        )
    }
}


export default Index
