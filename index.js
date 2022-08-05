const DiscordJS = require('discord.js')
require('dotenv').config()

const client = new DiscordJS.Client()

client.on('ready', () => {
  console.log('The bot is ready')
})


client.on('message', (message) => {
      const { channel } = message
  
      if (channel.type === 'news') {
        message.crosspost()
        console.log('published news message')
      }
    })
    
client.login(process.env.TOKEN)
