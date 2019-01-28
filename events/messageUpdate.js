module.exports = async (bot, old , msg) => {
    if(old.content !== msg.content)
    bot.emit('message', msg);
}