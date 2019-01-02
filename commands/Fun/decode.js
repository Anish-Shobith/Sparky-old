const Discord = require("discord.js");
const base64 = require("base-64");
const utf8 = require("utf8");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let t = args.join(" ");
    if (!t) message.reply("Please provide something to decode");
    let b = base64.decode(t);
    let u = utf8.decode(b);
    message.channel.send(u);
};

module.exports.command = {
    name: 'decode',
    permission: "none",
    description:"decodes the encoded message",
    usage: `decode`,
    category: "FUN",
    enabled: true
};
