const { MessageEmbed } = require("discord.js");

module.exports = async (bot, guild) => {
    let botguild = bot.guilds.get("537939289636339712");
const invite = await guild.channels.find( c => c.type !== "category" && c.position === 0).createInvite({
    maxAge: 0 
})

let embed = new MessageEmbed()
.setColor("537939289636339712")
.setThumbnail(guild.iconURL)
.setTitle(`${bot.user.username} Joined a new Server!`)
.addField(`Server Name:`, `${guild.name}`)
.addField(`Server ID:`, `${guild.id}`)
.addField(`Server Onwer`, `${guild.owner.user.tag}`)
.addField(`Server Members:`, `${guild.memberCount}`)
.addField(`Server Invite:`, `${invite}`)
.setFooter(`${bot.user.username}`, bot.user.displayAvatarURL())
.setTimestamp();

botguild.send(embed).then(r => r.react("503314047756795914"))



}