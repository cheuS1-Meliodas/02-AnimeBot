const { Command } = require('discord.js-commando')
module.exports = class AnimeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'anime',
			group: 'anime category',
			memberName: 'anime',
			description: 'Send default anime pics',
		});
	}

	run(message) {
		if(!message.guild) 
		 return message.reply('Команда может быть выполнена только на сервере!')
		 const a = Math.floor(Math.random() * (29 - 1)) + 1
		 message.channel.send(undefined, {
			embed: {
			  image: {
				url: `attachment://${a}.jpg`
			  },
			  files: [
				`./pics/danime/${a}.jpg`, 
			  ]
			}
		  });
	   
	  
	}
};