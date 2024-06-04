let commandNames = [];
let commandAliases = [];
const fs = require("fs")
fs.readdir("./src/commands", (err, files) => {
    files.forEach(file => {
        let props = require(`../commands/${file}`);
        if(!commandNames.includes(props.config.name))commandNames.push(props.config.name);
        if(!commandAliases.includes(props.config.aliases))commandAliases.push(props.config.aliases);
    });
    console.log("Successfully loaded commands");
});

module.exports = (bot, message, args) => {
    if(!commandNames.includes(args[0]) && !commandAliases.some(subArray => subArray.includes(args[0]))) return console.log("bad request");
    let command = require(`./src/commands/${args[0]}`);
    args.shift();
}