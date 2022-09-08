const { DATABASE } = require(`./settings/Config`)
const mongoose = require(`mongoose`)

async function Startup() {
    await mongoose.connect(DATABASE.mongooseConnection)
    await require(`./bot/main`)
}

module.exports = { Startup }