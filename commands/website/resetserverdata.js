const { EmbedBuilder, SlashCommandBuilder, ApplicationCommandOptionWithChoicesAndAutocompleteMixin } = require('discord.js');
const Website = require(`../../src/models/Portfolio`)
const { BOT } = require(`../../src/settings/Config`)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reset")
    .setDescription("Reset Komutu."),
  async execute(interaction) {
    if(interaction.user.id ===! BOT.ownerID) return;
    const WebData = await Website.findOne()

    if(!WebData) {
        await interaction.reply({ content: `Zaten Website Datası Yok.` })
    } else {
        await Website.findOneAndDelete()
        await interaction.reply({ content: `Website Ayarları Sıfırlandı.` })
    }
  }
};