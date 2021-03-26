const Discord = require('discord.js');

module.exports = {
	name: 'fireball',
	aliases: ['fireball'],
	usage: 'fireball',
	description: 'bullys fire (admin only)',
	execute(message, args) {
		if (!message.member.hasPermission('ADMINISTRATOR')) {
            message.reply('no using this bald boi')
            return};
        return message.channel.send('firebald aka deniedball aka fire x ball')
	},
};