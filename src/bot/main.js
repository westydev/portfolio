const { Client, GatewayIntentBits } = require('discord.js');
const { BOT, WEBSITE } = require(`../settings/Config`)
const client = global.client =new Client({ 
    intents: 
    [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] 
});
const Website = require('../models/Portfolio');
 require(`./commandHandler`)
 require(`./commandLoader`)

client.on('ready', async () => {
  console.log(`Bot Online!`);
});

client.on(`interactionCreate`, async interaction => {
   const command = interaction.client.commands.get(interaction.commandName)
    if (!command) return

     try {
      command.execute(interaction)
    } catch (error) {
      console.error(error)
      return interaction.reply({ content: '> <a:red:702190279880605726> **Bu Komut Yürütülürken Bir Hata Oluştu!**', ephemeral: true })
    }
})

client.login(BOT.botToken)