const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!args[1]) return message.channel.send(`<@${message.author.id}> is AFK reden: geen reden meegegeven.`);

    if (args[1]) return message.channel.send(`<@${message.author.id}> is AFK reden: ${args.slice(1).join(' ')}`);

}

module.exports.help = {
    name: "afk"
}