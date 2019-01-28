/**
 * Author: Anish Shobith
 * Event: message
 */

module.exports = async (bot, message) => {

if (message.content === '!join') {
    client.emit('guildMemberAdd', message.member || await message.guild.members.fetch(message.author));
}

if(message.guild && !message.guild.me) {
    await message.guild.members.fetch(bot.user)
}

if(message.content === bot.user.toString() || (message.guild && message.content === message.guild.me.toString())) {
    return message.channel.send(`The prefix is \`${bot.config.prefix}\`.`);
}
let prefix = new RegExp(`^<@?${bot.user.id}> |^${bot.util.regExpEsc(bot.config.prefix)}`).exec(message.content)
if(!prefix) return;

        let args = message.content.slice(prefix[0].length).trim().split(/ +/g);
        let cmd = args.shift().toLowerCase();
        let command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));

        if (!message.content.startsWith(prefix)) return;

        if(command) {
            if(message.author.id !== bot.config.owner && !command.conf.enabled) return message.channel.send(`Sorry ${message.author.username} the command has been disbaled!`)
            if(!message.guild && command.conf.guildonly)
                return message.channel.send(`This command is unavaiable via private message. Please run this command in a guild.`);

        }

        try {
            command.run(bot, message, args);
        } catch (e) {
            console.log(e)
        }

};

