const config = require("../config")
module.exports = (bot) => {
    require("../Internals/database")
   bot.firstLoadTime = Date.now();
   bot.config = config;
   require("./handlers")(bot)
}
