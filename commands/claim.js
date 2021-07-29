const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var claimEmbed = new discord.MessageEmbed()
        .setTitle("Ticket geclaimed")
        .setDescription(`Deze ticket is geclaimed door: ${message.author}`)
        .setColor("#a834eb")
        .setFooter("Eindhoven Ticket Management")
        .setTimestamp();

    message.channel.setTopic(`Ticket is geclaimed door ${message.author}`);
    return message.channel.send(claimEmbed);

}

module.exports.help = {
    name: "claim"
}