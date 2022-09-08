const { EmbedBuilder, SlashCommandBuilder, ApplicationCommandOptionWithChoicesAndAutocompleteMixin } = require('discord.js');
const Website = require(`../../src/models/Portfolio`)
const { BOT } = require(`../../src/settings/Config`)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ziyaretcisayisi")
    .setDescription("Siteye Ziyaret Edenlerin Sayısını Gösterir."),
  async execute(interaction) {
    if(interaction.user.id ===! BOT.ownerID) return;
    try {
        const WebsiteData = await Website.findOne({  })
        await interaction.reply({ content: `${WebsiteData.loginWebsite} Ziyaretçi` })
    } catch (error) {
        await interaction.reply({ content: `Bir Hata Oluştu ${error}` })
    }
  },
};