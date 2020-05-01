<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="src/images/favicon.png" width="60" />
  </a>
</p>
<h1 align="center">
  Pixelation · Web Exhibition
</h1>

## 🎓 Maryland Institute College of Art's Graphic Design BFA 2020 Exhibition
Historically, MICA's Artwalk Exhibition has been a physical space for viewers to come in and experience in-person degree projects by our graduating class. Due to COVID-19, this pandemic rejuvenated a team of graduating students in the BFA Graphic Design program to spearhead, lead, and invent this alternative virtual exhibition for their class. 

## 🙌 Team
**Visual Design:** [Tony Kim](https://www.kimtony.com) *(init)*, [Amanda Yeh](https://www.amandayeh.com) *(current)*

**Project Management:** [Anne Xin](https://www.annexin.design)

**Primary Development:** [Zoey Russomano](http://zoeyrussomano.com/) *(init)*, [Yana Gevorgyan](https://www.yg.is) *(current)*

**Data Collection + Support Development:** [Amanda Yeh](https://amandayeh.com)

## 💕 Special Thanks
Thank you to faculty [Kristian Bjørnard](https://github.com/bjornmeansbear/), [Isaac Gertman](https://theindependentgroup.us/) and [Brockett Horne](https://www.brocketthorne.com/) for disseminating data collection surveys to students and moral support. 

Thank you to [Karl Ericksen](https://karlericksen.com/) for hosting.

Thank you to MICA Graphic Design 2020 Students for four years of hard work and adaptability in the face of hardship.

## 📋 Documentation for Tabletop.js Data Layer

###  **Project Page Data**

| Field in Google Forms | React Component       |      React Prop      | Character Limit | Numeration Style |
|:---------------------:|-----------------------|:--------------------:|:---------------:|------------------|
| Project Title         |``ProjectHero``           | ``projectName``          | 30 characters   | -                |
| Name                  | ``ProjectHero``           | ``studentName``          | -               | -                |
| Website               | ``ProjectHero``           | ``studentWebsite``       | -               | -                |
| Instagram Handle*     | ``ProjectHero``           | ``studentInstagram``     | -               | -                |
| Project Cover Image   | ``ProjectHero``           | ``projectCoverImg``      | -               | -                |
| Project Summary       | ``ProjectTxt``            | ``projectTxt``           | 500 characters  | -                |
| Project Pictures      | ``ProjectGallery``        | ``projectImg``           | -               | ``A``, ``B``, ``C``...       |
| Process Summary       | ``ProjectProcess``        | ``projectProcess``       | 600 characters  | -                |
| Process Pictures      | ``ProjectGalleryProcess`` | ``processImg``           | -               | ``A``, ``B``, ``C``...       |

*For instagram and the website, need to write a function to split() https://instagram.com and https://www respectively.
