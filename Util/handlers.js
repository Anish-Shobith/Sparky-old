module.exports = (bot) => {

    require("../Internals/commandhandler")(bot)
    require("../Internals/eventhandler")(bot)
}