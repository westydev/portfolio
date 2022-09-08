const { EmbedBuilder, SlashCommandBuilder, ApplicationCommandOptionWithChoicesAndAutocompleteMixin } = require('discord.js');
const Website = require(`../../src/models/Portfolio`)
const { BOT } = require(`../../src/settings/Config`)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("addlink")
    .setDescription("Link Ekleme Komutu.")
    .addStringOption(option => option.setName('type').setDescription('Link Type.').setRequired(true) .addChoices(
                { name: 'Github', value: 'github' },
                { name: 'Facebook', value: 'facebook' },
                { name: 'Twitter', value: 'twitter' },
                { name: 'Linkedn', value: 'linkedn' },
            ))
   .addStringOption(option => option.setName('link').setDescription('Link.').setRequired(true)),
  async execute(interaction) {
    const type = interaction.options.getString('type')
    const link = interaction.options.getString('link')
    if(interaction.user.id ===! BOT.ownerID) return;

    if(type === `github`) {
      await Website.findOneAndUpdate( {}, { githubLink: link })
      await interaction.reply({ content: `Github linki ${link} olarak değiştirilirdi.` })
    }
     if(type === `facebook`) {
      await Website.findOneAndUpdate( {}, { facebookLink: link })
     await interaction.reply({ content: `Facebook linki ${link} olarak değiştirilirdi.` })

    }
     if(type === `twitter`) {
      await Website.findOneAndUpdate( {}, { twitterLink: link })
     await interaction.reply({ content: `Twitter linki ${link} olarak değiştirilirdi.` })

    }
     if(type === `linkedn`) {
     await Website.findOneAndUpdate( {}, { linkednLink: link })
     await interaction.reply({ content: `Linkedn linki ${link} olarak değiştirilirdi.` })
    }
  },
};