const mongoose = require("mongoose");
const config = require("../config");

const mongodb = config.mongodb;

const connection = mongoose.connect(`mongodb://${mongodb.host}.mlab.com:${mongodb.port}/${mongodb.database}`,{
    useNewUrlParser: true,
    user: `${mongodb.username}`,
    pass: `${mongodb.password}`
})
console.log("Sucessfully Connected to Database")

module.exports = connection;
