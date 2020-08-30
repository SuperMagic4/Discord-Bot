const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.once('ready', () => {
    console.log('Project B.O.T has sucessfully started!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == 'update'){
        if (!args.length) {
            return message.channel.send(`${message.author}\nInvalid use of the "update" command\nCorrect use is "!update {Unreal Engine Version} {Status} {Project Link}`);
        }

        else if (!args[2]) {
            message.channel.send(`There should be 3 provided arguments.`);
        }

        else {

            const status = (args[1])
            const version = (args[0])
            const hotText = 'Project Installer'
            const link = (args[2])
            const embed = new Discord.MessageEmbed()
            .setTitle(link)
            .setDescription('A new project version is available!')
            .addField('Unreal Engine Version', version, true)
            .addField('Status', status, true)
            .setColor(0xF1C40F)
            message.channel.send(embed);
        }

        if (message.content.startsWith("!")) {
            message.delete();
        }
    }
})

client.login('NzMwNTI3MTAzNjAyMzkzMTg5.XwY0fA.v4hfoGXuFobu81MiSLl7LpseFhc');