const { Command } = require('discord.js-commando')
module.exports = class NekoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'neko',
			group: 'anime category',
			memberName: 'neko',
			description: 'Картинки Кошкодевочек',
		});
	}

	run(message) {
		if(!message.guild) 
		 return message.reply('Команда может быть выполнена только на сервере!')
		 const a = Math.floor(Math.random() * (30 - 1)) + 1
		 message.channel.send(undefined, {
			embed: {
			  image: {
				url: `attachment://${a}.jpg`
			  },
			  files: [
				`./pics/neko/${a}.jpg`, 
			  ]
			}
		  });
	   
	  
	}
};