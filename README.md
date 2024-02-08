Ban from your subreddit all of the users on the [UniversalScammerList](https://www.reddit.com/r/UniversalScammerList/wiki/banlist).  (still working on it)

It uses Snoowrap library to fetch the name of users from Universal Scammer List and ban them on the desired subreddit

To use this script, you need to provide the necessary Reddit API credentials and fill in the subreddit field in the config.js file.

# Setup

Clone the repo, and then:

```bash
cd reddit-banhammer
npm install
cp config.default.js config.js # Edit this new file according to your preferences
node index
```
