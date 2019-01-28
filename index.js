/**
 * Author: Anish Shobith
 * Main file
 */

const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config");
bot.config = config;
bot.util = require("./Util/util");
require("./Util/internals")(bot)
require("./Internals/lavalink")(bot)
bot.login(bot.config.token);
