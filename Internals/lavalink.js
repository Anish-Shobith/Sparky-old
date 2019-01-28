const { PlayerManager } = require("discord.js-lavalink");


module.exports = (bot) => {
    bot.player = new PlayerManager(bot, bot.config.lavalink.nodes, {
        user: bot.config.botid
    });

    console.log("Music is Ready!!")
}
