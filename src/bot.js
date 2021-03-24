const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

client.once('ready', () => {
    console.log('Lunar is online!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split("");
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        message.channel.send('pong!');
    }
})

client.login("ODIzOTY0NDYwMzI2MzIyMjM4.YFoesw.cezgS1H3X979S5cxMjYIEySSHYg")