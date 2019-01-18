const { Client } = require("discord.js");
const Sparky = new Client();

Sparky.on("ready", async () => {
console.log("I am Ready!!")
})

Sparky.login(process.env.token)
