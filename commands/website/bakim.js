const { EmbedBuilder, SlashCommandBuilder, ApplicationCommandOptionWithChoicesAndAutocompleteMixin } = require('discord.js');
const Website = require(`../../src/models/Portfolio`)
const { BOT } = require(`../../src/settings/Config`)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("care")
    .setDescription("Bakım Komutu.")
    .addBooleanOption(option => option.setName('care').setDescription('Enabled.').setRequired(true)),
  async execute(interaction) {
    const careEnabled = interaction.options.getBoolean('care')
    if(interaction.user.id ===! BOT.ownerID) return;

    await Website.findOneAndUpdate( {}, { careEnabled: careEnabled })
    await interaction.reply({ content: `Website Bakım Durumu ${careEnabled} Olarak Değiştirildi.` })
  },
};