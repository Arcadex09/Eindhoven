const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var claimEmbed = new discord.MessageEmbed()
        .setTitle("Ticket Doorverwezen")
        .setDescription(`Deze ticket is doorverwezen door: ${message.author} Er zal nu een hogere afdeling naar deze ticket komen kijken.`)
        .setColor("#00ffdd")
        .setFooter("Eindhoven Ticket Management")
        .setTimestamp();

    message.channel.setTopic(`Ticket is doorverwezen door ${message.author}`);
    return message.channel.send(claimEmbed);

}

module.exports.help = {
    name: "doorverwijzen"
}