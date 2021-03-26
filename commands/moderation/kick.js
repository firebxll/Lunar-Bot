const Discord = require('discord.js');

module.exports = {
	name: 'kick',
	aliases: ['kick', 'k'],
	usage: 'kick [user]',
	description: 'Kick target member',
	execute(message, args) {
		if(!message.member.hasPermission('KICK_MEMBERS')) { //this checks the permissions of the user
            message.reply('you do not have permission to do that.');
            return}; //this sends a message if the user does not have the required permissions
          const user = message.mentions.users.first()
          if (user) {
            const member = message.guild.member(user);
            if (member) {
              member
                .kick('User has been kicked.')
                .then(() => {
                  message.reply(`successfully kicked ${user.tag}`);
                })
                .catch(err => {
                  message.reply('I was unable to kick the member');         
                  console.error(err);
                });
            } else {       
              message.reply("that user isn't in this guild!");
            }  
          } else {
            message.reply("you didn't mention the user to kick!");
          }
	},
};