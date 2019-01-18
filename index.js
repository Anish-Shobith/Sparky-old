const { Client } = require("discord.js");
const Sparky = new Client();

Sparky.on("error", async (e) => {
console.log(e)
})

Sparky.on("ready", async () => {
console.log("I Am Ready!!!!")
})

Sparky.login(process.env.token)
