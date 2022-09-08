const express = require('express');
const router = express.Router();
const Website = require('../models/Portfolio');
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const { BOT, WEBSITE } = require(`../settings/Config`)
const client = global.client =new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });

    router.get("/", async (req, res) => {
    const WebData =  await Website.findOne()
    if(!WebData) {
         return res.render(`errorSetup.ejs`)
    }
    if(WebData) {
        if(WebData.careEnabled === true) {
           return res.send({ message: `Site Bakımda.` })
        }
        await res.render(`index.ejs`, {
            data: WebData,
            configBot: BOT,
            configWebsite: WEBSITE 
        })
        await Website.findOneAndUpdate({  }, { $inc: { loginWebsite: 1 } }, { upsert: true });
    }
})


module.exports = router;