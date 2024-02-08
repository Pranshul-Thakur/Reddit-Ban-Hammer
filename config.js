//Need to replace the empty strings with the actual Reddit app'client secert, ID, username and password.
//And fill the subreddit field with the name of the subreddit

//Importing the package.json file to retrieve the version of the script
const package = require('./package.json');

module.exports = {

  //Setting a placeholder where the users will be banned
  SUBREDDIT: '',

  //Reddit API credentials and user config for Soowrap
  SNOOWRAP: {
    clientSecret: '', //Apps Client secert
    userAgent: `reddit-banhammer v${package.version}`, //user agent for identification
    clientId: '',  // Your Reddit app's client ID
    username: '',  // Your Reddit username
    password: ''   // Your Reddit password
  }
};
