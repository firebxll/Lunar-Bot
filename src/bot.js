const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "" //set prefix here

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('pong'); //test command to see if the bot is working
}
})

client.on('message', msg => { //this is an embed that prints when you run [prefix]socials
  if (msg.content === prefix + 'socials') {
    msg.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Socials**')
        .setDescription('Make sure to follow all of these!')
        .setColor('ff0000')
        .addField('Socials', '[Twitter](//enter twitter link here)\n[Youtube](//enter youtube like here)', false)
    )
  }
})

client.on('message', message => {
    if (!message.guild) return; //This checks if the message is in a guild
    if (message.content.startsWith(prefix + 'kick')) { //this finds the message
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
    }
  })

  client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith(prefix + 'ban')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) {
        message.reply("you do not have permission to do that.");
        return};
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban({
              reason: 'They were bad!',
            })
            .then(() => {
              message.reply(`Successfully banned ${user.tag}`);
            })
            .catch(err => {
              message.reply('I was unable to ban the member');
              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild!");
        }
      } else {
        message.reply("You didn't mention the user to ban!");
      }
    }
  });

client.login("TOKEN") //put token here
