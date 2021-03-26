const Discord = require('discord.js');

module.exports = {
	name: 'sword',
	aliases: ['sword'],
	usage: 'sword',
	description: 'calls sword a rat (admin only)',
	execute(message, args) {
		if (!message.member.hasPermission('ADMINISTRATOR')) {
            message.reply('no using this bald boi')
            return};
        return message.channel.send('<@717805039544041472> is a rat boi')
	},
};