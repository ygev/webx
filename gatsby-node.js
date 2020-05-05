//import cover from "src/images/_sample-data/projects/cover.png";

exports.createPages = ({ actions: { createPage } }) => {
  const project = require("./data/students.json");
  project.forEach((project) => {
    createPage({
      path: `${project.whatIsYourFirstName}` + `${project.whatIsYourLastName}`,
      component: require.resolve("./src/templates/project.js"),
      context: {
        email: project.emailAddress,
        firstName: project.whatIsYourFirstName,
        lastName: project.whatIsYourLastName,
        projectName: project.whatIsYourProjectName,
        website: project.ifYouHaveAWebsitePleaseListItHere,
        instagram: project.ifYouHaveInstagramPleaseListYourUsernameHere,
        projectSummary: project.describeYourProjectInDetail,
        projectProcess: project.describeTheProcessOfYourProject,
      },
    });
  });
};

// Hide source in Webpack
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false
    });
  }
};