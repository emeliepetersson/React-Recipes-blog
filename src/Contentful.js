const contentful = require("contentful");
require("dotenv").config();

const spaceKey = process.env.REACT_APP_CONTENTFUL_SPACE;
const accessTokenKey = process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN;

const client = contentful.createClient({
  space: "9s0j51rapmhp",
  accessToken: "kL8gLxTV38hiWgLJ88fJC86OMmRF-jjiIJinVvVbIbo",
});

export default client;
