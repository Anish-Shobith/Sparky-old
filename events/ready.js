const Discord = require("discord.js");
const fs = require("fs");
const chalk = require("chalk");
const botconfig = require("../botconfig.json");
const Dbl = require("dblapi.js");
module.exports = async (bot) => {
  const dbl = new Dbl(botconfig.dbl, bot);
    
        setGame();
        console.log(chalk.blue(`${bot.user.username} has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds and ${bot.commands.size} commands!`)); 
        console.log(chalk.green(`Sparky Version: ${botconfig.version}`));
        console.log(chalk.blue(`Sparky Developers:${botconfig.devs}`));
        console.log(chalk.green(`Sparky Prefix: ${botconfig.PREFIX}`));
dbl.postStats(bot.guilds.size);
    function setGame() {
        const set = () => {
            bot.user.setActivity(`for ${botconfig.PREFIX}help ${bot.guilds.size} Guilds and ${bot.users.size} Users`, {type:botconfig.stats}).catch(err => console.log(err));
        };
        set();
        setInterval(() => set(), 60 * 60000);
        bot.user.setStatus(`${botconfig.status}`).catch(console.error);

    }

};
