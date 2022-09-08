const fs = require('fs')
const path = require('path')
const { REST, Routes } = require('discord.js');
const { BOT } = require("../settings/Config")

const commands = []
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

const getFilesRecursively = (directory) => {
  const filesInDirectory = fs.readdirSync(directory)
  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file)
    if (fs.statSync(absolute).isDirectory()) {
      getFilesRecursively(absolute)
    } else {
      commandFiles.push(absolute)
    }
  }
}
getFilesRecursively('./commands')

for (const file of commandFiles) {
  const command = require(`../../${file}`)
    commands.push(command.data.toJSON())
}

const rest = new REST({ version: '10' }).setToken(BOT.botToken);

(async () => {
  try {
    await rest.put(
      Routes.applicationCommands(BOT.appID),
      { body: commands }
    )

    console.log('[Command-Loader] Komutlar yüklendi!')
  } catch (error) {
    console.error(error)
  }
})()


