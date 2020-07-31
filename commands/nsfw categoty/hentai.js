const { Command } = require('discord.js-commando')
module.exports = class HentaiCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hentai',
			group: 'nsfw category',
			memberName: 'hentai',
			description: 'Обычный Хентай :3',
		});
	}

	run(message) {
		if(!message.guild) 
		 return message.reply('Команда может быть выполнена только на сервере!')
		if(!message.channel.nsfw) 
		  return message.reply('У этого канала нет разрешения `NSFW`! Я не могу кинуть `NSFW` контент!')
		 const a = Math.floor(Math.random() * (94 - 1)) + 1
		 message.channel.send(undefined, {
			embed: {
			  image: {
				url: `attachment://${a}.jpg`
			  },
			  files: [
				`./pics/hentai/${a}.jpg`, 
			  ]
			}
		  });
	   
	  
	}
};