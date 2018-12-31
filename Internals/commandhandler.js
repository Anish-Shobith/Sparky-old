const Discord = require('discord.js');
const fs = require('fs');

module.exports = bot => {
    bot.commands = new Discord.Collection();
    bot.aliases = new Discord.Collection();
 
    fs.readdir('./commands/', (err, categories) => {
        if (err) console.log(err);
        console.log(`Found total ${categories.length} category.`);
        categories.forEach(category => {
            let moduleConf = require(`../commands/${category}/module.json`);
            moduleConf.path = `./commands/${category}`;
            moduleConf.cmds = [];
            if (!moduleConf) return;
            fs.readdir(`./commands/${category}`, (err, files) => {
                if (err) console.log(err);
                files.forEach(file => {
                    if (!file.endsWith('.js')) return;
                    let props = require(`../commands/${category}/${file}`);
                    bot.commands.set(props.command.name, props);

                    if (props.command.aliases)  props.command.aliases.forEach(alias => {
                        bot.aliases.set(alias, props.command.name);
                    });
                });
            });
        });
    });
 }