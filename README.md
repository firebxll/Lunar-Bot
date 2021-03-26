Lunar Bot

Prerequisites

Git

NodeJS >= 14

Yarn >= 1.2

Installation & Setup
Use the GitHub Use this template button to make a new repo, then download it using

git clone https://github.com/<yourUsername>/<repoName>.git
Then go into the <repoName> folder:

cd <repoName>
  
Install all the dependencies using Yarn:

yarn

While the dependencies are being installed you can copy the configuration file.

cp config.example.json config.json

Configure the config file with all the details:

nano config.json

Finally you can run the program:

node index.js


Configuration
Discord contains all the keys, tokens, IDs etc
Token is the token for the discord bot.
  If you don't already have a Discord App, you can create a new app, then convert the app to a Discord bot, and then get your Discord bot token on the "Bot" page.
prefix is the prefix the bot will respond to
ownerId is the discord ID of the bot owner
  This gives permission to reload all commands
How to add stuff
  Make a new <commandName>.js file in the according section under the commands folder
  You can copy example.js from the other folder, rename it and modify it for a new command
