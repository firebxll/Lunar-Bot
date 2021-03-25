
 
const Discord = require('discord.js'); //sets login stuff up
const client = new Discord.Client();
const prefix = "/" //set prefix here and will always work with the const variable

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
}); //sends the login message

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('pong'); //@'s user and sends pong back
}
})

client.on('message', msg =>{
  if(msg.content === prefix + 'help') { //gets the message with the prefix
    msg.channel.send( //sends a message or embed using Discord.MessageEmbed to send an embed instead
      new Discord.MessageEmbed()
        .setTitle('**Help**') //title of the embed
        .setDescription('These are all the available commands and what they do.')
        .setColor('fff000')
        .addField('**Commands**', 'kick - kicks target member\nban - bans targer member\nsocials - prints selected socials\nhelp - prints this embed') //\n just makes a new line and everything else is self explanatory
    )
  } 
})

client.on('message', msg => { //this is an embed that prints when you run [prefix]socials
  if (msg.content === prefix + 'socials') {
    msg.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Socials**')
        .setDescription('Make sure to follow all of these!')
        .setColor('ff0000')
        .addField('Socials', '[Twitter]()\n[Youtube]()', false) //put twitter and youtube links here
    ) //the brackets and shit grab the link and just print whats in the bracket as a hyperlink
  }
})

client.on('message', message => { //this is just a message event
    if (!message.guild) return; //This checks if the message is in a guild
    if (message.content.startsWith(prefix + 'kick')) { //this finds the message
      if(!message.member.hasPermission('KICK_MEMBERS')) { //this checks the permissions of the user
        message.reply('you do not have permission to do that.');
        return}; //this sends a message if the user does not have the required permissions
      const user = message.mentions.users.first()
      if (user) { //this grabs a mention from the message
        const member = message.guild.member(user);
        if (member) { //this is sent if the command works
          member
            .kick('User has been kicked.')
            .then(() => { //audit log message
              message.reply(`successfully kicked ${user.tag}`); //sends this in the channel where the command was run and user.tag just grabs the mention of the user
            })
            .catch(err => { //catches a role heirarchy or bot permission error and sends an error message to the channel and console
              message.reply('I was unable to kick the member');          
              console.error(err);
            });
        } else {       
          message.reply("that user isn't in this guild!");
        }  //if the user is not in the server this is sent
      } else {
        message.reply("you didn't mention the user to kick!"); //if the user does not have the required permissions this is sent
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

client.login('') //put token here
