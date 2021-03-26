const Discord = require('discord.js');

module.exports = {
    name: 'socials', 
    aliases: ['socials', 's'],
    usage: 'socials',
    description: 'Prints the onwers socials!',
    execute(message, args) {
      return message.channel.send(
        new Discord.MessageEmbed()
         .setTitle('**Socials**')
          .setDescription('Make sure to follow all of these!')
         .setColor('Math.floor(Math.random() * 16777215).toString(16)')
         .addField('**Links**', '[Twitter](https://twitter.com/)\n[Youtube](https://www.youtube.com/)', false)
      )
  }
}
