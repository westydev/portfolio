const { EmbedBuilder, SlashCommandBuilder, ApplicationCommandOptionWithChoicesAndAutocompleteMixin } = require('discord.js');
const Website = require(`../../src/models/Portfolio`)
const { BOT } = require(`../../src/settings/Config`)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("editinteresttext")
    .setDescription("İlginç Bilgi Değiştirme Komutu.")
    .addStringOption(option => option.setName('title').setDescription('Website İnterest.').setRequired(true)),
  async execute(interaction) {
    const title = interaction.options.getString('title')
    if(interaction.user.id ===! BOT.ownerID) return;

    await Website.findOneAndUpdate( {}, { interestText: title })
    await interaction.reply({ content: `Website İlginç Bilgisi **${title}** Olarak Değiştirildi.` })
  },
};