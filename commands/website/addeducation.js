const { EmbedBuilder, SlashCommandBuilder, ApplicationCommandOptionWithChoicesAndAutocompleteMixin } = require('discord.js');
const Website = require(`../../src/models/Portfolio`)
const { BOT } = require(`../../src/settings/Config`)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("addeducation")
    .setDescription("Education Ekleme Komutu.")
   .addStringOption(option => option.setName('title').setDescription('Title.').setRequired(true))
   .addStringOption(option => option.setName('smalltitle').setDescription('Small Title.').setRequired(true))
   .addStringOption(option => option.setName('despriction').setDescription('Despriction Title.').setRequired(true))
   .addStringOption(option => option.setName('gpa').setDescription('Gpa.').setRequired(true))
   .addStringOption(option => option.setName('date').setDescription('Date.').setRequired(true)),
  async execute(interaction) {
    const title = interaction.options.getString('title')
    const smalltitle = interaction.options.getString('smalltitle')
    const despriction = interaction.options.getString('despriction')
    const gpa = interaction.options.getString('gpa')
    const date = interaction.options.getString('date')



    if(interaction.user.id ===! BOT.ownerID) return;
      const data = { title: title, smalltitle: smalltitle, despriction: despriction, date: date, gpa: gpa  }
      await Website.findOneAndUpdate( {}, { $push: { educations: data } }, { upsert: true })
      await interaction.reply({ content: `Education Eklendi.` })

  },
};