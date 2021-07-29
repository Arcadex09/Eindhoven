const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    var embed = new discord.MessageEmbed()
        .setTitle("Bot Versie")
        .setDescription("De momentele versie die de bot draagt is **VERSIE V2.0.0.1.1**")
        .setColor("GREEN")
        .setFooter("Bot Version: V2.0.0.1.1")
        .setTimestamp();

    return message.channel.send(embed);

}

module.exports.help = {
    name: "version"
}