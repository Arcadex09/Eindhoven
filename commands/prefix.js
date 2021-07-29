const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var prefixEmbed = new discord.MessageEmbed()
        .setTitle(`Mijn prefix is ,`)
        .setDescription(`Hallootjes ${message.author}! Mijn prefix is .`)
        .setColor("#11ff00")
        .setFooter("Eindhoven");

    return message.channel.send(prefixEmbed);

}

module.exports.help = {
    name: "prefix"
}