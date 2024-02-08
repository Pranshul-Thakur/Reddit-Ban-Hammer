//it uses Snoowrap library to fetch the name of users from Universal Scammer List and ban them on the desired subreddit

//Importing Snoowrap (wrapper for Reddit API)
const snoowrap = require('snoowrap');
const CONFIG = require('./config');

(async function() {

   //Create a new Snoowrap instance with the provided configuration
  const r = new snoowrap(CONFIG.SNOOWRAP);

  //Set a request delay to avoid hitting Reddit API rate limits
  r.config({ requestDelay: 5000 });
  
  //Fetch the content of the 'banlist' wiki page from the 'UniversalScammerList' subreddit
  const page = await r
    .getSubreddit('UniversalScammerList')
    .getWikiPage('banlist')
    .fetch();

  //Info of the subreddit where the users will be banned from
  const sub = await r.getSubreddit(CONFIG.SUBREDDIT);
  
  //Iterating over each line of wiki page content
  for (let line of page.content_md.split('\n')) {

    //Extracting the names
    const user = line

       //Cleaning the username by removing white spaces, #, and unnecessary characters
      .trim()
      .substr(5)
      .split(' ')[0]//extracting the first word of the username
      .split('#')[0];

    //Skip to the next iteration if no username found
    if (!user) continue;

    try {
      //Attempt to ban the user from the specified subreddit
      await sub.banUser({ name: user });
      console.log('Banned', user);
    } catch (err) {
      //Throw an Error if process fails
      console.error('Could not ban user', user, err);
    }
  }
})();
