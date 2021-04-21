/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv-flow").config();

const contentfulManagement = require("contentful-management");

const managementToken =
  process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN;
const spaceID = process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_SPACE_ID;
const contentfulEnv = process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_ENVIRONMENT;

module.exports = () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: managementToken,
  });

  return contentfulClient
    .getSpace(spaceID)
    .then(space => space.getEnvironment(contentfulEnv));
};
