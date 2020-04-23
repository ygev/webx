<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="src/images/favicon.png" width="60" />
  </a>
</p>
<h1 align="center">
  Pixelation · Web Exhibition
</h1>
<h2 align="center"> Maryland Institute College of Art's Graphic Design BFA 2020 </h2>

## 📋 Documentation for Tabletop.js Data Layer

###  **Project Page Data**

| Field in Google Forms | React Component       |      React Prop      | Character Limit | Numeration Style |
|:---------------------:|-----------------------|:--------------------:|:---------------:|------------------|
| Project Title         |``ProjectHero``           | ``projectName``          | 30 characters   | -                |
| Name                  | ``ProjectHero``           | ``studentName``          | -               | -                |
| Website               | ``ProjectHero``           | ``studentWebsite``       | -               | -                |
| Instagram Handle*     | ``ProjectHero``           | ``studentInstagram``     | -               | -                |
| Instagram Link        | ``ProjectHero``           | ``studentInstagramLink`` | -               | -                |
| Project Cover Image   | ``ProjectHero``           | ``projectCoverImg``      | -               | -                |
| Project Summary       | ``ProjectTxt``            | ``projectTxt``           | 500 characters  | -                |
| Project Pictures      | ``ProjectGallery``        | ``projectImgA`` (first)  | -               | ``A``, ``B``, ``C``...       |
| Process Summary       | ``ProjectProcess``        | ``projectProcess``       | 600 characters  | -                |
| Process Pictures      | ``ProjectGalleryProcess`` | ``processImgA`` (first)  | -               | ``A``, ``B``, ``C``...       |

*For instagram and the website, need to write a function to split() https://instagram.com and https://www respectively.
