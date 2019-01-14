const Discord = require('discord.js');
const bot = new Discord.Client({
fetchAllMembers: true
});
const botconfig = require('./botconfig.json');
require("./Internals/commandhandler")(bot);
require("./Internals/eventhandler")(bot);
require("./Internals/close");
bot.login(process.env.token).catch(err => console.log(err));
