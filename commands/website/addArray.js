const { EmbedBuilder, SlashCommandBuilder, ApplicationCommandOptionWithChoicesAndAutocompleteMixin } = require('discord.js');
const Website = require(`../../src/models/Portfolio`)
const { BOT } = require(`../../src/settings/Config`)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("addskills")
    .setDescription("Yetenek veya Ödül Ekleme Komutu.")
    .addStringOption(option => option.setName('type').setDescription('Link Type.').setRequired(true) .addChoices(
                { name: 'Skills Workflow', value: 'skills' },
                { name: 'Awards', value: 'awards' },
            ))
   .addStringOption(option => option.setName('title').setDescription('Title.').setRequired(true)),
  async execute(interaction) {
    const type = interaction.options.getString('type')
    const title = interaction.options.getString('title')

    if(interaction.user.id ===! BOT.ownerID) return;

    if(type === `skills`) {
      await Website.findOneAndUpdate( {}, { $push: { skillsWorkflow: title } }, { upsert: true })
      await interaction.reply({ content: `Yeteneklere ${title} Eklendi.` })
    }
     if(type === `awards`) {
      await Website.findOneAndUpdate( {}, { $push: { awards: title } }, { upsert: true })
     await interaction.reply({ content: `Ödüllere ${title} Eklendi.` })

    }
  },
};