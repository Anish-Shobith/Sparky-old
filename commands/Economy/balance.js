const Discord = require("discord.js");
const eco = require('discord-economy');

  module.exports.run = async (bot, message) => {
        var output = await eco.FetchBalance(message.author.id)
        message.channel.send(`Hey ${message.author.tag}! You own ${output.balance} coins.`);
};

module.exports.command = {
    name: 'balance',
    permission: "None",
    description: "Gives The Users Balance ",
    usage: `balance`,
    category: "ECONOMY",
    enabled: true
};
