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

//////////////////////////////////////////////////////
// SETUP ENVIRONMENT
//////////////////////////////////////////////////////
bot.on('ready', () => {
    console.log("Vibes is on");
})

//////////////////////////////////////////////////////
// START SERVER
//////////////////////////////////////////////////////
bot.login(process.env.TOKEN);