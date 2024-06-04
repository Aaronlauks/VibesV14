//////////////////////////////////////////////////////
// INCLUDES
//////////////////////////////////////////////////////
require('dotenv').config();
const {Client, IntentsBitField} = require("discord.js");
const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});
const router = require('./src/router/mainRoutes')
const prefix = "+"

//////////////////////////////////////////////////////
// SETUP ENVIRONMENT
//////////////////////////////////////////////////////
bot.on('messageCreate', (message) => {
    console.log(message.content);
    if(message.content.startsWith(prefix)){
        let args = message.content.slice(prefix.length).trim().split(/ +/g); //args is the inputs after the cmd
        router(bot, message, args);
    }
});

bot.on('ready', (c) => {
    console.log(`${c.user.tag} is up and running`);
})

//////////////////////////////////////////////////////
// START SERVER
//////////////////////////////////////////////////////
bot.login(process.env.TOKEN);