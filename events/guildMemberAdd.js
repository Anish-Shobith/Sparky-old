const Canvas = require("canvas");
const Discord = require("discord.js");
const snekfetch = require("snekfetch");


const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

module.exports = async (bot, member) => {

    const channel = member.guild.channels.get("502933756462759946")
	if (!channel) return;
	const canvas = Canvas.createCanvas(716, 369);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./assets/welcome.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Welcome to ${member.guild.name}`, canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}! `, canvas.width / 2.5, canvas.height / 1.8);

	
	ctx.font = `28px sans-serif`;
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`you are the ${member.guild.memberCount}th member !`, canvas.width / 3.2, canvas.height / 1.2);


	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL());
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to the server,${member}!`, attachment);
}