const { EmbedBuilder, SlashCommandBuilder, ApplicationCommandOptionWithChoicesAndAutocompleteMixin } = require('discord.js');
const Website = require(`../../src/models/Portfolio`)
const { BOT } = require(`../../src/settings/Config`)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kurulum")
    .setDescription("Kurulum Komutu.")
    .addStringOption(option => option.setName('title').setDescription('Website Title.').setRequired(true))
    .addStringOption(option => option.setName('realname').setDescription('Author Realname.').setRequired(true))
    .addStringOption(option => option.setName('email').setDescription('Author Email.').setRequired(true)),
  async execute(interaction) {
    const title = interaction.options.getString('title')
    const realname = interaction.options.getString('realname')
    const email = interaction.options.getString(`email`)

    if(interaction.user.id ===! BOT.ownerID) return;
    const WebData = await Website.findOne()

    if(WebData) {
      return await interaction.reply({ content: `Kurulum Zaten Yapılmış`, ephemeral: true })
    } else {
      const newWebData = new Website({ 
        websiteTitle: title,
        realName: realname,
        publicMail: email
       })
       newWebData.save()
       await interaction.reply({ content: `Kurulum Başarılı.` })
    }
  },
};