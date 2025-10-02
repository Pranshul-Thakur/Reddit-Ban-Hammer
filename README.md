# Reddit Banhammer

Automated tool to ban users from the Universal Scammer List on your subreddit using the Reddit API.

## Features

- Fetches users from the Universal Scammer List
- Automatically bans them from specified subreddit
- Rate limiting to avoid API throttling
- Error handling for failed ban attempts

## Setup

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd reddit-banhammer
npm install
```

Configure your Reddit API credentials:

```bash
cp config.default.js config.js
```

Edit `config.js` with your Reddit app credentials:
- Client ID
- Client Secret
- Reddit Username
- Reddit Password
- Target Subreddit name

## Getting Reddit API Credentials

1. Go to https://www.reddit.com/prefs/apps
2. Click "Create App" or "Create Another App"
3. Select "script" as the app type
4. Fill in the required fields
5. Copy the client ID and secret to your config file

## Usage

Run the script:

```bash
node index.js
```

The script will:
1. Connect to Reddit API
2. Fetch the Universal Scammer List
3. Ban each user from your specified subreddit
4. Log progress and any errors

## Requirements

- Node.js
- Reddit account with moderator permissions
- Reddit API application credentials

## Note

Use responsibly and ensure you have proper moderator permissions on the target subreddit.
