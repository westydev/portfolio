const { EmbedBuilder, SlashCommandBuilder, ApplicationCommandOptionWithChoicesAndAutocompleteMixin } = require('discord.js');
const Website = require(`../../src/models/Portfolio`)
const { BOT } = require(`../../src/settings/Config`)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("editabouttext")
    .setDescription("Hakkında Değiştirme Komutu.")
    .addStringOption(option => option.setName('title').setDescription('Website About.').setRequired(true)),
  async execute(interaction) {
    const title = interaction.options.getString('title')
    if(interaction.user.id ===! BOT.ownerID) return;

    await Website.findOneAndUpdate( {}, { aboutText: title })
    await interaction.reply({ content: `Website Hakkındası **${title}** Olarak Değiştirildi.` })
  },
};