const Commando = require('discord.js-commando');

const client = new Commando.Client({
    commandPrefix: '02.',
    owner: '398837713932910595',
});

const path = require('path');

client.registry
    // Registers your custom command groups
    .registerGroups([
        ['user category', 'User Category - simple commands'],
        ['admin categoty', 'Admin Category - Administration commands'],
        ['anime category', 'Anime Category - Anime pics and Gifs'],
        ['nsfw category', 'NSFW Category - NSFW pics and Gifs']
    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));
client.on('ready', () => { 
 console.log(`logged in as ${client.user.tag}`)
})
client.login('Your Token Here')