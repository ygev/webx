exports.createPages = ({ actions: { createPage } }) => {
  const project = require("./data/students.json");
  project.forEach((project) => {
    createPage({
      path: `${project.whatIsYourPreferredFirstName}` + `${project.whatIsYourPreferredLastName}`,
      component: require.resolve("./src/templates/project.js"),
      context: {
        email: project.emailAddress,
        firstName: project.whatIsYourPreferredFirstName,
        lastName: project.whatIsYourPreferredLastName,
        projectName: project.whatIsTheNameOfYourProject,
        website: project.ifYouHaveAWebsitePleaseAddItHere,
        instagram: project.ifYouHaveAnInstagramHandlePleaseAddItHere,
        projectSummary: project.writeASummaryOfYourProject,
        projectProcess: project.writeASummaryOfTheProcessOfYourProject,
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