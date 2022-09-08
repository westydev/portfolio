const { EmbedBuilder, SlashCommandBuilder, ApplicationCommandOptionWithChoicesAndAutocompleteMixin } = require('discord.js');
const Website = require(`../../src/models/Portfolio`)
const { BOT } = require(`../../src/settings/Config`)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("addlanguagetool")
    .setDescription("Dil veya Tool Ekleme Komutu.")
    .addStringOption(option => option.setName('type').setDescription('Language Type.').setRequired(true) .addChoices(
                { name: 'Html', value: 'html' },
                { name: 'Css', value: 'css' },
                { name: 'Javascript', value: 'javascript' },
                { name: 'Angular', value: 'angular' },
                { name: 'React', value: 'react' },
                { name: 'Nodejs', value: 'nodejs' },
                { name: 'Less', value: 'less' },
                { name: 'Wordpress', value: 'wordpress' },
                { name: 'gulp', value: 'gulp' },
                { name: 'grunt', value: 'grunt' },
                { name: 'Npm', value: 'npm' }
            ))
   .addBooleanOption(option => option.setName('enabled').setDescription('Enabled.').setRequired(true)),
  async execute(interaction) {
    const type = interaction.options.getString('type')
    const enabled = interaction.options.getBoolean('enabled')
    if(interaction.user.id ===! BOT.ownerID) return;

    if(type === `html`) {
      await Website.findOneAndUpdate( {}, { html: enabled })
      await interaction.reply({ content: `Html enabledi ${enabled} olarak değiştirilirdi.` })
    }
     if(type === `css`) {
      await Website.findOneAndUpdate( {}, { css: enabled })
     await interaction.reply({ content: `Css enabledi ${enabled} olarak değiştirilirdi.` })

    }
     if(type === `javascript`) {
      await Website.findOneAndUpdate( {}, { javascript: enabled })
     await interaction.reply({ content: `Javascript enabledi ${enabled} olarak değiştirilirdi.` })

    }
     if(type === `angular`) {
     await Website.findOneAndUpdate( {}, { angular: enabled })
     await interaction.reply({ content: `Angular enabledi ${enabled} olarak değiştirilirdi.` })
    }
    if(type === `react`) {
      await Website.findOneAndUpdate( {}, { react: enabled })
      await interaction.reply({ content: `React enabledi ${enabled} olarak değiştirilirdi.` })
    }
     if(type === `nodejs`) {
      await Website.findOneAndUpdate( {}, { nodejs: enabled })
     await interaction.reply({ content: `Nodejs enabledi ${enabled} olarak değiştirilirdi.` })

    }
     if(type === `less`) {
      await Website.findOneAndUpdate( {}, { less: enabled })
     await interaction.reply({ content: `Less enabledi ${enabled} olarak değiştirilirdi.` })

    }
     if(type === `wordpress`) {
     await Website.findOneAndUpdate( {}, { wordpress: enabled })
     await interaction.reply({ content: `Wordpress enabledi ${enabled} olarak değiştirilirdi.` })
    }
    if(type === `gulp`) {
      await Website.findOneAndUpdate( {}, { gulp: enabled })
      await interaction.reply({ content: `Gulp enabledi ${enabled} olarak değiştirilirdi.` })
    }
     if(type === `grunt`) {
      await Website.findOneAndUpdate( {}, { grunt: enabled })
     await interaction.reply({ content: `Grunt enabledi ${enabled} olarak değiştirilirdi.` })

    }
     if(type === `npm`) {
      await Website.findOneAndUpdate( {}, { npm: enabled })
     await interaction.reply({ content: `Npm enabledi ${enabled} olarak değiştirilirdi.` })

    }
  },
};